import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CreatePollButton from "../components/PollUpVote/CreatePollButtton";
import PollUpVoteContainer from "../components/PollUpVote/PollUpVoteContainer";

const PollScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={{ fontSize: 22, textAlign: "center", color: "#FF7C7C" }}>
        UpVote Requests
      </Text>
      <PollUpVoteContainer />
      <View style={styles.buttonPosition}>
        <CreatePollButton
          title='create event request'
          colorbg='#FFFFFF'
          textcolor='#FF7C7C'
          onPress={() => navigation.navigate("IntroSecond")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBE7E3",
    flex: 1,
    // justifyContent: "flex-end",
  },
  buttonPosition: {
    justifyContent: "flex-end",
   
  },
});

export default PollScreen;
