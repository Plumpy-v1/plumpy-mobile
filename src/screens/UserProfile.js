
import React from 'react';
import { View , StyleSheet, SafeAreaView,Text } from 'react-native';

const UserProfile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: "4%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'center'
            
          }}
        >
          <Text style={styles.text}>User Profile</Text>
        </View>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,

    backgroundColor: "#5C63AB",
   
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
export default UserProfile;
