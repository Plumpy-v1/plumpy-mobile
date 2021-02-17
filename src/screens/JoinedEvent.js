import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../elements/CustomButton";

const JoinedEvent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <View style={styles.container}>
          <Image
            style={{ width: 50, height: 50, alignSelf: "center" }}
            source={require("../../assets/img/NearEvents/eventImg.png")}
          />
          <Text style={{ fontSize: 22, textAlign: "center", color: "#000000" }}>
            Games Paradise
          </Text>
          <Text
            style={{
              fontSize: 13,
              textAlign: "center",
              color: "#000000",
              opacity: 20,
            }}
          >
            By gammerconnect
          </Text>
        </View>


{/* Future Task days left OR OnGOing */}
        <Text
          style={{
            color: "#FF7C7C",
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Poppins-Bold",
            marginVertical: 3,
          }}
        >
          6 days left
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginVertical: 15,
            alignItems: "center",
          }}
        >
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Details'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => navigation.navigate("EventDetails")}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Navigate'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => console.log("Navigate to Map")}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Chat'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => console.log("Chat")}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <CustomButton
              title='Activities'
              colorbg='#FFFFFF'
              textcolor='#FF7C7C'
              width={250}
              onPress={() => navigation.navigate("IntroOne")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    
  },
  safe: {
    flex: 1,

    backgroundColor: "#FBE7E3",
  },
});

export default JoinedEvent;