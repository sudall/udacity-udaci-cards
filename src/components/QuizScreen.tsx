import * as React from "react";
import DeckData from "src/data/models/DeckData";
import {NavigationInjectedProps, NavigationScreenProps, withNavigation} from "react-navigation";
import Quiz from "src/components/Quiz";
import NavigationUtils from "src/utilities/NavigationUtils";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

export class QuizScreenUtils {
    static readonly RouteName = "QuizScreen";
}

export module QuizScreenUtils {
    export interface NavigationProps {
        deck: DeckData
    }
}

type IAllProps = IOwnProps
    & IInjectedProps
    & NavigationInjectedProps
    & NavigationScreenProps<QuizScreenUtils.NavigationProps>;

// internal state of the component
interface IState {

}

class QuizScreen extends React.Component<IAllProps, IState> {
    readonly state: IState = {};

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    render() {
        const {} = this;
        const {} = this.props;
        const {} = this.state;

        const deck = NavigationUtils.getParam(this.props, "deck");

        return (
            deck != null ?
                <Quiz deck={deck}/>
                :
                null
        );
    }
}

export default withNavigation(QuizScreen);