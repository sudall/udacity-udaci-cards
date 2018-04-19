import QuizConnector from "src/data/connectors/QuizConnector";
import {AsyncStorage} from "react-native";
import {Notifications, Permissions} from "expo";

class NotificationConnector {
    public static readonly instance = new NotificationConnector();

    private static readonly QuizReminderNotificationIdAsyncStorageKey = "UdaciCards.QuizReminderNotificationId";

    private static readonly QuizReminderNotification: Notifications.LocalNotification = {
        title: "Take a quiz!",
        body: "Don't forget to take a quiz today!"
    };

    private getQuizReminderNotificationId(): Promise<Notifications.LocalNotificationId | null> {
        return AsyncStorage.getItem(NotificationConnector.QuizReminderNotificationIdAsyncStorageKey)
            .then((item) => {
                if (item == null) {
                    return null;
                }

                return parseInt(item);
            });
    }

    private setQuizReminderNotificationId(notificationId: Notifications.LocalNotificationId) {
        return AsyncStorage.setItem(NotificationConnector.QuizReminderNotificationIdAsyncStorageKey, notificationId.toString());
    }

    updateQuizReminderNotification(): Promise<void> {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then((response) => {
                if (response.status === "granted") {
                    return this.cancelQuizReminderNotification()
                        .then(() => {
                            return QuizConnector.instance.wasLastQuizCompletedToday();
                        })
                        .then((wasLastQuizCompletedToday) => {
                            if (!wasLastQuizCompletedToday) {
                                const time = new Date();
                                time.setSeconds(time.getSeconds() + 5);
                                return Notifications.scheduleLocalNotificationAsync(NotificationConnector.QuizReminderNotification,
                                    {
                                        time
                                    })
                                    .then((notificationId: Notifications.LocalNotificationId) => {
                                        return this.setQuizReminderNotificationId(notificationId);
                                    });
                            }

                            return;
                        });
                }

                return;
            });
    }

    private cancelQuizReminderNotification(): Promise<void> {
        return this.getQuizReminderNotificationId()
            .then((id) => {
                if (id != null) {
                    return Notifications.cancelScheduledNotificationAsync(id)
                        .then(() => {
                            return AsyncStorage.removeItem(NotificationConnector.QuizReminderNotificationIdAsyncStorageKey);
                        });
                }

                return;
            });
    }
}

export default NotificationConnector;