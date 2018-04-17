import * as React from "react";
import DeckList from "src/components/DeckList";
import DeckConnector from "src/data/connectors/DeckConnector";
import {
    DeckTitleToDeckDataMap,
    } from "src/components/UdaciCardsApplication";
import {
    NavigationEventSubscription,
    NavigationInjectedProps,
    withNavigation
} from "react-navigation";
import DeckData from "src/data/models/DeckData";
import {DeckScreenUtils} from "src/components/DeckScreen";
import {Text, View} from "react-native";

// props that are provided as parameters
interface IOwnProps {
}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps & NavigationInjectedProps;

// internal state of the component
interface IState {
    allDecks: DeckTitleToDeckDataMap | null;
}

class FullDeckListScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        allDecks: null
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private focusListener: NavigationEventSubscription = this.props.navigation.addListener("didFocus", () => {
        this.refreshState();
    });

    componentWillUnmount() {
        this.focusListener.remove();
    }

    private refreshState = () => {
        return DeckConnector.instance.getAllDecks()
            .then((allDecks) => {
                this.setState({
                    allDecks
                });
            });
    };

    private onDeckPress = (deck: DeckData) => {
        const routeParams: DeckScreenUtils.NavigationProps = {
            deckTitle: deck.title,
        };

        this.props.navigation.navigate(DeckScreenUtils.RouteName, routeParams);
    };

    render() {
        const {onDeckPress} = this;
        const {} = this.props;
        const {allDecks} = this.state;

        if (allDecks == null) {
            return null;
        }

        const deckArray = Object.values(allDecks);

        return (
            <View>
                {
                    deckArray.length === 0 ?
                        <Text>Decks that you've created will show up here. You haven't created any decks yet.</Text>
                        :
                        <DeckList decks={deckArray} onDeckPress={onDeckPress} />
                }
            </View>
        );
    }
}

export class FullDeckListScreenUtils {
    static readonly RouteName = "FullDeckListScreen";
}

export default withNavigation(FullDeckListScreen);