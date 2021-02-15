import React, { useState } from "react";
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
import { env } from "../../env";
import { DefaultState, Update_Mobilestore_Variable } from "../../constant";
import { navigationiteam } from "../navigation/MainNavigation";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const _submit = async () => {
    const query = `
    mutation{
      register(input :{email :\"${email.toString()}\" ,password :\"${password.toString()}\" , name :\"${name.toString()}\"})
      {
        success
        token
      }
    }
`;

    console.log({ query });
    const url = env.url;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    try {
      const res = await fetch(url, params);
      const data = await res.json();

      console.log({ data });

      if (!!data.data.register.success) {
        await Update_Mobilestore_Variable({
          isLogin: true,
          token: data.data.register.token,
          isVisibleSplash: false,
        });
        navigation.navigate(navigationiteam.HomeTab);
      }
    } catch (error) {
      console.log({ errorInReg: error });
    }
  };

  return (
    <ImageBackground
      style={[CommonStyles.normalSinglePage, CommonStyles.SignInPageBackgroud]}
      source={require("../../assets/img/SignInScreen/LogInBack.png")}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={CommonStyles.SignInLogoImageBox}>
        <Image
          source={require("../../assets/img/SignInScreen/LoginPageLogo.png")}
        />
      </View>
      <View style={styles.formBox}>
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
            placeholder="Name"
            // type="text"
            placeholderTextColor="#FF7C7C"
            style={CommonStyles.textInput}
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={(eName) => setName(eName)}
          />
        </View>

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
            placeholder="Email"
            placeholderTextColor="#FF7C7C"
            style={CommonStyles.textInput}
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={(nemail) => setEmail(nemail)}
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
            placeholder="Password"
            type="password"
            placeholderTextColor="#FF7C7C"
            style={CommonStyles.textInput}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />
        </View>

        <TouchableOpacity>
          <View style={CommonStyles.LogInButton}>
            <CustomButton
              title="SignUp"
              textcolor="#FFFFFF"
              colorbg="#FF7C7C"
              width={"100%"}
              height={45}
              onPress={_submit}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>SignUp with</Text>
      <View style={styles.loginAuth}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/SignInScreen/apple.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleIcon}>
          <Image source={require("../../assets/img/SignInScreen/google.png")} />
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
    marginTop: 80,
    alignItems: "center",
  },
  subFormBox: {
    flexDirection: "row",
    justifyContent: "space-between",

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
    // marginTop: 18,
    marginLeft: 25,
    // marginRight: 230,
    fontSize: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",
    lineHeight: 23,
    paddingRight: "50%",
  },
  loginText: {
    color: "#FBE7E3",
    marginTop: 20,
    fontSize: 15,
    // lineHeight: ,
    width: 100,
    height: 24,
    textAlign: "center",
  },
  loginAuth: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    width: 160.41,
    height: 31.15,
    marginTop: 20.36,
    position: "relative",
    marginBottom: 0,
    display: "flex",
    marginBottom: "5%",
  },
  googleIcon: {
    marginTop: 5.9,
  },
  facebookIcon: {
    marginTop: 5.9,
  },
});
export default SignUpScreen;
