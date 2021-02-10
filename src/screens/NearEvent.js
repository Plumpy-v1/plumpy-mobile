import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import EventImageContainer from "../components/NearEventContainer/EventImageContainer";
import NearEventDistanceLine from "../components/NearEventContainer/NearEventDistanceLine";
import { Feather } from '@expo/vector-icons';
const NearEvent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={{marginTop:"15%"}}>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.text}>Near Events</Text>

          <Feather style={styles.icon} name="search" size={24} color="black" />
        </View>

        <ScrollView>
          <EventImageContainer
            onPress={() => navigation.navigate("ImageSelection")}
          />
          <NearEventDistanceLine />
          <EventImageContainer
            onPress={() => navigation.navigate("ImageSelection")}
          />
          <EventImageContainer
            onPress={() => navigation.navigate("ImageSelection")}
          />
          <NearEventDistanceLine />
          <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
          <NearEventDistanceLine />
          <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
          <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
        </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,

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
  icon:{
    padding:20,
   
    color: "#FFFFFF",
  },
  image: {},
});

export default NearEvent;
