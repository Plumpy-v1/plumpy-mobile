import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView,FlatList } from "react-native";
import ImageComponent from "../components/ImageSelection/ImageComponent";
import { Feather } from "@expo/vector-icons";
import FutureEventList from "../components/FutureEventList/FutureEventList";
import eventdata from "../../assets/data/feed";

const FutureEvents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginTop: "4%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.text}>Your Events</Text>
          </View>

          <FlatList
            data={eventdata}
            // keyExtractor={(item, index) => item.eventId}
            renderItem={({ item }) => {
              // console.log(event);

              // return <Text>Mphit</Text>;
              return (
                <FutureEventList
                  info={item}
                  onPress={() => navigation.navigate("EventDetails")}
                />
              );
            }}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,

    backgroundColor: "#5C63AB",
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    flex : 1
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
  scroll: {
    marginBottom: 10,
  },
});

export default FutureEvents;
