import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import ImageComponent from "../components/ImageSelection/ImageComponent";
import { Feather } from "@expo/vector-icons";
import FutureEventList from "../components/FutureEventList/FutureEventList";
// import eventdata from "../../assets/data/feed";
import { Get_shareddata } from "../../constant";
import { env } from "../../env";

const FutureEvents = ({ navigation }) => {
  const [futureEvents, setfutureEvents] = useState([]);

  // console.log({ events });

  useEffect(() => {
    console.log("run..");
    const getFutureEvent = async () => {
      const sharedData = await Get_shareddata();
      // console.log({ sharedData });

      const query = `
query{
  viewer{
    participateEvents{
      edges{
        node{
          eventId
          name
          date
          mapLat
          mapLag
          eventPic
          roomId
          organizerInfo{
            name
          }
       
          
        }
      }
    }
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

        if (!!data.data.viewer.participateEvents) {
          setfutureEvents([
            ...futureEvents,
            ...data.data.viewer.participateEvents.edges,
          ]);
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getFutureEvent();
  }, []);
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
          <View style={{ height: "90%" }}>
            <FlatList
              data={futureEvents}
              keyExtractor={(item, index) => item.node.eventId}
              renderItem={({ item }) => {
                // console.log(event);

                // return <Text>Mphit</Text>;
                return <FutureEventList info={item} navigation={navigation} />;
              }}
              snapToAlignment={"center"}
              decelerationRate={"fast"}
            />
          </View>
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
    flex: 1,
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
