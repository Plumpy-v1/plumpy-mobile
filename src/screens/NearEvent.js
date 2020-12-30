import React from 'react';
import { View , StyleSheet,Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EventImageContainer from '../components/NearEventContainer/EventImageContainer';
import NearEventDistanceLine from '../components/NearEventContainer/NearEventDistanceLine';

const NearEvent = ({navigation}) => {
  return(
      
      <View style={styles.container}>
    <SafeAreaView>
    <Text  style={styles.text}>
        Near Events
      </Text>
      <ScrollView>
      <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
         <NearEventDistanceLine />
         <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
         <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
         <NearEventDistanceLine />
         <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
         <NearEventDistanceLine />
         <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />
         <EventImageContainer onPress={() => navigation.navigate("HomeTab")} />

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