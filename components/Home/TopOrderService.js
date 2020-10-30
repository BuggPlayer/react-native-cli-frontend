import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

const TopOrderService = (props) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/drawable-mdpi/Rectangle-15.png")}
        style={{ height: 172, width: 282, margin: 10 }}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={{flexDirection:"row" , marginLeft:150, backgroundColor:"white", margin:5, borderRadius:8, padding:5}}>
          <Image
            source={require("../../assets/images/Group 88689.png")}
            style={{ height: 20, width: 20, flexDirection: "column" }}
          />
          <Text style={{color:"#A4C38A"}}>2.5k plus Order </Text>
        </View>
        <View>
        <Text style={{ fontSize: 24 ,color: "white", fontWeight: "bold", marginTop:60}} >  Sanitizer</Text>
        <Text style={{color:"white" }} >  Order accoroding to your locality.</Text>  
        </View>
       
      </ImageBackground>
    </View>
  );
};

export default TopOrderService;
