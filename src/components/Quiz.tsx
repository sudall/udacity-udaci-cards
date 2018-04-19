import * as React from "react";
import DeckData from "src/data/models/DeckData";
import {Button, Text, View} from "react-native";
import QuizConnector from "src/data/connectors/QuizConnector";

// props that are provided as parameters
interface IOwnProps {
    deck: DeckData;
}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps;

// internal state of the component
interface IState {
    currentQuestionIndex: number;
    isViewingAnswer: boolean;
    correctQuestionCount: number;
}

class Quiz extends React.Component<IAllProps, IState> {
    readonly state: IState = this.freshState;

    private get freshState(): IState {
        return {
            currentQuestionIndex: 0,
            isViewingAnswer: false,
            correctQuestionCount: 0
        };
    }

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private onMarkCorrect = () => {
        this.setState((previousState) => {
            return {
                correctQuestionCount: previousState.correctQuestionCount + 1
            }
        });

        this.goToNextQuestion();
    };

    private onMarkIncorrect = () => {
        this.goToNextQuestion();
    };

    private goToNextQuestion() {
        this.setState((previousState) => {
            return {
                currentQuestionIndex: previousState.currentQuestionIndex + 1,
                isViewingAnswer: false
            }
        });
    }

    private onViewAnswer = () => {
        this.setState((previousState) => {
            return {
                isViewingAnswer: true
            }
        });
    };

    private onRestartQuiz = () => {
        this.setState(this.freshState);
    };

    render() {
        const {onMarkCorrect, onMarkIncorrect, onViewAnswer, onRestartQuiz} = this;
        const {deck} = this.props;
        const {currentQuestionIndex, isViewingAnswer, correctQuestionCount} = this.state;

        if (deck.questions.length === 0) {
            return <Text>You need at least one card in this deck to take a quiz.</Text>
        }

        const currentQuestionNumber = currentQuestionIndex + 1;
        // if the current question is beyond the number of questions...
        if (currentQuestionNumber > deck.questions.length) {
            // it means the quiz is over
            QuizConnector.instance.completeQuiz();

            // show them their score
            const percentCorrect = (correctQuestionCount / deck.questions.length) * 100;

            return (
                <View style={{alignItems: "center", paddingVertical: 50}}>
                    <Text>You scored {percentCorrect}%</Text>
                    <Button onPress={onRestartQuiz} title={"Start over"}/>
                </View>
            );
        }

        const currentQuestion = deck.questions[currentQuestionIndex];

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>{deck.questions.length - currentQuestionIndex} questions left</Text>
                <Text>Question: {currentQuestion.question}</Text>
                {
                    isViewingAnswer ?
                        <Text>Answer: {currentQuestion.answer}</Text>
                        :
                        null
                }
                <Button onPress={onViewAnswer} title={"Show Answer"}/>
                <Button onPress={onMarkCorrect} title={"Correct"}/>
                <Button onPress={onMarkIncorrect} title={"Incorrect"}/>
            </View>
        );
    }
}

export default Quiz;