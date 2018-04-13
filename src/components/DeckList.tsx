import * as React from "react";
import {FlatList, SectionList, Text, View} from "react-native";
import {DeckTitleToDeckDataMap} from "src/components/UdaciCardsApplication";
import DeckData from "src/data/models/DeckData";

// props that are provided as parameters
interface IOwnProps {
    decks: DeckTitleToDeckDataMap;
}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps;

// internal state of the component
interface IState {

}

class DeckList extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    renderDeckItem = ({item}: {item: DeckData}) => {
        const deck = item;
        return (
            <View style={{borderWidth: 1, alignItems: "center", paddingVertical: 50}}>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
            </View>
        );
    };

    render() {
        const {} = this;
        const {decks} = this.props;
        const {} = this.state;

        const deckArray = Object.values(decks);

        return (
            <View>
                <FlatList keyExtractor={(item: DeckData) => { return item.title }}
                          data={deckArray}
                          renderItem={this.renderDeckItem} />
            </View>
        );
    }
}

export default DeckList;