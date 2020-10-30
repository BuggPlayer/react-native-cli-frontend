import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

const ProfileUpload = () => {
  return (
    <View>
      <Text style={{ marginTop: 15, fontSize: 12, fontWeight: "bold" }}>
        PROFILE
      </Text>
      <View
        style={{
          backgroundColor: "white",
          elevation:3,
          width: 310,
          height: 84,
          borderRadius: 10,
          flexDirection: "row",
          marginTop:10,
         
        }}
      >
        <View
          style={{
            elevation:1,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 50,
            margin: 5,
            alignSelf: "center",
          }}
        >
          <ImageBackground
            source={require("../../../assets/drawable-mdpi/google.png")}
            style={{ height: 30, width: 30, margin:15 }}
          >
            
        {/* <Text style={{}}>helo</Text> */}
          </ImageBackground>
        </View>

        <View style={{ alignSelf: "center", padding: 20 }}>
          <Text>Gooogle LLC</Text>
          <Text>JPG, GIF or PNG</Text>
        </View>

        <View
            style={{
            
              borderStyle: "dashed",
              borderColor: "#EF8666",
              borderWidth: 2,
              padding:6,
              width:75,
              height:40,
              marginTop:20,
              
             
              borderRadius:5
            }}
          >
            <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
          </View>
        
      </View>
    </View>
  );
};

export default ProfileUpload;
