import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";

const IntroOneScreen = ({ navigation }) => {
  return (
    <View style={CommonStyles.normalSinglePage}>
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

      <View style={CommonStyles.introPageImageBox}>
        <Image source={require("../../assets/img/IntroScreens/IntroOne.png")} />
      </View>
      <View style={CommonStyles.introPageImageLogo}>
        <Image
          source={require("../../assets/img/IntroScreens/IntroOneLogo.png")}
        />
      </View>
      <View style={CommonStyles.introOneButton}>
        <CustomButton
          title='Next'
          width={223}
          height={53}
          color='#FFFFFF'
          onPress={() => navigation.navigate("Second")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginBottom: 57,
    marginLeft: 76,
    marginRight: 76,
  },
});

export default IntroOneScreen;
