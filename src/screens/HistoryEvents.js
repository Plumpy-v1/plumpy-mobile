import React, { useState  ,useEffect} from "react";
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
import { Get_shareddata } from "../../constant";
import { env } from "../../env";

const HistoryEvents = ({ navigation }) => {
    const [historyevents, sethistoryevents] = useState([]);

    // console.log({ events });

    useEffect(() => {
      const getHistoryEvent = async () => {
        const sharedData = await Get_shareddata();
        // console.log({ sharedData });

        const query = `
  query{
  viewer{
    historyEvents{
      edges{
        node{
          eventId
          date
         name
          address
          eventPic
          
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

          console.log({ Listdata: data.data.viewer.historyEvents.edges });

          if (!!data.data.viewer.historyEvents) {
            sethistoryevents([
              ...historyevents,
              ...data.data.viewer.historyEvents.edges,
            ]);
          }
        } catch (error) {
          console.log({ errorInReg: error });
        }
      };
      getHistoryEvent();
    }, []);
  
  
  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      {/* {console.log("data", historyevents)} */}
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

          <Feather style={styles.icon} name="search" size={24} color="black" />
        </View>
        <View style={{ height: "85%" }}>
          <FlatList
            data={historyevents}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <HistoryEventImageContainer info={item} navigation={navigation} />
            )}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
          />
        </View>
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
