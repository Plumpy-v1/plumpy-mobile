import React from 'react';
import { View, StyleSheet, Text ,TextInput as Input} from 'react-native';
// import { TextInput as Input } from 'react-native-paper';

import { CommonStyles } from "../styles/CommonStyles";
const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
    style={CommonStyles.textInput}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  
  error: {
    fontSize: 15,
    color: "#FF7C7C",
    paddingHorizontal: 4,
    paddingTop: 8,
  },
});

export default TextInput;