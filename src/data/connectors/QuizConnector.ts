import {AsyncStorage} from "react-native";

class QuizConnector {
    public static readonly instance = new QuizConnector();

    // private static readonly QuizCompletionDatesAsyncStorageKey = "UdaciCards.QuizCompletionDates"
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

    // completeQuiz() {
    //     return this.getQuizCompletionTimes()
    //         .then((completionTimes) => {
    //             completionTimes.push(new Date());
    //
    //             return this.setQuizCompletionTimes(completionTimes);
    //         });
    // }
    //
    // hasCompletedQuizToday(): Promise<boolean> {
    //     const today = new Date();
    //
    //     return this.getQuizCompletionTimes()
    //         .then((completionTimes: Date[]) => {
    //             const quizCompletedToday = completionTimes.some((time) => {
    //                 // are any of the completed times for today?
    //                 return time.toDateString() === today.toDateString();
    //             });
    //
    //             return quizCompletedToday;
    //         });
    // }
    //
    // private setQuizCompletionTimes(completionTimes: Date[]) {
    //     // only keep dates that are for today to keep the storage from getting too big
    //     const today = new Date();
    //
    //     completionTimes = completionTimes.filter((time) => {
    //         return today.toDateString() === time.toDateString();
    //     });
    //
    //     return AsyncStorage.setItem(QuizConnector.QuizCompletionDatesAsyncStorageKey, JSON.stringify(completionTimes));
    // }
    //
    // private getQuizCompletionTimes(): Promise<Date[]> {
    //     return AsyncStorage.getItem(QuizConnector.QuizCompletionDatesAsyncStorageKey)
    //         .then((storageItem) => {
    //             if (storageItem == null) {
    //                 return [];
    //             }
    //
    //             return JSON.parse(storageItem);
    //         });
    // }
}

export default QuizConnector;