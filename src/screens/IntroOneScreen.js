import React, { useEffect } from "react";
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
import { Get_shareddata, Set_shareddata } from "../../constant";
import { navigationiteam } from "../navigation/MainNavigation";

const IntroOneScreen = ({ navigation }) => {
  // console.log("navigation", navigation.navigate);
  // const Check_splash_visible = async () => {

  // };

  useEffect(async () => {
    console.log("mohit sojitra");
    let data = await Get_shareddata();
    console.log("parth kanani");
    console.log(data);
    if (!!!data) {
      await Set_shareddata();
    } else {
      if (data.isLogin) {
        navigation.navigate(navigationiteam.HomePage);
      }
    }
  }, []);
  return (
    <SafeAreaView style={CommonStyles.normalSinglePage}>
      <StatusBar barStyle="default" />
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
          title="Next"
          colorbg="#FFFFFF"
          textcolor="#111"
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
