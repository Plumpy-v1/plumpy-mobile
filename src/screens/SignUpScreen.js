import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  // TextInput,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import { CommonStyles, deviceWidth } from "../styles/CommonStyles";

import CustomButton from "../elements/CustomButton";
import TextInput from '../elements/TextInput'
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../elements/ErrorMessage';


const SignUpScreen = ({navigation}) => {

  const [username, setUsername] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUp = () => {
    const nameError = nameValidator(username.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setUsername({ ...username, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('HomePage');
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
            placeholder="UserName"
            // type="text"
            placeholderTextColor="#FF7C7C"
            // style={CommonStyles.textInput}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            value={username.value}
            name='username'
            error={!!username.error}
           errorText={username.error}
            onChangeText={uname => setUsername({ value: uname, error: '' })}
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
            returnKeyType="next"
            
            // underlineColorAndroid="transparent"
            returnKeyType="next"
            value={email.value}
            error={!!email.error}
            errorText={email.error}
            name='email'
            onChangeText={emailAddr => setEmail({ value: emailAddr, error: '' })}
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
            returnKeyType="done"
            placeholderTextColor="#FF7C7C"
            
            underlineColorAndroid="transparent"
            onChangeText={pass => setPassword({ value: pass, error: '' })}
            value={password.value}
            error={!!password.error}
            errorText={password.error}
            name='password'
            secureTextEntry={true}
            
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
              onPress={_onSignUp}
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