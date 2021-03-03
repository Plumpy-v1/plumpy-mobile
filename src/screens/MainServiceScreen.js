import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { CommonStyles } from "../styles/CommonStyles";
import { SwipeablePanel } from "rn-swipeable-panel";
import NearEvent from "./NearEvent";
import { DefaultState, Get_shareddata } from "../../constant";
import { env } from "../../env";
//import { Navigation } from "react-native-navigation";

const MainServiceScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const userData = async () => {
    const sharedData = await Get_shareddata();
    // console.log({ sharedData });

    const query = `
   query{
  viewer{
    name
    email
    
  }
}
`;

    //  console.log({ query });
    const url = env.url;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: sharedData.token,
      },
      body: JSON.stringify({ query }),
    };
    try {
      const res = await fetch(url, params);
      const data = await res.json();

      console.log({ Listdata: data.data.viewer });

      if (!!data.data.viewer.email) {
        setUser(data.data.viewer);
      }
    } catch (error) {
      console.log({ errorInReg: error });
    }
  };

  useEffect(() => {
    userData();
    // console.log({ userdata: user });
  }, []);

  return (
    <ImageBackground
      style={styles.backimage}
      source={require("../../assets/img/HomeScreen/Homeback.png")}
      resizeMode="cover"
    >
      {/* logo container */}
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/HomeScreen/Logo.png")}
        />
      </View>
      <View style={styles.Profilecontainer}>
        <View style={styles.Textcontainer}>
          <Text
            style={[
              CommonStyles.blackColor,
              CommonStyles.extraBold,
              styles.Username,
            ]}
          >
            {user?.name || "Peter"}
          </Text>
          <Text
            style={[
              CommonStyles.blackColor,
              CommonStyles.mediumText,
              CommonStyles.mediumBold,
            ]}
          >
            Hope You Doing great
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            style={styles.profilepic}
            source={require("../../assets/img/HomeScreen/Profile.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.servicecontainer}>
        <View style={styles.colom1}>
          <TouchableOpacity onPress={() => navigation.navigate("NearEvent")}>
            <View>
              <Image
                source={require("../../assets/img/HomeScreen/Nearevent.png")}
                resizeMode="cover"
              />
              <Text style={[CommonStyles.regularBold, styles.cardText]}>
                Explore Events
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate("FutureEvents")}
          >
            <Image
              source={require("../../assets/img/HomeScreen/Futurevent.png")}
            />
            <Text
              style={[
                CommonStyles.regularBold,
                styles.cardText,
                { color: "#FF7C7C" },
              ]}
            >
              Future Events
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.colom2}>
          <TouchableOpacity onPress={() => navigation.navigate("PollScreen")}>
            <Image
              source={require("../../assets/img/HomeScreen/Reqevent.png")}
            />
            <Text
              style={[
                CommonStyles.regularBold,
                styles.cardText,
                { color: "#FF7C7C" },
              ]}
            >
              Request Events or Upvote Events
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            // onPress={() => navigation.navigate("HistoryEvents")}
            onPress={() => navigation.navigate("ChatScreen")}
          >
            <Image
              source={require("../../assets/img/HomeScreen/History.png")}
            />
            <Text style={[CommonStyles.regularBold, styles.cardText]}>
              Event History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backimage: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    alignSelf: "center",
  },
  logocontainer: {
    // marginTop: "2.64%",
  },
  Profilecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: "8.8%",
    //marginTop: "1.95%",
  },
  Textcontainer: {
    width: "60.93%",
  },
  Username: {
    fontSize: 25,
  },
  servicecontainer: {
    marginTop: "2.68%",
    flexDirection: "row",
    paddingHorizontal: "8.8%",
    justifyContent: "space-between",
  },
  colom2: {
    marginLeft: "4.53%",
  },
  cardText: {
    position: "absolute",
    fontSize: 27,
    left: 15,
    top: 15,
    lineHeight: 32,
    color: "#FFFFFF",
  },
});

export default MainServiceScreen;
