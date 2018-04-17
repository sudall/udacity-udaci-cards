import * as React from "react";
import {Button, Text, TextInput, View} from "react-native";
import QuestionData from "src/data/models/QuestionData";
import DeckConnector from "src/data/connectors/DeckConnector";
import DeckData from "src/data/models/DeckData";

// props that are provided as parameters
interface IOwnProps {
    deck: DeckData;
    onNewQuestionAdded: () => void;
}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps;

// internal state of the component
interface IState {
    question: string;
    answer: string;
}

class AddNewQuestionForm extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        answer: "",
        question: ""
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    onQuestionInputChange = (newQuestion: string) => {
        this.setState({
            question: newQuestion
        });
    };

    onAnswerInputChange = (newAnswer: string) => {
        this.setState({
            answer: newAnswer
        });
    };

    onSubmit = () => {
        const {question, answer} = this.state;
        const {deck} = this.props;

        if (question !== "" && answer !== "") {
            const newQuestion = new QuestionData();
            newQuestion.answer = answer;
            newQuestion.question = question;

            DeckConnector.instance.createNewQuestion(deck.title, newQuestion)
                .then(() => {
                    this.setState({
                        question: "",
                        answer: ""
                    });

                    this.props.onNewQuestionAdded();
                });
        }
    };

    render() {
        const {onQuestionInputChange, onAnswerInputChange, onSubmit} = this;
        const {} = this.props;
        const {question, answer} = this.state;

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>Enter a question and its answer below.</Text>
                <TextInput style={{width: "75%"}} placeholder={"Question"} value={question} onChange={(event) => {
                    return onQuestionInputChange(event.nativeEvent.text);
                }}/>
                <TextInput style={{width: "75%"}} placeholder={"Answer"} value={answer} onChange={(event) => {
                    return onAnswerInputChange(event.nativeEvent.text);
                }}/>
                <Button onPress={onSubmit} title={"Submit"}/>
            </View>
        );
    }
}

export default AddNewQuestionForm;