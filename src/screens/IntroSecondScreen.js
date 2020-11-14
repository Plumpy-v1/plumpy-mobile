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

import { CommonStyles, blueGradient } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";

const IntroOneScreen = ({ navigation }) => {
  return (
    <View style={CommonStyles.normalSinglePage}>
      <StatusBar barStyle='default' />
      <View style={CommonStyles.introSecondPageTextBox}>
        <Text
          style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.regularBold,
            CommonStyles.semiBold,
          ]}
        >
          but no worries
        </Text>
        <Text
          style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.regularBold,
            CommonStyles.semiBold,
          ]}
        >
          beacause plumply
        </Text>
        <Text
          style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
          ]}
        >
          is here
        </Text>
      </View>

      <View style={CommonStyles.introSecondPageImageLogo}>
        <Image
          source={require("../../assets/img/IntroScreens/IntroTwoLogo.png")}
        />
      </View>

      <View style={CommonStyles.introSecondLeftImageLogo}>
        <Image
          source={require("../../assets/img/IntroScreens/Left_Chat.png")}
        />
      </View>
      <View style={CommonStyles.introSecondRightImageLogo}>
        <Image
          source={require("../../assets/img/IntroScreens/Right_Chat.png")}
        />
      </View>

      <View style={CommonStyles.introSecondButton}>
        {/* <CustomButton  title="Start"  onPress={() => navigation.navigate("Second") }  /> */}
        <CustomButton
          title=' start'
          width={223}
          height={53}
          color='#FFFFFF'
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IntroOneScreen;
