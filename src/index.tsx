import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { BackHandler } from 'react-native';
import AppContainer from './routes';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = configureStore({} as any);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    try {
      await Font.loadAsync({
        SegoeUI: require('../assets/fonts/SegoeUI.ttf'),
        'SegoeUI-Bold': require('../assets/fonts/SegoeUIBold.ttf'),
        'SegoeUI-Black': require('../assets/fonts/SegoeUIBlack.ttf'),
      });

      const images: any[] = [require('../assets/logo.png')];
      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(cacheImages);
    } catch (e) {
      e;
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    return true;
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
