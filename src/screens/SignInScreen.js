import React, { Component } from "react";
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
  TouchableOpacity,
} from "react-native";
import { CommonStyles, deviceWidth } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";

const SignInScreen = (props) => {
  return (
    <ImageBackground
      style={[CommonStyles.normalSinglePage, CommonStyles.SignInPageBackgroud]}
      source={require("../../assets/img/SignInScreen/LogInBack.png")}
    >
      <StatusBar barStyle='light-content' />
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
            placeholderTextColor='#FF7C7C'
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
            type='password'
            placeholderTextColor='#FF7C7C'
            style={CommonStyles.textInput}
            underlineColorAndroid='transparent'
          />
        </View>

        <CustomButton
          title='Login'
          textcolor='#FFFFFF'
          color='#FF7C7C'
          width={330}
          height={45}
          onPress={() => console.log("Start")}
        />
      </View>
      <TouchableOpacity onPress={() => console.log("forgot pass")}>
        <Text style={styles.forgetText}>forgot password ?</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>login with</Text>
      <View style={styles.loginAuth}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/SignInScreen/apple.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleIcon}  >
          <Image  source={require("../../assets/img/SignInScreen/google.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookIcon}>
          <Image
            source={require("../../assets/img/SignInScreen/facebook.png")}
          />
        </TouchableOpacity>
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
    marginTop: 47,
    alignItems: "center",
  },
  subFormBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: deviceWidth - 85,

    marginBottom: 20,
  },
  noteBox: {
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  forgetText: {
    color: "#FFFFFF",
    marginTop: 18,
    marginLeft: 25,
    marginRight: 230,
    fontSize: 15,
    textAlign: "left",
    lineHeight: 23,
  },
  loginText: {
    color: "#FBE7E3",
    marginTop: 47,
    fontSize: 15,
    lineHeight: 23,
    width: 73,
    height: 21,
  },
  loginAuth: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    width: 160.41,
    height: 31.15,
    marginTop: 24.36,
    position: "relative",
    marginBottom: 0,
    display:'flex',
    
  },
  googleIcon:{
    marginTop:5.9
  },
  facebookIcon:{
    marginTop:5.9
  }
});
export default SignInScreen;
