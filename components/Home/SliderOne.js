import React from 'react'
import { View, Text, Image, ImageBackground } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
const SliderOne = (props) => {
    return (
        <View>
        <ImageBackground
         source={require("../../assets/drawable-mdpi/Rectangle-19.png")}
          style={{ height: 180, width: 320, margin:15  }}
          imageStyle={{ borderRadius: 8}}
        >
          <Text
            style={{
              margin: 10,
              backgroundColor: "white",
              width: 55,
              borderRadius: 5,
              height: 25,
              padding: 1,
              color: "red",
              marginLeft: 25,
            }}
          >
            50% off
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 25 }}>
            Sanitizer
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 25 }}>
            on prepaid bookings.
          </Text>
          <Button
            buttonStyle={{
              marginTop: 15,
              backgroundColor: "#00008b",
              borderRadius: 16,
              marginLeft: 25,
              padding: 5,
              width: 110,
              height: 40,
            }}
            title="Book Now"
          />
        </ImageBackground>
      </View>
    )
}

export default SliderOne
