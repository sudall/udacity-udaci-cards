import {AsyncStorage} from "react-native";
import DeckData from "src/data/models/DeckData";
import QuestionData from "src/data/models/QuestionData";
import {DeckTitleToDeckDataMap} from "src/components/UdaciCardsApplication";

class DeckConnector {
    public static readonly instance = new DeckConnector();

    private static readonly DeckAsyncStorageKey = "UdaciCards.Decks";

    createNewDeck(title: string) {
        const storageItem: DeckTitleToDeckDataMap = {
            [title]: new DeckData()
        };

        return this.mergeDeckTitleToDeckDataMap(storageItem);
    }

    createNewQuestion(deckTitle: string, question: QuestionData) {
        const delta: Partial<DeckData> = {
            questions: [
                question
            ]
        };

        const storageItem = {
            [deckTitle]: delta
        };

        return this.mergeDeckTitleToDeckDataMap(storageItem);
    }

    private mergeDeckTitleToDeckDataMap(deckTitleToDeckDataMap: {[deckTitle: string]: Partial<DeckData>}) {
        return AsyncStorage.mergeItem(DeckConnector.DeckAsyncStorageKey, JSON.stringify(deckTitleToDeckDataMap));
    }

    getAllDecks(title: string): Promise<DeckTitleToDeckDataMap> {
        return AsyncStorage.getItem(DeckConnector.DeckAsyncStorageKey)
            .then((item) => {
                return JSON.parse(item);
            });
    }
}

export default DeckConnector;