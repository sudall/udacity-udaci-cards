import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import DeckList from "src/components/DeckList";
import DeckData from "src/data/models/DeckData";
import {StackNavigator, withNavigation} from "react-navigation";
import AddNewQuestionForm from "src/components/AddNewQuestionForm";
import DeckConnector from "src/data/connectors/DeckConnector";
import QuestionData from "src/data/models/QuestionData";
import AddNewDeckForm from "src/components/AddNewDeckForm";
import Quiz from "src/components/Quiz";
import Deck from "src/components/Deck";
import FullDeckList, {default as FullDeckListScreen, FullDeckListScreenUtils} from "src/components/FullDeckListScreen";
import DeckPage, {default as DeckScreen, DeckScreenUtils} from "src/components/DeckScreen";
import AddNewQuestionScreen, {AddNewQuestionScreenUtils} from "src/components/AddNewQuestionScreen";
import {default as QuizScreen, QuizScreenUtils} from "src/components/QuizScreen";
import AddNewDeckScreen, {AddNewDeckScreenUtils} from "src/components/AddNewDeckScreen";
import HomeScreen, {HomeScreenUtils} from "src/components/HomeScreen";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps;

// internal state of the component
interface IState {
}

export type DeckTitleToDeckDataMap = {[deckTitle: string]: DeckData};

const NavigationStack = StackNavigator(
    {
        [FullDeckListScreenUtils.RouteName]: {
            screen: FullDeckListScreen,
            navigationOptions: {
                title: "Decks"
            }
        },
        [DeckScreenUtils.RouteName]: {
            screen: DeckScreen,
            navigationOptions: {
                title: "Deck"
            }
        },
        [AddNewQuestionScreenUtils.RouteName]: {
            screen: AddNewQuestionScreen,
            navigationOptions: {
                title: "Add a question"
            }
        },
        [QuizScreenUtils.RouteName]: {
            screen: QuizScreen,
            navigationOptions: {
                title: "Quiz"
            }
        },
        [AddNewDeckScreenUtils.RouteName]: {
            screen: AddNewDeckScreen,
            navigationOptions: {
                title: "Add a deck"
            }
        },
        [HomeScreenUtils.RouteName]: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Home"
            }
        }
    },
    {
        initialRouteName: HomeScreenUtils.RouteName
    });

class UdaciCardsApplication extends React.Component<IAllProps, IState> {
    readonly state: IState = {
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    render() {
        const {} = this;
        const {} = this.props;
        const {} = this.state;

        return (
            <View style={styles.container}>
                <NavigationStack />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
    },
});

export default UdaciCardsApplication;