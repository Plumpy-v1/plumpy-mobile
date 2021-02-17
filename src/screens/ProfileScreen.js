import React from 'react';
import { View , Text,StyleSheet, Image, SafeAreaView } from 'react-native';
import CustomButton from '../elements/CustomButton';
import userdata from '../../assets/data/feed'
const ProfileScreen = (props) => {
  return(
      <SafeAreaView style={styles.safe}>
     <View style={styles.userdata}>

         <Image
            style={{ width: 50, height: 50, alignSelf: "center" }}
            source={require("../../assets/img/NearEvents/eventImg.png")}
          />

          <Text style={{textAlign:'center',color:'#FFFFFF',marginTop:12, fontSize:20,fontFamily: "Poppins-Bold",}}>{userdata[0].name}</Text>
          <Text style={{textAlign:'center',color:'#FFFFFF',marginVertical:5, fontSize:15,fontFamily: "Poppins-Regular"}}>{userdata[0].email}</Text>
     </View>
     
     <View
          style={styles.buttonContainer}
        >
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Invite Friend'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => navigation.navigate("EventDetails")}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Edit Interests'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => console.log("Navigate to Map")}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Logout'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => console.log("Chat")}
            />
          </View>
         
        </View>



 
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {},
 safe:{
     flex:1,
     backgroundColor:'#FF5B5B'
 },
 userdata:{
     marginTop:100,
     marginVertical:40
 },
 buttonContainer:{
    justifyContent: "flex-end",
    marginVertical: 15,
    alignItems: "center",
 },

});

export default ProfileScreen;