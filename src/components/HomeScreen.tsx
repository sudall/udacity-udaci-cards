import * as React from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import {AddNewDeckScreenUtils} from "src/components/AddNewDeckScreen";
import {FullDeckListScreenUtils} from "src/components/FullDeckListScreen";
import {NavigationInjectedProps, withNavigation} from "react-navigation";

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

    render() {
        const {onAddNewDeckPress, onViewAllDecksPress} = this;
        const {} = this.props;
        const {} = this.state;

        return (
            <View>
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
            </View>
        );
    }
}

export default withNavigation(HomeScreen);