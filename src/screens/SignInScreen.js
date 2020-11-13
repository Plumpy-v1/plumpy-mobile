import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  Text,
} from "react-native";
import {
  CommonStyles,
  deviceWidth,
  blueGradient,
} from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";

const SignInScreen = () => {
  return (
    <ImageBackground
      style={[CommonStyles.normalSinglePage, CommonStyles.SignInPageBackgroud]}
      source={require("../../assets/img/SignInScreen/LogInBack.png")}
    >
      <StatusBar barStyle='dark-content' />
      <View style={CommonStyles.SignInLogoImageBox}>
        <Image
          source={require("../../assets/img/SignInScreen/LoginPageLogo.png")}
        />
      </View>
      <View style={styles.formBox}>
        <View style={CommonStyles.textInputField}>
          <Image
            source={require("../../assets/img/SignInScreen/avatar.png")}
            style={{
              position: "absolute",
              bottom: 12,
              left: 20,
              width: 19,
              height: 22,
            }}
          />
          <TextInput
            placeholder='Username'
            style={CommonStyles.textInput}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={CommonStyles.textInputField}>
          <Image
            source={require("../../assets/img/SignInScreen/padlock.png")}
            style={{
              position: "absolute",
              bottom: 12,
              left: 20,
              width: 17,
              height: 22,
            }}
          />
          <TextInput
            placeholder='Password'
            style={CommonStyles.textInput}
            underlineColorAndroid='transparent'
          />
        </View>
        
      </View>
      <View style={CommonStyles.introSecondButton}>
        <CustomButton title='Start' onPress={() => console.log("Start")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    height: 52,

    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    height: 190,
    marginTop: 47,
    alignItems: "center",
  },
  subFormBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth - 85,
    height: 45,
    marginBottom: 25,
  },
  noteBox: {
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
export default SignInScreen;
