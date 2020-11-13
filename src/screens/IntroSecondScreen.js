import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

import { CommonStyles, blueGradient} from '../styles/CommonStyles';

import CustomButton from '../elements/CustomButton';



 const IntroOneScreen = ({navigation}) => {
   

    return (
        <View style={CommonStyles.normalSinglePage}>
          <View style={CommonStyles. introSecondPageTextBox}>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.regularBold,
              CommonStyles.semiBold
            ]}>but no worries</Text>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.regularBold,
              CommonStyles.semiBold
            ]}>beacause plumply</Text>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.semiBold
            ]}>is here</Text>
          </View>

          
          <View style={CommonStyles.introSecondPageImageLogo}>
            <Image
              source={require('../../assets/img/IntroScreens/IntroTwoLogo.png')}
            />
          </View>
         
          <View style={CommonStyles.introSecondLeftImageLogo}>
          <Image
              source={require('../../assets/img/IntroScreens/Left_Chat.png')}
            />
          </View>
          <View style={CommonStyles.introSecondRightImageLogo}>
          <Image
              source={require('../../assets/img/IntroScreens/Right_Chat.png')}
            />
          </View>
          
            <View style={CommonStyles.introSecondButton}>
            {/* <CustomButton  title="Start"  onPress={() => navigation.navigate("Second") }  /> */}
            <CustomButton  title="Start"  onPress={() => console.log('Start') }  />
              
            </View>
         
        </View>
      );
  }
  
  const styles = StyleSheet.create({
   container: {}
  });
  
  
  export default IntroOneScreen;

  // Go to IntroTwoScreen
//   _handleClickNextButton() {
//     this.props.navigator.push({
//       screen: "Healer.IntroTwoScreen"
//     });
//   }
