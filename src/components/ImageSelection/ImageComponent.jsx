import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";

const ImageComponent = ({imageIndex , setImageIndex , item , count , setCount}) => {
  // const[count,setCount] = useState(0)
  // const[state,setState] = useState({status:false})
  // const post = props.post;
  

  const ShowHideTextComponentView= ()=>{

    if(count < 3)
    {
    let x = parseInt(item.id)
    let anotherArray = [...imageIndex];
    anotherArray[x] = count+1
    setImageIndex([...anotherArray])
    setCount(count + 1)
    }

    if(imageIndex[parseInt(item.id) ]!== -1)
    {
      let x = parseInt(item.id)
    let anotherArray = [...imageIndex];
    anotherArray[x] = -1
    setImageIndex([...anotherArray])
    setCount(count - 1)
    }
   
  }

  // const ShowHideTextComponentView = ({imageIndex , setImageIndex}) =>{

  //   if(state.status == true && count < 3)
  //   {
  //     setState({status: false})
  //     setCount(count+1)
  //   }
  //   else if(count == 3){
  //     Alert.alert("Select Only three")
  //   }
  //   else
  //   {
  //     setState({status: true})
  //   }
  // }
  // console.log(state.status)
  return (
    
    <TouchableOpacity  onPress={ShowHideTextComponentView} style={styles.container}>
      <Image style={styles.img} source={{uri: item.image}} />
      {
       imageIndex[parseInt(item.id)] !== -1 ?
       <>
       <View style={{width:40,height:40,backgroundColor:'#FF7878',borderRadius:20,position:'absolute',justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:18,fontFamily:'Poppins-SemiBold',color:'#fff'}}>{imageIndex[parseInt(item.id)]}</Text>
        </View></>
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