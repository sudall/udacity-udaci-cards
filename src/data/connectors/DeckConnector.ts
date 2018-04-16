import {AsyncStorage} from "react-native";
import DeckData from "src/data/models/DeckData";
import QuestionData from "src/data/models/QuestionData";
import {DeckTitleToDeckDataMap} from "src/components/UdaciCardsApplication";

class DeckConnector {
    public static readonly instance = new DeckConnector();

    private static readonly DeckAsyncStorageKey = "UdaciCards.Decks";

    createNewDeck(title: string) {
        const newDeck = new DeckData();
        newDeck.title = title;

        return this.mergeDeckData(newDeck);
    }

    createNewQuestion(deckTitle: string, question: QuestionData) {
        return this.getDeck(deckTitle)
            .then((deck) => {
                if (deck != null) {
                    deck.questions.push(question);

                    return this.mergeDeckData(deck);
                }

                return;
            });
    }

    private mergeDeckData(deck: DeckData) {
        const storageItem = {
            [deck.title]: deck
        };

        return this.mergeDeckTitleToDeckDataMap(storageItem);
    }

    private mergeDeckTitleToDeckDataMap(deckTitleToDeckDataMap: {[deckTitle: string]: Partial<DeckData>}) {
        return AsyncStorage.mergeItem(DeckConnector.DeckAsyncStorageKey, JSON.stringify(deckTitleToDeckDataMap));
    }

    getAllDecks(): Promise<DeckTitleToDeckDataMap> {
        return AsyncStorage.getItem(DeckConnector.DeckAsyncStorageKey)
            .then((item) => {
                if (item == null) {
                    return {};
                }

                return JSON.parse(item);
            });
    }

    getDeck(title: string): Promise<DeckData> {
        return this.getAllDecks()
            .then((result) => {

                const resultDeck = result[title];

                if (resultDeck == null) {
                    throw new Error(`No deck found with this title: ${title}`);
                }

                return resultDeck;
            });
    }

    deleteAllDecks() {
        return AsyncStorage.setItem(DeckConnector.DeckAsyncStorageKey, JSON.stringify({}));
    }
}

export default DeckConnector;