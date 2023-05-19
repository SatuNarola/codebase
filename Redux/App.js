import React, { Fragment } from "react";
import { Text, TextInput, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from "react-native-easy-toast";

// Assets
import Routes from "./Routes";
import { alertRef } from '../src/Helpers';
import { AlertDialog } from "../src/Components/Common";
import { Store, Persistor } from './Redux/Store';
import { ThemeProvider } from './Hooks/ThemeProvider';
import { Colors, Fonts, Matrics } from "./CommonConfig";
import SplashScreen from "react-native-splash-screen";
/**
 * Font scalling configuration for Android :)
 */
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START, installMode: codePush.InstallMode.IMMEDIATE };
class App extends React.Component {
  constructor(props) {
    super(props);
    _this = this
    this.state = {
      is_codepush_updating_app: false,
      is_codepush_installing_updates: false,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ThemeProvider>
        <Fragment>
          <Provider store={Store}>
            <PersistGate persistor={Persistor}>
              <Routes />
              <AlertDialog ref={alertRef} />
              <Toast
                position="center"
                ref={(ref) => global.toast = ref}
                textStyle={{ fontSize: Matrics.mvs(14), color: Colors.WHITE, fontFamily: Fonts.SemiBold }}
                opacity={0.8}
              />
            </PersistGate>
          </Provider>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default App