import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import DeckList from "src/components/DeckList";
import DeckData from "src/data/models/DeckData";
import {StackNavigator} from "react-navigation";
import Deck from "src/components/Deck";
import Quiz from "src/components/Quiz";
import AddNewDeckForm from "src/components/AddNewDeckForm";
import AddNewQuestionForm from "src/components/AddNewQuestionForm";

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

const NavigationStack = StackNavigator({
    DeckList: {
        screen: DeckList
    },
    // Deck: {
    //     screen: Deck
    // }
});

class UdaciCardsApplication extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private decks: DeckTitleToDeckDataMap = {
        "Deck1": {
            title: "Deck1",
            questions: [
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                },
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                },
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                },
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                }
            ]
        },
        "Deck2": {
            title: "Deck2",
            questions: [
                {
                    question: "Question?",
                    answer: "Yes"
                },
                {
                    question: "question? 2",
                    answer: "Yes 2"
                }
            ]
        },
        "Deck3": {
            title: "Deck1",
            questions: [
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                }
            ]
        },
        "Deck4": {
            title: "Deck2",
            questions: [
                {
                    question: "Question?",
                    answer: "Yes"
                },
                {
                    question: "question? 2",
                    answer: "Yes 2"
                }
            ]
        },
        "Deck5": {
            title: "Deck1",
            questions: [
                {
                    question: "This is a question?",
                    answer: "Yes it is"
                },
                {
                    question: "This is a question? 2",
                    answer: "Yes it is 2"
                }
            ]
        },
        "Deck6": {
            title: "Deck2",
            questions: [
                {
                    question: "Question?",
                    answer: "Yes"
                },
                {
                    question: "question? 2",
                    answer: "Yes 2"
                }
            ]
        },
        "Deck7": {
            title: "Deck2",
            questions: [
                {
                    question: "Question?",
                    answer: "Yes"
                },
                {
                    question: "question? 2",
                    answer: "Yes 2"
                }
            ]
        },
        "Deck8": {
            title: "Deck2",
            questions: [
                {
                    question: "Question?",
                    answer: "Yes"
                },
                {
                    question: "question? 2",
                    answer: "Yes 2"
                }
            ]
        }
    };

    render() {
        const {decks} = this;
        const {} = this.props;
        const {} = this.state;

        return (
            <View style={styles.container}>
                <View style={{height: 45}}>
                    {/*<Text>Open up App.ts to start working on your app!</Text>*/}
                    {/*<Text>Changes you make will automatically reload.</Text>*/}
                    {/*<Text>Shake your phone to open the developer menu.</Text>*/}
                </View>
                {/*<DeckList decks={decks}/>*/}
                {/*<Deck deck={decks["Deck1"]}/>*/}
                {/*<Quiz deck={decks["Deck1"]}/>*/}
                {/*<AddNewDeckForm/>*/}
                <AddNewQuestionForm deck={decks["Deck1"]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3f3e3d',
        alignItems: "stretch",
        justifyContent: 'center',
    },
});

export default UdaciCardsApplication;