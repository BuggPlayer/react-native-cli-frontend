import React from "react";
import { View, Text, ImageBackground, TextInput, Image } from "react-native";
import { Button } from "react-native-elements";

const SearchLocation = (props) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/googlemap.png")}
        style={{ height: 300, width: 360 }}
      >
      <Image
          source={require("../assets/images/cross.png")}
          style={{
            height: 18,
            width: 18,
           
          }}
        />
        <Text style={{ margin: 25, marginTop: 70, fontWeight: "bold" }}>
          Search your Location
        </Text>
      </ImageBackground>
      <View
        style={{
          borderWidth: 1,
          padding: 5,
          marginHorizontal: 25,
          width: 300,
          height: 42,
          marginTop: 25,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Type here "
          style={{ padding: 5, color: "black", marginLeft: 25 }}
        />

        <Image
          source={require("../assets/drawable-mdpi/search.png")}
          style={{
            height: 18,
            width: 18,
            position: "absolute",
            top: 10,
            left: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
        marginTop:5,
          borderRadius: 10,
        padding:15
        }}
      >
        <View>
          <Image
            source={require("../assets/images/googlemarker.png")}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Text>13th Street </Text>
          <Text>47 abc cdf cdgh dgfgyr</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
        marginTop:5,
          borderRadius: 10,
        padding:15
        }}
      >
        <View>
          <Image
            source={require("../assets/images/googlemarker.png")}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Text>13th Street </Text>
          <Text>47 abc cdf cdgh dgfgyr</Text>
        </View>
      </View>
      <Button
       
          buttonStyle={{
            marginTop: 25,
            backgroundColor: "#6365bf",
            borderRadius: 16,
            marginLeft: 35,
            padding: 5,
            width: 280,
            height: 56,
          }}
          title="COUNTINUE"
         onPress={() => props.navigation.navigate("home")}
        />
     
    </View>
  );
};

export default SearchLocation;
