import * as React from "react";
import {Button, Text, TextInput, View} from "react-native";
import DeckConnector from "src/data/connectors/DeckConnector";

// props that are provided as parameters
interface IOwnProps {

}

// props that are provided via injection
interface IInjectedProps {
    // someAction: () => void;
}

type IAllProps = IOwnProps & IInjectedProps;

// internal state of the component
interface IState {
    title: string;
}

class AddNewDeckForm extends React.Component<IAllProps, IState> {
    readonly state: IState = {
        title: ""
    };

    static propTypes = {
        // children: CustomComponentValidators.createChildrenTypesValidator([])
    };

    onSubmit = () => {
        const title = this.state.title;
        if (title !== "") {
            DeckConnector.instance.createNewDeck(title)
                .then(() => {
                    this.setState({
                        title: ""
                    });
                });
        }
    };

    onTitleInputChange = (newTitle: string) => {
        this.setState({
            title: newTitle
        });
    };

    render() {
        const {onSubmit, onTitleInputChange} = this;
        const {} = this.props;
        const {title} = this.state;

        return (
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <Text>What is the title of your new deck?</Text>
                <TextInput style={{width: "75%"}} value={title} onChange={(event) => {
                    return onTitleInputChange(event.nativeEvent.text);
                }}/>
                <Button onPress={onSubmit} title={"Submit"}/>
            </View>
        );
    }
}

export default AddNewDeckForm;