import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({title, onPress,}) => {
  return(
    <TouchableOpacity
    style={[styles.button, { backgroundColor: '#FFFFFF' }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 223,
    height:52,
    marginTop:29,
    marginBottom:57,
    marginLeft:76,
    marginRight:76,
    
  },
  text: {
    color: '#FF7C7C',
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily:'Poppins-Regular',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:90,
    paddingRight:90,
  },
});

export default CustomButton;
