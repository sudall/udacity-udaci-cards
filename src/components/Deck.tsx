import * as React from "react";
import {Button, Text, View} from "react-native";
import DeckData from "src/data/models/DeckData";

// props that are provided as parameters
module Deck {
    export interface IOwnProps {
        deck: DeckData;
        onAddQuestion: () => void;
        onStartQuiz: () => void;
    }
}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = Deck.IOwnProps & IInjectedProps;

// internal state of the component
interface IState {

}

class Deck extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    render() {
        const {} = this;
        const {deck, onAddQuestion, onStartQuiz} = this.props;
        const {} = this.state;

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
                <Button onPress={onAddQuestion} title={"Add Card"}/>
                <Button onPress={onStartQuiz} title={"Start Quiz"}/>
            </View>
        );
    }
}

export default Deck;