import React from 'react'
import {Image, View,Text} from "react-native"
const Category = () => {
    return (
        <View style={{ flex:1, alignItems:"center",  }}>
        <Image
        source={require("../../assets/images/chef.png")}
          style={{ height: 72, width: 72, borderRadius: 15 }}
        />
        <Text style={{ fontSize:12}}>sanitizer </Text>
      </View>
    )
}

export default Category
