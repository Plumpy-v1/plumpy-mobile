import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  
  Text,
  TouchableOpacity,
} from "react-native";
import { CommonStyles, deviceWidth } from "../styles/CommonStyles";
import TextInput from '../elements/TextInput'

import CustomButton from "../elements/CustomButton";

import {
  passwordValidator,
  nameValidator,
} from '../elements/ErrorMessage';
const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });


  const _onSignIn = () => {
    const nameError = nameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (nameError || passwordError ) {
      setUsername({ ...username, error: nameError });
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
            placeholder="Username"
            placeholderTextColor="#FF7C7C"
            returnKeyType="next"
            underlineColorAndroid="transparent"
            value={username.value}
            error={!!username.error}
           errorText={username.error}
            onChangeText={uname => setUsername({ value: uname, error: '' })}
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
            value={password.value}
            onChangeText={pass => setPassword({ value: pass, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => console.log("Start")}>
          <View style={CommonStyles.LogInButton}>
            <CustomButton
              title="Login"
              textcolor="#FFFFFF"
              colorbg="#FF7C7C"
              width={"100%"}
              height={45}
              onPress={_onSignIn}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%'}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
              
           <TouchableOpacity onPress={() => console.log("forgot pass")}>
          <Text style={styles.forgetText}>forgot password ? </Text>
          </TouchableOpacity>


      <Text style={{color:'#fff',fontSize: 15,paddingLeft:-10}}>Or</Text>
            </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{color:'#FF7C7C',  fontSize: 15,}}>SignUp</Text>
      </TouchableOpacity>
      </View>
      
      <Text style={styles.loginText}>login with</Text>
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
    marginTop: 47,
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
    
    // marginRight: 230,
    fontSize: 15,
    // flexDirection: "row",
    // alignItems: "flex-start",
    // textAlign: "left",
    
    // paddingRight: "50%",
  },
  loginText: {
    color: "#FBE7E3",
    marginTop: 47,
    fontSize: 15,
    // lineHeight: ,
    width: 73,
    height: 24,
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
export default SignInScreen;
