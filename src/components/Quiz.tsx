import * as React from "react";
import DeckData from "src/data/models/DeckData";
import {Button, Text, View} from "react-native";

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
    readonly state: IState = {
        currentQuestionIndex: 0,
        isViewingAnswer: false,
        correctQuestionCount: 0
    };

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

    private onToggleViewAnswerOrQuestion = () => {
        this.setState((previousState) => {
            return {
                isViewingAnswer: !previousState.isViewingAnswer
            }
        });
    };

    render() {
        const {onMarkCorrect, onMarkIncorrect, onToggleViewAnswerOrQuestion} = this;
        const {deck} = this.props;
        const {currentQuestionIndex, isViewingAnswer, correctQuestionCount} = this.state;

        if (deck.questions.length === 0) {
            return <Text>You need at least one card in this deck to take a quiz.</Text>
        }

        const currentQuestionNumber = currentQuestionIndex + 1;
        // if the current question is beyond the number of questions...
        if (currentQuestionNumber > deck.questions.length) {
            const percentCorrect = (correctQuestionCount / deck.questions.length) * 100;

            return (
                <View style={{alignItems: "center", paddingVertical: 50}}>
                    <Text>You scored {percentCorrect}%</Text>
                </View>
            );
        }

        const currentQuestion = deck.questions[currentQuestionIndex];

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>{deck.questions.length - currentQuestionIndex} questions left</Text>
                <Text>{isViewingAnswer ? currentQuestion.answer : currentQuestion.question}</Text>
                <Button onPress={onToggleViewAnswerOrQuestion} title={isViewingAnswer ? "View Question" : "View Answer"}/>
                <Button onPress={onMarkCorrect} title={"Correct"}/>
                <Button onPress={onMarkIncorrect} title={"Incorrect"}/>
            </View>
        );
    }
}

export default Quiz;