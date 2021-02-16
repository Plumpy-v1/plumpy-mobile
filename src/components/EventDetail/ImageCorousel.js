import React from 'react';
import { View , StyleSheet,TouchableOpacity,Image, useWindowDimensions } from 'react-native';



const ImageCorousel = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
  return(
    
         <View
      // onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      {/* <View style={styles.innerContainer}> */}
        {/* Image  */}
        <Image style={styles.image} source={{uri: post.image}} />
      {/* </View> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
 container: {
    // height: 125,
    // padding: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    padding:7,
    marginVertical:8,
   // shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
 },
 
 image: {
    aspectRatio: 5/3,
   resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImageCorousel;