import React, { useState } from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const App = (props) => {

const[assetsLoaded,setAssetsLoaded] = useState(false);
  const _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/img/IntroScreens/IntroOneLogo.png'),
        require('./assets/img/SignInScreen/LogInBack.png'),
      ]),
      Font.loadAsync({
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        
      }),
    ]);
  };


  return(
    assetsLoaded ?
    <AppContainer/>
    :         
    <AppLoading
      startAsync={_loadResourcesAsync}
      onFinish={() => setAssetsLoaded(true)}
      onError={console.warn}
      autoHideSplash={true}
    />
  );
}



export default App;
