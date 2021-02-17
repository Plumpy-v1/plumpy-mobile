import React,{useState,useEffect} from 'react';
import { View , Text,StyleSheet, Image, SafeAreaView } from 'react-native';
import CustomButton from '../elements/CustomButton';
import { DefaultState, Get_shareddata } from "../../constant";
import { env } from "../../env";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  
  
  const _logout = async () => {
    await DefaultState();
    await navigation.navigate("SignIn");
  };

    useEffect(() => {
      const userData = async () => {
        const sharedData = await Get_shareddata();
        // console.log({ sharedData });

        const query = `
   query{
  viewer{
    name
    email
    
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

          // console.log({ Listdata: data.data.viewer });

          if (!!data.data.viewer.email) {
            setUser(data.data.viewer);     
          }
        } catch (error) {
          console.log({ errorInReg: error });
        }
      };
      userData();
      // console.log({ userdata: user });
    }, []);
  



  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.userdata}>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center" }}
          source={require("../../assets/img/NearEvents/eventImg.png")}
        />

        <Text
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            marginTop: 12,
            fontSize: 20,
            fontFamily: "Poppins-Bold",
          }}
        >
          {user?.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            marginVertical: 5,
            fontSize: 15,
            fontFamily: "Poppins-Regular",
          }}
        >
          {user?.email}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={{ marginVertical: 10 }}>
          <CustomButton
            title="Invite Friend"
            colorbg="#FFFFFF"
            textcolor="#FF7C7C"
            width={250}
            onPress={() => navigation.navigate("EventDetails")}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <CustomButton
            title="Edit Interests"
            colorbg="#FFFFFF"
            textcolor="#FF7C7C"
            width={250}
            onPress={() => console.log("Navigate to Map")}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <CustomButton
            title="Logout"
            colorbg="#FFFFFF"
            textcolor="#FF7C7C"
            width={250}
            onPress={_logout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {},
 safe:{
     flex:1,
     backgroundColor:'#FF5B5B'
 },
 userdata:{
     marginTop:100,
     marginVertical:40
 },
 buttonContainer:{
    justifyContent: "flex-end",
    marginVertical: 15,
    alignItems: "center",
 },

});

export default ProfileScreen;