import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Button } from "react-native-elements";
const ShareOrinvite = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/drawable-mdpi/Rectangle-26.png")}
        style={{ height: 180, width: 310, marginTop: 35, marginLeft: 25 }}
        imageStyle={{ borderRadius: 8 }}
      >
        <Text style={{ margin: 25, fontWeight: "bold", fontSize: 20 }}>
          Invite Your Friends
        </Text>
        <Text style={{ marginLeft: 25 }}>
          Get existing order after each friends{" "}
        </Text>
        <Text style={{ marginLeft: 25 }}>first order</Text>
        <View style={{flexDirection:"row" }} >
          <Button
            buttonStyle={{
              marginTop: 15,
              backgroundColor: "#00008b",
              borderRadius: 10,
              marginLeft: 25,
              padding: 5,
              width: 90,
              height: 40,
            }}
            title="Share"
          />
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ height: 69, width: 80 , marginLeft:100 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ShareOrinvite;
