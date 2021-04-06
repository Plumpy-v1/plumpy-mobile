import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";

import EventImageContainer from "../components/NearEventContainer/EventImageContainer";
import NearEventDistanceLine from "../components/NearEventContainer/NearEventDistanceLine";
import eventdata from "../../assets/data/feed";
import { Feather,FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Get_shareddata } from "../../constant";
import { env } from "../../env";
// import TextInput from "../elements/TextInput";
const NearEvent = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  // console.log({ events });

  useEffect(() => {
    const getExploreEvent = async () => {
      const sharedData = await Get_shareddata();
      // console.log({ sharedData });

      const query = `
   query{
  viewer{
    exploreQuery{
      edges{
        node{
          eventId
          date
          address
        	name
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

        // console.log({ Listdata: data.data.viewer.exploreQuery.edges });

        if (!!data.data.viewer.exploreQuery) {
          setEvents([...events, ...data.data.viewer.exploreQuery.edges]);
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getExploreEvent();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginTop: "15%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={styles.text}>Explore Events</Text>
            <TouchableOpacity onPress={() => console.log("Search")}>
              <Feather
                style={styles.icon}
                name="search"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
         

        <View style={styles.searchSection}>
           <View style={styles.searchContainer}>
              <FontAwesome5 name="search" size={18} color="#FF7C7C" />
              <TextInput
                // value={}
                style={styles.input}
                placeholder="Search here"
                // onChangeText={}
                underlineColorAndroid="transparent"
              />
        
           </View>
        </View>



          <View style={{height : "85%"}}>
            <FlatList
              data={events}
              keyExtractor={(item, index) => item.eventId}
              renderItem={({ item }) => {
                // console.log(event);

                // return <Text>Mphit</Text>;
                return (
                  <EventImageContainer
                    info={item.node}
                    onPress={() =>
                      navigation.navigate("EventDetails", {
                        eventId: item.node.eventId,
                        isJoinShow: true,
                      })
                    }
                  />
                );
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
    display: 'flex',
    height : '100%',
    flex: 1,
    backgroundColor: "#FF7C7C",
    justifyContent: "space-between",
    
    
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
  searchSection: {
    height: 48,
    borderRadius: 12,
    
  },
  searchContainer: {
    padding: 4,
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    minWidth: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
    width: 36,
    height: 36,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 12,
    fontSize: 14,
    paddingTop: 8,
    borderRadius: 12,
    color: "#424242",
    paddingBottom: 10,
    alignSelf: "stretch",
    
  },

});

export default NearEvent;
