import React from "react";
import { View, Text, Image, Button, ImageBackground } from "react-native";

const DocumetsUpload = (props) => {
  return (
    <View>
      <Text style={{ marginTop: 15, fontSize: 12, fontWeight: "bold" }}>
        DOCUMETS
      </Text>
      <View
        style={{
          elevation:3,
          backgroundColor: "white",
          width: 310,
          height: 236,
          borderRadius: 10,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View>
        <Text  style={{ fontWeight: "bold", fontSize: 12, margin: 10, marginLeft:36 }}>COMPANY PANCARD</Text>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              borderStyle: "dashed",
              borderColor: "#EF8666",
              borderWidth: 2,
              height: 62,
              width: 200,
              marginLeft:40,
             
              borderRadius:5
            }}
          >
             <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
          </View>
          <Text  style={{ fontWeight: "bold", fontSize: 12, margin: 10, marginLeft:36 }}>GST</Text>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              borderStyle: "dashed",
              borderColor: "#EF8666",
              borderWidth: 2,
              height: 62,
              width: 200,
              marginLeft:40,
             
              borderRadius:5
            }}
          >
            <Text style={{alignSelf:"center" , color:"#EF8666"}}>Upload</Text>
          </View>
        
        </View>
      </View>

      
    </View>
  );
};

export default DocumetsUpload;
