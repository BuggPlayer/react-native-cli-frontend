import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import DocumetsUpload from '../components/Home/UploadDoc/DocumetsUpload';
import ProfileUpload from '../components/Home/UploadDoc/ProfileUpload';

const UploadDoc = (props) => {
  return (
    <View style={{ marginLeft: 20}}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          marginLeft: -20,
          borderColor:"gray",
        
          // borderBottomWidth:1,
          // borderLeftWidth:1,
          // borderRightWidth:1,
          padding: 10,
          elevation:5
        }}>
        <View
          style={{
            marginTop:20,
            elevation: 5,
            width: 26,
            backgroundColor: 'white',
            height: 26,
            marginBottom: 5,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/drawable-mdpi/backarrow.png')}
            style={{height: 10, width: 10, }}
          />
        </View>
        <View style={{}}>
          <Text style={{fontSize: 11}}>STEP 1 OF 2</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
            Upload Docs
          </Text>
          <Text style={{fontSize: 12}}>.jpg .docx .pdf or png</Text>

          <ImageBackground
            source={require('../assets/drawable-mdpi/Rectangle-12.png')}
            style={{height: 21, width: 300, marginTop: 10}}
            imageStyle={{borderRadius: 10}}>
            <Image
              source={require('../assets/drawable-mdpi/Rectangle-13.png')}
              style={{height: 9, width: 120, padding: 10, margin: 8, margin: 5}}
            />
          </ImageBackground>
        </View>
      </View>
      <ProfileUpload />
      <DocumetsUpload navigation={props.navigation} />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('addlocation')}
        style={{alignSelf: 'center', marginTop: 30}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>SKIP FOR NOW</Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: 'black',

          borderRadius: 10,
          height: 5,
          width: 80,
          margin: 5,

          alignSelf: 'center',
        }}></View>
    </View>
  );
};

export default UploadDoc;
