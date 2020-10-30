import React from "react";

import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Category from "../components/Home/Category";
import Rating from "../components/Home/Rating";
import ShareOrinvite from "../components/Home/ShareOrinvite";
import SliderOne from "../components/Home/SliderOne";
import TopOrderService from "../components/Home/TopOrderService";
// import { BiSearchAlt } from "react-icons/bi";
const Home = (props) => {
  const DATA = [1, 2, 3, 4];
  const DATA1 = [2, 3, 4, 5];
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/drawable-mdpi/Rectangle.png")}
        style={{ height: 270, width: 375 }}
      >
        <View
          style={{
            padding: 40,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: -10, fontSize: 18, color: "white" }}>
            LOGO
          </Text>

          <View
            style={{
              backgroundColor: "white",
              padding: 5,
              borderRadius: 8,
              marginTop: -5,
            }}
          >
            <Image
              source={require("../assets/drawable-mdpi/google.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        </View>

        <View style={{ marginTop: -10, marginBottom: 5 }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 25 }}>
            Find the
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 25 }}>
            bet service you need.
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 5,
            backgroundColor: "white",
            marginHorizontal: 25,
            width: 300,
            height: 40,
            marginTop: 5,
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
      </ImageBackground>

      <View
        style={{ borderRadius: 20, marginTop: -50, backgroundColor: "white" }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => {
            return <SliderOne />;
          }}
        />

        <View style={{ flexDirection: "row", margin: 15 }}>
          <Image
            source={require("../assets/drawable-mdpi/asset-1.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5 }}>
            CATEGORIES
          </Text>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <Category />
            <Category />
            <Category />
            <Category />
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <Category />
            <Category />
            <Category />
            <Category />
          </View>
        </View>
        <View style={{ flexDirection: "row", margin: 15 }}>
          <Image
            source={require("../assets/drawable-mdpi/package (2).png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5 }}>
            TOP ORDERED SERVICES
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA1}
          renderItem={({ item }) => {
            return <TopOrderService />;
          }}
        />
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            CUSTOMER`S REVIEWS
          </Text>
          <Text>what customers are saying about servies</Text>
        </View>
        <Rating />
        <ShareOrinvite />
      </View>
    </ScrollView>
  );
};

export default Home;
