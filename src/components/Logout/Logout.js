import React, { useEffect } from "react";
import { DefaultState } from "../../../constant";
import { navigationiteam } from "../../navigation/MainNavigation";

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

import CustomButton from "../../elements/CustomButton";
function Logout({ navigation }) {
  const _logout = async () => {
    await DefaultState();
    navigation.navigate(navigationiteam.SignUp);
  };

  return (
    <View
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>mohit</Text>
      <CustomButton
        colorbg="#000"
        height="30"
        onPress={_logout}
        title="Logout"
        textcolor="#FFF"
        width="200"
      />
    </View>
  );
}

export default Logout;
