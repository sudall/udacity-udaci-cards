import * as React from "react";
import {Button, Text, View} from "react-native";
import DeckData from "src/data/models/DeckData";

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

}

class Deck extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    onAddCard = () => {
        //TODO
    };

    onStartQuiz = () => {
        //TODO
    };

    render() {
        const {onAddCard, onStartQuiz} = this;
        const {deck} = this.props;
        const {} = this.state;

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
                <Button onPress={onAddCard} title={"Add Card"}/>
                <Button onPress={onStartQuiz} title={"Start Quiz"}/>
            </View>
        );
    }
}

export default Deck;