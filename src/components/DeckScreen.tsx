import * as React from "react";
import Deck from "src/components/Deck";
import {
    NavigationEventSubscription,
    NavigationInjectedProps,
    NavigationScreenProps,
    withNavigation
} from "react-navigation";
import DeckData from "src/data/models/DeckData";
import {AddNewQuestionScreenUtils} from "src/components/AddNewQuestionScreen";
import DeckConnector from "src/data/connectors/DeckConnector";
import {QuizScreenUtils} from "src/components/QuizScreen";
import {View} from "react-native";
import NavigationUtils from "src/utilities/NavigationUtils";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

export class DeckScreenUtils {
    static readonly RouteName = "DeckScreen";
}

export module DeckScreenUtils {
    export interface NavigationProps {
        deckTitle: string;
    }
}

type IAllProps = IOwnProps
    & IInjectedProps
    & NavigationScreenProps<DeckScreenUtils.NavigationProps>
    & NavigationInjectedProps;

// internal state of the component
interface IState {
    deck: DeckData | null;
}

class DeckScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        deck: null
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

    private onAddQuestion = () => {
        const deck = this.state.deck;

        if (deck != null) {
            const routeParams: AddNewQuestionScreenUtils.NavigationProps = {
                deck
            };

            this.props.navigation.navigate(AddNewQuestionScreenUtils.RouteName, routeParams);
        }
    };

    private onStartQuiz = () => {
        const deck = this.state.deck;

        if (deck != null) {
            const routeParams: QuizScreenUtils.NavigationProps = {
                deck
            };

            this.props.navigation.navigate(QuizScreenUtils.RouteName, routeParams);
        }
    };

    private refreshState = () => {
        const deckTitle = NavigationUtils.getParam(this.props,"deckTitle");

        if (deckTitle != null) {
            DeckConnector.instance.getDeck(deckTitle)
                .then((deck) => {
                    this.setState({
                        deck
                    });
                });
        }
    };

    render() {
        const {onAddQuestion, onStartQuiz} = this;
        const {} = this.props;
        const {deck} = this.state;

        return (
            <View>
            {
                deck !== null
                ?
                <Deck deck={deck} onAddQuestion={onAddQuestion} onStartQuiz={onStartQuiz} />
                :
                null
            }
            </View>
        );
    }
}

export default withNavigation(DeckScreen);