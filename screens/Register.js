import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";

import { Button } from "react-native-elements";

const Register = (props) => {
  return (
    <ScrollView>
      <View style={{marginTop:40}}>
        <View
          style={{
            elevation: 5,
            width: 26,
            marginLeft:20,
            backgroundColor: "white",
            height: 26,
            margin: 2,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/drawable-mdpi/backarrow.png")}
            style={{ height: 10, width: 10 }}
          />
        </View>
        <View style={{ margin:10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Register to logo
          </Text>
          <Text style={{fontSize:14}}>Lets start with creating your acoount.</Text>
        </View>

        <View style={{ margin:18 , }}>
          <Text style={{fontSize:14}}>COMPANY NAME</Text>
          <TextInput
            placeholder="Google LLC"
            style={{
              padding: 10,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              width: 320,
              marginTop: 8,
              
            }}
          />
        </View>
        <View style={{ marginLeft:18}}>
          <Text style={{fontSize:14}}>EMAIL</Text>
          <TextInput
            placeholder="yep@google.com"
            keyboardType="email-address"
            style={{
              padding: 10,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              width: 320,
              marginTop: 8,
            }}
          />
        </View>
        <View style={{ margin:18}}>
          <Text style={{fontSize:14}}>COMPANY AND INDUSTRY </Text>
          <TextInput
            placeholder="COMPANY AND INDUSTRY"
            style={{
              padding: 10,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              width: 320,
              marginTop: 8,
            }}
          />
        </View>

        <View style={{ marginLeft:18 }}>
          <Text style={{fontSize:14}}>PHONE NUMBER</Text>
          <View style={{ flexDirection: "row", margin:5 }}>
            <View
              style={{
                flexDirection: "row",
                padding: 5,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                width: 60,
                height: 50,
                alignSelf:"center",
                margin:5,
                marginLeft:-4
              }}
            >
              <Image
                source={{
                  uri: "https://pngimg.com/uploads/flags/flags_PNG14592.png",
                }}
                style={{ height: 24, width:32, borderRadius: 5, alignSelf:"center" }}
              />
              <Text style={{fontWeight: "bold",alignSelf:"center" }}>+1</Text>
            </View>

            <TextInput
              keyboardType="phone-pad"
              placeholder="(+__) 824 454 5548"
              style={{
                padding: 10,
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                width: 225,
                marginTop: 4,
                marginLeft: 18,
              }}
            />
          </View>
        </View>

        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{fontSize:14}} >CREATE PASSWORD</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="*******************"
              style={{
                padding: 10,
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                width: 320,
                marginTop: 8,
              }}
            />
            <Image
              source={require("../assets/drawable-mdpi/hidepassword.png")}
              style={{ marginTop: 20, marginLeft: -35 }}
            />
          </View>
        </View>

        <Button
        onPress={()=>props.navigation.navigate("UploadDoc")}
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
          // onPress={() => props.navigation.navigate("uplaoddoc")}
        />
        <View style={{ flexDirection: "row",   marginTop: 8,alignSelf:"center" }}>
          <Text>Already have an account.</Text>
          <Text style={{ color: "red" }}>LOGIN</Text>
        </View>
        <View
          style={{
            backgroundColor: "black",
            marginTop: 10,
            borderRadius: 10,
            height: 5,
            width: 100,

            alignSelf: "center",
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

export default Register;
