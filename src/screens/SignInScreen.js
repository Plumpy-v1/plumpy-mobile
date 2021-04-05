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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../elements/CustomButton";
import { Navigation } from "react-native-navigation";
import { env } from "../../env";
import { Update_Mobilestore_Variable } from "../../constant";
import { navigationiteam } from "../navigation/MainNavigation";
import { passwordValidator, nameValidator } from "../elements/ErrorMessage";
import TextInput from "../elements/TextInput";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _submit = async () => {
    const query = `
    mutation{
      login(input:{email:\"${username.value}\" , password: \"${password.value}\"})
      {
        success
        token
        userName
      }
    }
`;

    const nameError = nameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (nameError || passwordError) {
      setUsername({ ...username, error: nameError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    // console.log({ query });
    const url = env.url;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    try {
      console.log("hello");
      const res = await fetch(url, params);
      // console.log({ response: res });
      const data = await res.json();

      if (!!data.data.login) {
        if (!!data.data.login.success) {
          await Update_Mobilestore_Variable({
            isLogin: true,
            token: data.data.login.token,
            isVisibleSplash: false,
            userName: data.data.login.userName,
          });
          await navigation.navigate(navigationiteam.HomeTab);
        }
      } else {
        alert("Invalid credential");
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
          <MaterialCommunityIcons
            name="email-outline"
            style={{
              position: "absolute",
              bottom: 12,
              left: 18,
              width: 22,
              height: 22,
            }}
            size={24}
            color="black"
          />
          {/* <Image
            source={require("../../assets/img/SignInScreen/avatar.png")}
            
          /> */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FF7C7C"
            returnKeyType="next"
            underlineColorAndroid="transparent"
            value={username.value}
            error={!!username.error}
            errorText={username.error}
            onChangeText={(uname) => setUsername({ value: uname, error: "" })}
          />
        </View>
        <View style={CommonStyles.textInputField}>
          <Feather
            name="lock"
            size={24}
            style={{
              position: "absolute",
              bottom: 10,
              left: 20,
              width: 22,
              height: 25,
            }}
            color="black"
          />

          <TextInput
            placeholder="Password"
            type="password"
            returnKeyType="done"
            placeholderTextColor="#FF7C7C"
            underlineColorAndroid="transparent"
            value={password.value}
            onChangeText={(pass) => setPassword({ value: pass, error: "" })}
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
              onPress={_submit}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => console.log("forgot pass")}>
            <Text style={styles.forgetText}>forgot password ? </Text>
          </TouchableOpacity>

          <Text style={{ color: "#fff", fontSize: 15, paddingLeft: -10 }}>
            Or
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#FF7C7C", fontSize: 15 }}>SignUp</Text>
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
