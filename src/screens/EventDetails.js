import React from "react";
import { View, StyleSheet ,Image, SafeAreaView,TouchableOpacity,FlatList, useWindowDimensions,Text} from "react-native";
import places from "../../assets/data/feed";
import ImageCorousel from "../components/EventDetail/ImageCorousel";
import CustomButton from "../elements/CustomButton";

const EventDetails = ({ navigation }) => {
    const width = useWindowDimensions().width;
  return (
    <SafeAreaView style={styles.safe}>
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
        <TouchableOpacity>

        <Text style={{ fontSize: 17, textAlign: "center", color: "#000000" }}>
         location
        </Text>
        </TouchableOpacity>

        {/* Todo Update with flatlist */}

        <FlatList 
            // ref={flatList}
            data={places}
            renderItem={({item}) => <ImageCorousel post={item} /> } 
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width-50}
            snapToAlignment={"center"}
            decelerationRate={'fast'}

             />

            

<Text numberOfLines={4}  style={styles.description}>Gamer Connect is one of the largest gaming platforms in India, having conducted over 40 events since 2016 and reaching over 60,000 gamers offline and 10 million+ online. We are the only technology showcase</Text>

<Text style={styles.join}>25/30 JOINED</Text>
        <View style={{ alignItems: "center",alignSelf:'center',justifyContent:'flex-end',paddingBottom: "2%",}}>
          <CustomButton
            title='Join'
            colorbg='#FFFFFF'
            textcolor='#FF7C7C'
            onPress={() => navigation.navigate("ImageSelection")}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    justifyContent: "space-around",
  },
  scroll: {
    marginBottom: 10,
  },
  safe: {
    backgroundColor: "#FBE7E3",
    flex:1
  },
  description:{
      fontSize:12,
      textAlign:'justify',
      padding:10,
      fontFamily:'Poppins-SemiBold'
  },
  join:{
      color:'#FF7878',
      fontFamily:'Poppins-SemiBold',
      textAlign:'center',
      margin:5
  }
});

export default EventDetails;
