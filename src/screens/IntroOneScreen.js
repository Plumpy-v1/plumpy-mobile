import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar
} from 'react-native';


// import { Navigation } from 'react-native-navigation';
// import LinearGradient from 'react-native-linear-gradient';

import ImageButton from '../elements/ImageButton';
import { CommonStyles, blueGradient} from '../styles/CommonStyles';

import CustomButton from '../elements/CustomButton';
// import { appSingleNavigation } from '../styles/navigatorStyle';


 const IntroOneScreen = ({navigation}) => {
    // static navigatorStyle = appSingleNavigation;

    return (
        <View style={CommonStyles.normalSinglePage}>
        <StatusBar barStyle='default' />
          <View style={CommonStyles.introPageTextBox}>
            {/* <Image
              source={require('../../assets/img/surgeon.png')}
              style={{width: 152, height: 205.5}}
            /> */}
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.regularBold,
              CommonStyles.semiBold
            ]}>this happens</Text>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.semiBold
            ]}>so many times</Text>
          </View>

          <View style={CommonStyles.introPageImageBox}>
            <Image
              source={require('../../assets/img/IntroScreens/IntroOne.png')}
            />
          </View>
          <View style={CommonStyles.introPageImageLogo}>
            <Image
              source={require('../../assets/img/IntroScreens/IntroOneLogo.png')}
            />
          </View>
          
          {/* <View style={CommonStyles.introPageButtonBox}> */}
          
            <View style={CommonStyles.introOneButton}>
            <CustomButton title="Next"  width={223} height={53} color="#FFFFFF" onPress={() => navigation.navigate("Second") }  />
              
            </View>
          {/* </View> */}
        </View>
      );
  }
  
  const styles = StyleSheet.create({
   container: {
     marginTop:29,
    marginBottom:57,
    marginLeft:76,
    marginRight:76,
   }
  });
  
  
  export default IntroOneScreen;