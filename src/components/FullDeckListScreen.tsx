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
    allDecks: DeckTitleToDeckDataMap;
}

class FullDeckListScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        allDecks: {}
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

        return (
            <DeckList decks={allDecks} onDeckPress={onDeckPress} />
        );
    }
}

export class FullDeckListScreenUtils {
    static readonly RouteName = "FullDeckListScreen";
}

export default withNavigation(FullDeckListScreen);