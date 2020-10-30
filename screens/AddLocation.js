import React from 'react';
import {Image, ImageBackground, Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddLocation = (props) => {
  return (
    <View style={{marginLeft: 20, marginTop: 15}}>
      <View
        style={{
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
          style={{height: 10, width: 10}}
        />
      </View>
      <View>
        <Text style={{marginTop: 5}}> STEP 2 OF 2</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 8}}>
          Add Location
        </Text>
        <ImageBackground
          source={require('../assets/drawable-mdpi/Rectangle-12.png')}
          style={{height: 30, width: 300}}
          imageStyle={{borderRadius: 10}}>
          <Image
            source={require('../assets/drawable-mdpi/Rectangle-13.png')}
            style={{
              height: 18,
              width: 290,
              padding: 10,
              margin: 8,
              marginTop: 10,
            }}
          />
        </ImageBackground>
      </View>
      <View>
        <Image
          source={require('../assets/images/googlemap.png')}
          style={{height: 300, width: 320, marginTop: 10, borderRadius: 5}}
        />
      </View>
      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>
          SET YOUR LOCATION
        </Text>
        <Text style={{color: 'orange', marginLeft: 130, fontWeight: 'bold'}}>
          CHANGE
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          marginTop: 5,
          borderRadius: 10,
          padding: 15,
        }}>
        <View>
          <Image
            source={require('../assets/images/googlemarker.png')}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{margin: 5}}>
          <Text>13th Street </Text>
          <Text>47 abc cdf cdgh dgfgyr</Text>
        </View>
      </View>

      <Button
        buttonStyle={{
          marginTop: 15,
          backgroundColor: '#6365bf',
          borderRadius: 16,
          alignSelf: 'center',
          padding: 5,
          width: 280,
          height: 56,
        }}
        title="COUNTINUE"
        onPress={() => props.navigation.navigate('searchlocation')}
      />
      <View
        style={{
          backgroundColor: 'black',
          marginTop: 10,
          borderRadius: 10,
          height: 5,
          width: 100,

          alignSelf: 'center',
        }}></View>
    </View>
  );
};

export default AddLocation;
