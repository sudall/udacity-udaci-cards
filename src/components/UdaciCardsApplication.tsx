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
    allDecks: DeckTitleToDeckDataMap;
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

// export const fakeDecks: DeckTitleToDeckDataMap = {
//     "Deck1": {
//         title: "Deck1",
//         questions: [
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             },
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             },
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             },
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             }
//         ]
//     },
//     "Deck2": {
//         title: "Deck2",
//         questions: [
//             {
//                 question: "Question?",
//                 answer: "Yes"
//             },
//             {
//                 question: "question? 2",
//                 answer: "Yes 2"
//             }
//         ]
//     },
//     "Deck3": {
//         title: "Deck1",
//         questions: [
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             }
//         ]
//     },
//     "Deck4": {
//         title: "Deck2",
//         questions: [
//             {
//                 question: "Question?",
//                 answer: "Yes"
//             },
//             {
//                 question: "question? 2",
//                 answer: "Yes 2"
//             }
//         ]
//     },
//     "Deck5": {
//         title: "Deck1",
//         questions: [
//             {
//                 question: "This is a question?",
//                 answer: "Yes it is"
//             },
//             {
//                 question: "This is a question? 2",
//                 answer: "Yes it is 2"
//             }
//         ]
//     },
//     "Deck6": {
//         title: "Deck2",
//         questions: [
//             {
//                 question: "Question?",
//                 answer: "Yes"
//             },
//             {
//                 question: "question? 2",
//                 answer: "Yes 2"
//             }
//         ]
//     },
//     "Deck7": {
//         title: "Deck2",
//         questions: [
//             {
//                 question: "Question?",
//                 answer: "Yes"
//             },
//             {
//                 question: "question? 2",
//                 answer: "Yes 2"
//             }
//         ]
//     },
//     "Deck8": {
//         title: "Deck2",
//         questions: [
//             {
//                 question: "Question?",
//                 answer: "Yes"
//             },
//             {
//                 question: "question? 2",
//                 answer: "Yes 2"
//             }
//         ]
//     }
// };

class UdaciCardsApplication extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        allDecks: {}
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    componentDidMount() {
        // DeckConnector.instance.createNewDeck("exampleDeck")
        //     // .then(() => {
        //     //     return DeckConnector.instance.createNewDeck("exampleDeck2")
        //     // })
        //     .then(() => {
        //         const question = new QuestionData();
        //         question.question = "Question???";
        //         question.answer = "Answer!!!";
        //
        //         return DeckConnector.instance.createNewQuestion("exampleDeck", question);
        //     })
        //     .then(() => {
                return DeckConnector.instance.getAllDecks()
                    .then((allDecks) => {
                        this.setState({
                            allDecks
                        });
                    });
            // });
    }

    render() {
        const {} = this;
        const {} = this.props;
        const {allDecks} = this.state;

        // const exampleDeck = allDecks["exampleDeck2"];

        return (
            <View style={styles.container}>
                {/*<View style={{height: 45}}>*/}
                    {/*<Text>Open up App.ts to start working on your app!</Text>*/}
                    {/*<Text>Changes you make will automatically reload.</Text>*/}
                    {/*<Text>Shake your phone to open the developer menu.</Text>*/}
                {/*</View>*/}
                {/*<DeckList decks={allDecks}/>*/}
                {/*<Deck deck={exampleDeck}/>*/}
                {/*<Quiz deck={exampleDeck}/>*/}
                {/*{exampleDeck != null ?*/}

                    {/*<Deck deck={exampleDeck}/>*/}
                    {/*:*/}
                    {/*null*/}
                {/*}*/}
                {/*<AddNewDeckForm/>*/}
                {/*<AddNewQuestionForm deck={allDecks["exampleDeck"]}/>*/}
                <NavigationStack />
                {/*<Text>{JSON.stringify(allDecks)}</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#3f3e3d',
        alignItems: "stretch",
        justifyContent: 'center',
    },
});

export default UdaciCardsApplication;