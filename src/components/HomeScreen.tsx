import * as React from "react";
import {ScrollView, Text, TouchableNativeFeedback, View} from "react-native";
import {AddNewDeckScreenUtils} from "src/components/AddNewDeckScreen";
import {FullDeckListScreenUtils} from "src/components/FullDeckListScreen";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import DeckConnector from "src/data/connectors/DeckConnector";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

export class HomeScreenUtils {
    static readonly RouteName = "HomeScreen";
}

type IAllProps = IOwnProps & IInjectedProps & NavigationInjectedProps;

// internal state of the component
interface IState {

}

class HomeScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private onAddNewDeckPress = () => {
        this.props.navigation.navigate(AddNewDeckScreenUtils.RouteName);
    };

    private onViewAllDecksPress = () => {
        this.props.navigation.navigate(FullDeckListScreenUtils.RouteName);
    };

    private onDeleteAllDecksPress = () => {
        DeckConnector.instance.deleteAllDecks();
    };

    render() {
        const {onAddNewDeckPress, onViewAllDecksPress, onDeleteAllDecksPress} = this;
        const {} = this.props;
        const {} = this.state;

        return (
            <ScrollView>
                <TouchableNativeFeedback onPress={onViewAllDecksPress}>
                    <View style={{borderWidth: 1, alignItems: "center", paddingVertical: 50}}>
                        <Text>View all decks</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={onAddNewDeckPress}>
                    <View style={{borderWidth: 1, alignItems: "center", paddingVertical: 50}}>
                        <Text>Add a new deck</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={onDeleteAllDecksPress}>
                    <View style={{borderWidth: 1, alignItems: "center", paddingVertical: 50, backgroundColor: "red"}}>
                        <Text>Delete all decks</Text>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
        );
    }
}

export default withNavigation(HomeScreen);