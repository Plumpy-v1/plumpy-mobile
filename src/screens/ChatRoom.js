import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { env } from "../../env";

const ChatRoom = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Chat Room</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.imageContainer}>
            {/* <Image
              style={styles.image}
              source={{
                uri: `${env.serverUrl}/${
                  info.eventPic || env.defaultImageName
                }`,
              }}
            /> */}
            <View style={{ marginHorizontal: 12 }}>
              <Text style={[styles.details, { fontSize: 20 }]}>Room Name</Text>
              <Text numberOfLines={1} style={styles.details}>
                Event Name
              </Text>
              {/* <View style={styles.locationContainer}>
              <EvilIcons name="location" size={21} color="white" />
              <Text style={styles.details}>{info.address}</Text>
            </View> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FBE7E3",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
  },
  title_text: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-evenly",
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  details: {
    color: "black",
    fontFamily: "Poppins-Regular",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: -4,
  },
});

export default ChatRoom;
