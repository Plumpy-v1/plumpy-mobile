import React from 'react';
import { View , StyleSheet,Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EventImageContainer from '../components/NearEventContainer/EventImageContainer';
import NearEventDistanceLine from '../components/NearEventContainer/NearEventDistanceLine';

const NearEvent = (props) => {
  return(
      
      <View style={styles.container}>
    <SafeAreaView>
    <Text  style={styles.text}>
        Near Events
      </Text>
      <ScrollView>
      <EventImageContainer />
         <NearEventDistanceLine />
         <EventImageContainer />
         <EventImageContainer />
         <NearEventDistanceLine />
         <EventImageContainer />
         <NearEventDistanceLine />
         <EventImageContainer />
         <EventImageContainer />

     </ScrollView>
    </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
 container: {
   
    marginTop: 40,
    backgroundColor: "#FF7C7C",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
 },
 text:{
    fontSize: 25, 
    textAlign: "center", 
    margin: 10,
    color:'#FFFFFF',
    fontFamily: "Poppins-Regular",
 }
});

export default NearEvent;