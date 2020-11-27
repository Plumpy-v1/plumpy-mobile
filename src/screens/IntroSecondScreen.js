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
  return (
    <SafeAreaView style={CommonStyles.normalSinglePage}>
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
          because plumply
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

      <Image
        source={require("../../assets/img/IntroScreens/IntroTwoLogo.png")}
        style={CommonStyles.introSecondPageImageLogo}
        resizeMode={"contain"}
      />

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
        <CustomButton
          title='start'
          title='Next'
          colorbg='#FFFFFF'
          textcolor='#111'
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IntroOneScreen;
