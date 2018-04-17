import {NavigationScreenProps} from "react-navigation";

class NavigationUtils {
    static getParam<TNavigationParams, TParamName extends keyof TNavigationParams>(props: NavigationScreenProps<TNavigationParams>, paramName: TParamName): TNavigationParams[TParamName] | null {
        const navigationParams = props.navigation.state.params;
        if (navigationParams != null) {
            return navigationParams[paramName];
        }

        return null;
    }
}

export default NavigationUtils;