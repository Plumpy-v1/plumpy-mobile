import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import EventImageContainer from "../components/NearEventContainer/EventImageContainer";

import eventdata from "../../assets/data/feed";
import { Feather } from "@expo/vector-icons";
import HistoryEventImageContainer from "../components/EventHistory/HistoryEventImageContainer";

const HistoryEvents = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: "15%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text style={styles.text}>History Events</Text>

          <Feather style={styles.icon} name='search' size={24} color='black' />
        </View>

        <FlatList
          data={eventdata}
          renderItem={({ item }) => <HistoryEventImageContainer info={item} />}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        />
      </View>
    </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: "#FF7C7C",
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
  },
  text: {
    fontSize: 22,
    textAlign: "left",
    margin: 10,
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    padding: 20,

    color: "#FFFFFF",
  },
  image: {},
});
export default HistoryEvents;
