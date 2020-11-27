import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";

const IntroOneScreen = ({ navigation }) => {
  console.log("navigation", navigation.navigate);
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
        style={CommonStyles.introPageImageBox}
        resizeMode={"contain"}
      />

      <Image
        source={require("../../assets/img/IntroScreens/IntroOneLogo.png")}
        style={CommonStyles.introPageImageLogo}
        resizeMode={"contain"}
      />

      <View style={CommonStyles.introOneButton}>
        <CustomButton
          title='Next'
          colorbg='#FFFFFF'
          textcolor='#111'
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
