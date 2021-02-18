import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Text,
} from "react-native";
import places from "../../assets/data/feed";
import ImageCorousel from "../components/EventDetail/ImageCorousel";
import CustomButton from "../elements/CustomButton";
import { Get_shareddata } from "../../constant";
import { env } from "../../env";
import { navigationiteam } from "../navigation/MainNavigation";

const EventDetails = ({ navigation, route }) => {
  const width = useWindowDimensions().width;
  const { eventId } = route.params;
  // console.log(eventId);

  const [eventdata, setEventdata] = useState(null);

  const _joinEvent = async () => {
    const sharedData = await Get_shareddata();
    // console.log({ sharedData });

    const query = `
      mutation{

        joinEvent(input :{eventId :\"${eventId}\"})
        {
          success
        }
      }
      
      
`;

    //  console.log({ query });
    const url = env.url;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: sharedData.token,
      },
      body: JSON.stringify({ query }),
    };
    try {
      const res = await fetch(url, params);
      const data = await res.json();
      // console.log({ eventdetail: data.data.viewer.getEventById });

      if (!!data.data.joinEvent.success) {
        navigation.navigate(navigationiteam.ImageSelection, {
          eventId,
          eventdata: JSON.stringify(eventdata),
        });
      }
    } catch (error) {
      console.log({ errorInReg: error });
    }
  };

  useEffect(() => {
    const getEventDetail = async () => {
      const sharedData = await Get_shareddata();
      // console.log({ sharedData });

      const query = `
 query{
  viewer{
    getEventById(eventId : \"${eventId}\" ){
      name
      category
      eventPic
      description
      date
      address

      mapLat
      mapLag
      organizerInfo{
        name
      }
      
    }
  }
}
`;

      //  console.log({ query });
      const url = env.url;

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: sharedData.token,
        },
        body: JSON.stringify({ query }),
      };
      try {
        const res = await fetch(url, params);
        const data = await res.json();
        // console.log({ eventdetail: data.data.viewer.getEventById });

        if (!!data.data.viewer.getEventById) {
          setEventdata(data.data.viewer.getEventById);
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getEventDetail();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center" }}
          source={require("../../assets/img/NearEvents/eventImg.png")}
        />
        <Text style={{ fontSize: 22, textAlign: "center", color: "#000000" }}>
          {eventdata?.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            textAlign: "center",
            color: "#000000",
            opacity: 20,
          }}
        >
          By {eventdata?.organizerInfo.name}
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 17, textAlign: "center", color: "#000000" }}>
            {eventdata?.address}
          </Text>
        </TouchableOpacity>

        {/* <FlatList
          // ref={flatList}
          // eventdata?.eventPic
          data={eventdata?.eventPic}
          renderItem={({ item }) => <ImageCorousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 50}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        /> */}

        <View
          // onPress={goToPostPage}
          style={[styles.containerimage]}
        >
          {/* <View style={styles.innerContainer}> */}
          {/* Image  */}
          {console.log(
            eventdata?.eventPic
              ? `${env.serverUrl}/${eventdata?.eventPic}`
              : `${env.serverUrl}/${env.defaultImageName}`
          )}
          <Image
            style={styles.image}
            source={{
              uri: eventdata?.eventPic
                ? `${env.serverUrl}/${eventdata?.eventPic}`
                : `${env.serverUrl}/${env.defaultImageName}`,
            }}
          />
          {/* </View> */}
        </View>

        <Text numberOfLines={4} style={styles.description}>
          {eventdata?.description}
        </Text>

        <Text style={styles.join}>{eventdata?.date}</Text>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "flex-end",
            paddingBottom: "2%",
          }}
        >
          <CustomButton
            title="Join"
            colorbg="#FFFFFF"
            textcolor="#FF7C7C"
            onPress={_joinEvent}
            // onPress={() => navigation.navigate("ImageSelection")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "space-around",
  },
  scroll: {
    marginBottom: 10,
  },
  safe: {
    backgroundColor: "#FBE7E3",
    flex: 1,
  },
  description: {
    fontSize: 12,
    textAlign: "justify",
    padding: 10,
    fontFamily: "Poppins-SemiBold",
  },
  join: {
    color: "#FF7878",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    margin: 5,
  },
  containerimage: {
    // height: 125,
    // padding: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    padding: 7,
    marginVertical: 8,
    // shadowOpacity: 0.36,
    shadowRadius: 6.68,
    display: "flex",
    width: "100%",
    alignItems: "center",

    elevation: 11,
  },

  image: {
    aspectRatio: 5 / 3,
    resizeMode: "cover",
    borderRadius: 10,
    width: "70%",
  },
});

export default EventDetails;
