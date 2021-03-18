// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ChatRoom = () => {
//   return (
//     <View style={styles.main_container}>
//       <View style={styles.title}>
//         <Text style={styles.title_text}>Chat Room</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main_container: {
//     flex: 1,
//     backgroundColor: "#FBE7E3",
//   },
//   title: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: "3%",
//   },
//   title_text: {
//     fontSize: 24,
//     fontFamily: "Poppins-Bold",
//   },
// });

// export default ChatRoom;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { env } from "../../env";
import chatdata from "../../assets/data/feed";
const ChatRoomContainer = ({ onPress,info }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
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

          {/* Todo: Add here Chat Room Name */}

            <Text style={[styles.details, { fontSize: 20 }]}>{info.title}</Text>
            <Text numberOfLines={1} style={styles.details}>

        {/* Todo: Add here Eventname */}

              {info.location}
            </Text>
            {/* <View style={styles.locationContainer}>
          <EvilIcons name="location" size={21} color="white" />
          <Text style={styles.details}>{info.address}</Text>
        </View> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ChatRoom = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Chat Room</Text>
      </View>

      <FlatList
        data={chatdata}
        renderItem={({ item }) => {
          return (
            <ChatRoomContainer // keyExtractor={(item, index) => item.id}
              info={item}
              onPress={() => console.warn("ChatRoom Clicked")}
            />
          );
        }}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
      />
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
