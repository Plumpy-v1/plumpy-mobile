import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView
} from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";


const IntroOneScreen = ({ navigation }) => {
  console.log("navigation" ,navigation.navigate);
  return (
    <SafeAreaView style={CommonStyles.normalSinglePage}>
      <StatusBar barStyle='default' />
      <View style={CommonStyles.introPageTextBox}>
        <Text
          style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.regularBold,
            CommonStyles.semiBold,
          ]}
        >
          this happens
        </Text>
        <Text
          style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
          ]}
        >
          so many times
        </Text>
      </View>
     
        <Image
          source={require("../../assets/img/IntroScreens/IntroOne.png")}
          style={{flex: 1, width: '95%',alignSelf:'center'}}
          resizeMode={'contain'}
        />
        {/* width={303} height={338} */}
     
      {/* <View style={CommonStyles.introPageImageLogo}> */}
        <Image
          source={require("../../assets/img/IntroScreens/IntroOneLogo.png")}
          style={{alignSelf: 'center', flex: 1/4, width: '95%'}}
          resizeMode={'contain'}
        />
      {/* </View> */}
      <View style={CommonStyles.introOneButton}>
        <CustomButton
          title='Next'
          colorbg='#FFFFFF'
          textcolor="#111"
          onPress={() => navigation.navigate("IntroSecond")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IntroOneScreen;
