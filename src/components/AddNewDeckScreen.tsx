import * as React from "react";
import {View} from "react-native";
import AddNewDeckForm from "src/components/AddNewDeckForm";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {DeckScreenUtils} from "src/components/DeckScreen";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

export class AddNewDeckScreenUtils {
    static readonly RouteName = "AddNewDeckScreen";
}

type IAllProps = IOwnProps & IInjectedProps & NavigationInjectedProps;

// internal state of the component
interface IState {

}

class AddNewDeckScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private onNewDeckAdded = (newDeckTitle: string) => {
        const routeParams: DeckScreenUtils.NavigationProps = {
            deckTitle: newDeckTitle,
        };

        this.props.navigation.navigate(DeckScreenUtils.RouteName, routeParams);
    };

    render() {
        const {onNewDeckAdded} = this;
        const {} = this.props;
        const {} = this.state;

        return (
            <View>
                <AddNewDeckForm onNewDeckAdded={onNewDeckAdded}/>
            </View>
        );
    }
}

export default withNavigation(AddNewDeckScreen);