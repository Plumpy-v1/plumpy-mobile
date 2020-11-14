import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({title, onPress,color,width,height,textcolor}) => {
  return(
    <TouchableOpacity
    
    onPress={onPress}
  >
  <View style={[styles.button, { backgroundColor: color,width,height }]}>

    <Text style={[styles.text, { color:textcolor }]} >{title}</Text>
  </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  text: {
    color: '#FF7C7C',
    fontSize: 17,
   
    // textTransform: "uppercase",
    // fontWeight: "bold",
    fontFamily:'Poppins-Regular',
    paddingTop:15,
    paddingBottom:15,
    textAlign:'center',
  },
});

export default CustomButton;
