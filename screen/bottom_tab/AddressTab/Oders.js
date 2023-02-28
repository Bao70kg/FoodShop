import { StyleSheet, Text, View,Dimensions,SafeAreaView,Image } from 'react-native'
import React from 'react'

import TabLayout from 'react-native-simple-tablayout';

const {width}=Dimensions.get('window');


const Screen1=(props)=>{
  return (
    <View style={{flex : 1,alignItems:'center',width,backgroundColor:props.color,justifyContent:'center'}}>
    <Text>{props.text}</Text>
  </View>
  )
}

const Screen2=(props)=>{
  return (
    <View style={{flex:1, width,backgroundColor:props.color,}}>
    <Text>{props.text}</Text>
     <View style={styles.container}>
        
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontWeight: '400', lineHeight: 24, fontSize: 20, color: '#6D3805' }}>Ongoing</Text>
              <Text style={{ fontWeight: '400', fontSize: 20, lineHeight: 24, letterSpacing: 0.1, color: '#FF5E00' }}>Histony</Text>
          </View> */}
          {/* <View style={{ width: 114, height: 3, top: 10, backgroundColor: '#FF5E00', left: 240, borderRadius: 29 }}> </View> */}
         
          {/* <View style={{ width: '100%', height: 1, backgroundColor: '#6D3805', marginTop: 9 }}></View> */}

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ padding: 16, }}>
                  <Image
                      source={require('../media/images/Group93.png')}
                  />
              </View>
              <View >
                  <Text style={{ fontWeight: '700', fontSize: 18, lineHeight: 21.6, letterSpacing: 0.6, color: '#804F1E', width: 105, height: 22 }}>Order #345</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#5EC401', width: 62, height: 17 }}>Delivered</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#804F1E', width: 111, height: 17 }}>October 26, 2014</Text>
              </View>
              <View style={{ left: 143 }}>
                  <Text style={{ fontWeight: '700', fontSize: 20, lineHeight: 24, color: '#F37A20', width: 48, height: 24 }}>$700</Text>
              </View>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#6D3805', }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ padding: 16, }}>
                  <Image
                      source={require('../media/images/Group93.png')}
                  />
              </View>
              <View >
                  <Text style={{ fontWeight: '700', fontSize: 18, lineHeight: 21.6, letterSpacing: 0.6, color: '#804F1E', width: 105, height: 22 }}>Order #346</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#F2110D', width: 62, height: 17 }}>Cancelled</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#804F1E', width: 111, height: 17 }}>October 14, 2016</Text>
              </View>
              <View style={{ left: 143 }}>
                  <Text style={{ fontWeight: '700', fontSize: 20, lineHeight: 24, color: '#F37A20', width: 48, height: 24 }}>$452</Text>
              </View>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#6D3805', }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
              <View style={{ padding: 16, }}>
                  <Image
                      source={require('../media/images/Group93.png')}
                  />
              </View>
              <View >
                  <Text style={{ fontWeight: '700', fontSize: 18, lineHeight: 21.6, letterSpacing: 0.6, color: '#804F1E', width: 105, height: 22 }}>Order #347</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#5EC401', width: 62, height: 17 }}>Delivered</Text>
                  <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16.8, color: '#804F1E', width: 111, height: 17 }}>July 26, 2017</Text>
              </View>
              <View style={{ left: 143 }}>
                  <Text style={{ fontWeight: '700', fontSize: 20, lineHeight: 24, color: '#F37A20', width: 48, height: 24 }}>$281</Text>
              </View>
          </View>
      </View> 
  </View>
 
  )
}
const Screen3=(props)=>{
  return (
    <View style={{flex : 1,alignItems:'center',width,backgroundColor:props.color,justifyContent:'center'}}>
      <Text>{props.text}</Text>
    </View>
  )
}


const Oders = () => {
    const tabName=["Ongoing","Histony"]
  
  //tab screen passed as array of screens 
  const data=[
    <Screen1  />,
    <Screen2 />,
  
  ];
  return (

    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <Image
                    source={require('../media/images/Arrow.png')}
                />
                <Text style={{ fontWeight: '700', fontSize: 24, lineHeight: 28.8, width: 77, height: 29, color: '#FF5E00', marginTop: 20 }}>Orders</Text>
                <View></View>
            </View>
    <TabLayout
       
        tabColor="#fff"
          screens={data}
          tabName={tabName}
          indicatorHeight={3}
          indicatorRadius={5}
          titleFontSize={18}
          titleColor="#FF5E00"
          tabHeight={50}
          tabPressedColor="white"
          indicatorColor="#FF5E00"
     />
 </SafeAreaView>
  )
}

export default Oders

const styles = StyleSheet.create({})