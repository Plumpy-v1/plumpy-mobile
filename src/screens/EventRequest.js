import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomButton from "../elements/CustomButton";

const EventRequest = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Event</Text>
      <TextInput
        placeholder='Eventname'
        placeholderTextColor='#FF7C7C'
        style={styles.textInput}
        underlineColorAndroid='transparent'
        //value={username}
        // onChangeText={(uname) => setUsername(uname)}
      />

      <DropDownPicker
        items={[
          { label: "Item 1", value: "item1" },
          { label: "Item 2", value: "item2" },
          { label: "Item 3", value: "item3" },
          { label: "Item 4", value: "item4" },
        ]}
        labelStyle={{ color: "#FF7C7C", textAlign: "center" }}
        defaultIndex={0}
        placeholder='Type Of Event'
        placeholderStyle={{
          fontSize: 16,
          textAlign: "center",
          color: "#FF7C7C",
        }}
        containerStyle={{ height: 50, width: "80%", fontSize: 35 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />

      <TextInput
        multiline={true}
        numberOfLines={4}
        // onChangeText={(text) => this.setState({text})}
        //value={this.state.text}
        style={styles.info}
        placeholder='Info'
        placeholderTextColor='#FF7C7C'
        underlineColorAndroid='transparent'
      />

      <TextInput
        placeholder='Location'
        placeholderTextColor='#FF7C7C'
        style={styles.textInput}
        underlineColorAndroid='transparent'
        //value={username}
        // onChangeText={(uname) => setUsername(uname)}
      />

      <CustomButton
        title='Create Request'
        colorbg='#FF7C7C'
        //width="80%"
        textcolor='#FFFFFF'
        width={"100%"}
        height={50}
        onPress={() => navigation.navigate("EventRequest")}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE7E3",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    margin: 40,
  },
  textInput: {
    // width: 280,
    // paddingLeft: 50,
    color: "#FF7C7C",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    height: 50,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 20,
  },
  info: {
    color: "#FF7C7C",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 20,
    width: "80%",
    height: 100,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default EventRequest;
