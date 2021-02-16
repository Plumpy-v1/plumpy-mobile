import React from "react";
import { View, StyleSheet, ScrollView, Image, Button, Text, SafeAreaView, FlatList } from "react-native";
import ImageComponent from "../components/ImageSelection/ImageComponent";
import CustomButton from "../elements/CustomButton";
import places from "../../assets/data/feed";

const ImageSelectionContainer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
    <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../../assets/img/NearEvents/eventImg.png')} />
    <Text style={{fontSize:22,textAlign:'center',color:'#000000'}}>Games Paradise</Text>
    <Text style={{fontSize:13,textAlign:'center',color:'#000000',opacity:20}} >By gammerconnect</Text>
    <Text style={{fontSize:20,textAlign:'center',color:'#000000'}}>Select 3 images You like</Text>

      {/* Todo Update with flatlist */}
      


      <FlatList 
            // ref={flatList}
            data={places}
            renderItem={({item}) => <ImageComponent post={item} /> } 
           
            // showsHorizontalScrollIndicator={false}
            // snapToInterval={width-50}
          contentContainerStyle={{alignItems:'center'}}
            snapToAlignment={"center"}
            decelerationRate={'fast'}

             />


      <View style={{alignItems:'center',Bottom:3}}>
        <CustomButton
          title='Done'
          colorbg='#FF7878'
          textcolor='#fff'
          onPress={() => navigation.navigate("IntroOne")}
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: "space-around",
   
  },
  
  safe:{
    backgroundColor:'#FBE7E3',
    flex:1,
   
  }
});

export default ImageSelectionContainer;
