import React, { useEffect, useState } from "react";
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

import { Get_shareddata } from "../../constant";
const ChatRoomContainer = ({ onPress, info }) => {
  console.log({ info });
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

            <Text style={[styles.details, { fontSize: 20 }]}>
              {info.eventName}
            </Text>
            <Text numberOfLines={1} style={styles.details}>
              {/* Todo: Add here Eventname */}

              {info.eventAddress}
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

const ChatRoom = ({ navigation }) => {
  // starting messages

  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getAllRooms = async () => {
      const sharedData = await Get_shareddata();
      console.log({ d: sharedData.userName });
      setUserName(sharedData.userName);

      const query = `query{
        
          viewer{
           getMyChatRoom{
             id
             roomId
             roomName
             eventId
             eventName
             eventPoster
             eventAddress
             discussionChatRoomId
           }
         } 
         
      }`;

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
        console.log({ xyz: data });

        if (!!data.data.viewer.getMyChatRoom) {
          // setMessages(data.data.viewer.getAllMessages.chatsMessages);
          // setLen(data.data.viewer.getAllMessages.chatsMessages.length);
          // scrollToItem();
          setData([...data.data.viewer.getMyChatRoom]);
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getAllRooms();
  }, []);
  return (
    <View style={styles.main_container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Chat Room</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }, i) => {
          return (
            <ChatRoomContainer // keyExtractor={(item, index) => item.id}
              info={item}
              key={i}
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  userName: userName,
                  roomId: item.roomId,
                  eventName: item.eventName,
                  discussionChatRoomId: item.discussionChatRoomId,
                })
              }
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
