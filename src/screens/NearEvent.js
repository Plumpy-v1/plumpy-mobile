import React,{useEffect} from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import EventImageContainer from "../components/NearEventContainer/EventImageContainer";
import NearEventDistanceLine from "../components/NearEventContainer/NearEventDistanceLine";
import eventdata from "../../assets/data/feed";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Get_shareddata } from "../../constant";
const NearEvent = ({ navigation }) => {

  useEffect(() => {
    const getExploreEvent = async () => {

      const {token } = await Get_shareddata()


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
           "authorization" : ""
         },
         body: JSON.stringify({ query }),
       };
       try {
         const res = await fetch(url, params);
         const data = await res.json();

         console.log({ data });

         if (!!data.data.login.success) {
           await Update_Mobilestore_Variable({
             isLogin: true,
             token: data.data.login.token,
             isVisibleSplash: false,
           });
           navigation.navigate(navigationiteam.HomeTab);
         }
       } catch (error) {
         console.log({ errorInReg: error });
       }
      
    }
  }, [input])


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
                name='search'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={eventdata}
            renderItem={({ item }) => (
              <EventImageContainer
                info={item}
                onPress={() => navigation.navigate("EventDetails")}
              />
            )}
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
    flex: 1,
    backgroundColor: "#FF7C7C",
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

export default NearEvent;
