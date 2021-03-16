import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import ImageComponent from "../components/ImageSelection/ImageComponent";
import CustomButton from "../elements/CustomButton";
import places from "../../assets/data/feed";
import { env } from "../../env";
import { Get_shareddata } from "../../constant";

const ImageSelectionContainer = ({ navigation, route }) => {
  const res = route.params;
  let eventData = JSON.parse(res.eventdata);
  const [count, setCount] = useState(0);
  const [imageIndex, setImageIndex] = useState([-1, -1, -1, -1, -1, -1]);
  // console.log({ res: JSON.parse(res.eventdata) });
  // let eventJsonData = JSON.parse(eventData)

  const _next = async () => {
    let weight = imageIndex.reduce(
      (ac = 0, img, i) => ac + (img != -1 ? i + 1 : 0)
    );

    if (weight >= 6) {
      const sharedData = await Get_shareddata();
      // console.log({ sharedData });
      // register(input :{email :\"${email.toString()}\" ,password :\"${password.toString()}\" , name :\"${name.toString()}\"})

      const query = `
    mutation{

      joinEvent(input :{eventId :\"${eventId}\" , weight:\"${weight}\"})
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
          navigation.navigate("JoinedEvent", { res });
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    } else {
      alert("please select any 3 image");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center" }}
          source={require("../../assets/img/NearEvents/eventImg.png")}
        />
        <Text style={{ fontSize: 22, textAlign: "center", color: "#000000" }}>
          {eventData.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            textAlign: "center",
            color: "#000000",
            opacity: 20,
          }}
        >
          By {eventData.organizerInfo.name}
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", color: "#000000" }}>
          Select 3 images You like
        </Text>

        {/* Todo Update with flatlist */}

        <FlatList
          // ref={flatList}
          data={places}
          renderItem={({ item }) => (
            <ImageComponent
              item={item}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              count={count}
              setCount={setCount}
            />
          )}
          // showsHorizontalScrollIndicator={false}
          // snapToInterval={width-50}
          contentContainerStyle={{ alignItems: "center" }}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        />

        <View style={{ alignItems: "center", Bottom: 3 }}>
          <CustomButton
            title="Done"
            colorbg="#FF7878"
            textcolor="#fff"
            onPress={_next}
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

  safe: {
    backgroundColor: "#FBE7E3",
    flex: 1,
  },
});

export default ImageSelectionContainer;
