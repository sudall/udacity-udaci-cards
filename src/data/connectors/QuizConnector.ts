import {AsyncStorage} from "react-native";

class QuizConnector {
    public static readonly instance = new QuizConnector();

    private static readonly LastQuizCompletionDateAsyncStorageKey = "UdaciCards.LastQuizCompletionDate";

    completeQuiz() {
        return this.setLastQuizCompletionDate(new Date());
    }

    wasLastQuizCompletedToday(): Promise<boolean> {
        const today = new Date();

        return this.getLastQuizCompletionDate()
            .then((lastQuizCompletionDate) => {
                if (lastQuizCompletionDate == null) {
                    return false;
                }

                return lastQuizCompletionDate.toDateString() === today.toDateString();
            });
    }

    deleteLastQuizCompletionDate() {
        return AsyncStorage.removeItem(QuizConnector.LastQuizCompletionDateAsyncStorageKey);
    }

    private stringifyDate(date: Date) {
        return date.toDateString();
    }

    private parseDateString(dateString: string) {
        return new Date(dateString);
    }

    private setLastQuizCompletionDate(date: Date) {
        return AsyncStorage.setItem(QuizConnector.LastQuizCompletionDateAsyncStorageKey, this.stringifyDate(date))
    }

    private getLastQuizCompletionDate(): Promise<Date | null> {
        return AsyncStorage.getItem(QuizConnector.LastQuizCompletionDateAsyncStorageKey)
            .then((itemString) => {
                if (itemString == null) {
                    return null;
                }

                return this.parseDateString(itemString);
            });
    }
}

export default QuizConnector;