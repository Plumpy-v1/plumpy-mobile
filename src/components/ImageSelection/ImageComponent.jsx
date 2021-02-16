import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";

const ImageComponent = (props) => {
  const[count,setCount] = useState(0)
  const[state,setState] = useState({status:false})
  const post = props.post;

  const ShowHideTextComponentView = () =>{

    if(state.status == true && count < 3)
    {
      setState({status: false})
      setCount(count+1)
    }
    else if(count == 3){
      Alert.alert("Select Only three")
    }
    else
    {
      setState({status: true})
    }
  }
  console.log(state.status)
  return (
    
    <TouchableOpacity  onPress={ShowHideTextComponentView} style={styles.container}>
      <Image style={styles.img} source={{uri: post.image}} />
      {
       
        state.status ? 
      <View style={{width:40,height:40,backgroundColor:'#FF7878',borderRadius:20,position:'absolute',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,fontFamily:'Poppins-SemiBold',color:'#fff'}}>{count}</Text>
       </View>
       :
       null
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
 
  },
  img: {
   width:150,
   height:150,
   aspectRatio:5/3,
    //justifyContent:'center',
   // alignSelf:'center',
    borderRadius:10,
    margin:15
  },
});

export default ImageComponent;
