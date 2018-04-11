import * as tslib_1 from "tslib";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
var UdaciCardsApplication = /** @class */ (function (_super) {
    tslib_1.__extends(UdaciCardsApplication, _super);
    function UdaciCardsApplication() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    UdaciCardsApplication.prototype.render = function () {
        var _a = this;
        var _b = this.props;
        var _c = this.state;
        return (<View style={styles.container}>
                <Text>Open up App.ts to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>);
    };
    UdaciCardsApplication.propTypes = {};
    return UdaciCardsApplication;
}(React.Component));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default UdaciCardsApplication;
//# sourceMappingURL=UdaciCardsApplication.js.map