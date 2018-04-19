import * as React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import DeckData from "src/data/models/DeckData";
import {
    NavigationScreenProp,
    NavigationState,
    StackNavigator} from "react-navigation";
import Quiz from "src/components/Quiz";
import Deck from "src/components/Deck";
import {default as FullDeckListScreen, FullDeckListScreenUtils} from "src/components/FullDeckListScreen";
import {default as DeckScreen, DeckScreenUtils} from "src/components/DeckScreen";
import AddNewQuestionScreen, {AddNewQuestionScreenUtils} from "src/components/AddNewQuestionScreen";
import {default as QuizScreen, QuizScreenUtils} from "src/components/QuizScreen";
import AddNewDeckScreen, {AddNewDeckScreenUtils} from "src/components/AddNewDeckScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationConnector from "src/data/connectors/NotificationConnector";

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

export const NavigationStack = StackNavigator(
    {
        [FullDeckListScreenUtils.RouteName]: {
            screen: FullDeckListScreen,
            navigationOptions: ({navigation}: {navigation: NavigationScreenProp<NavigationState>}) => {
                return {
                    title: "Decks",
                    headerRight : (
                        <TouchableOpacity style={{paddingRight: 20}}
                            onPress={() => navigation.navigate(AddNewDeckScreenUtils.RouteName)}>
                            <Ionicons name="md-add" size={30}/>
                        </TouchableOpacity>
                    )
                }
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
    },
    {
        initialRouteName: FullDeckListScreenUtils.RouteName
    });

class UdaciCardsApplication extends React.Component<IAllProps, IState> {
    readonly state: IState = {
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    componentDidMount() {
        NotificationConnector.instance.updateQuizReminderNotification();
    }

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