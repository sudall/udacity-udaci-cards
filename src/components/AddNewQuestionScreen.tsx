import * as React from "react";
import AddNewQuestionForm from "src/components/AddNewQuestionForm";
import {NavigationInjectedProps, NavigationScreenProps, withNavigation} from "react-navigation";
import DeckData from "src/data/models/DeckData";
import NavigationUtils from "src/utilities/NavigationUtils";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

export class AddNewQuestionScreenUtils {
    static readonly RouteName = "AddNewQuestionScreen";
}

export module AddNewQuestionScreenUtils {
    export interface NavigationProps {
        deck: DeckData
    }
}

type IAllProps = IOwnProps
    & IInjectedProps
    & NavigationScreenProps<AddNewQuestionScreenUtils.NavigationProps>
    & NavigationInjectedProps;

// internal state of the component
interface IState {

}

class AddNewQuestionScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    private onNewQuestionAdded = () => {
        this.props.navigation.goBack();
    };

    render() {
        const {onNewQuestionAdded} = this;
        const {navigation} = this.props;
        const {} = this.state;

        const deck = NavigationUtils.getParam(this.props, "deck");

        return (
            deck != null ?
                <AddNewQuestionForm deck={deck} onNewQuestionAdded={onNewQuestionAdded}/>
                :
                null
        );
    }
}

export default withNavigation(AddNewQuestionScreen);