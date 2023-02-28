import { StyleSheet, Text, View,Image,TextInput,Pressable } from 'react-native'
import React from 'react'

const NewCard = () => {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
        <Image
        source={require('../media/images/Arrow.png')}
        />
        <Text style={{fontWeight:'700',fontSize:24,lineHeight:28.8,width:109,height:29,color:'#FF5E00',marginTop:20}}>New Card</Text>
        <View></View>
     </View>
     <View style={{padding:16, marginTop:6}}>
        <Text style={{fontWeight:'700',fontSize:18,lineHeight:21.6,color:'#6D3805'}}>Card number</Text>
        <TextInput style={{width:'100%',height:48,backgroundColor:'#F3F3F3',borderRadius:5}}
        placeholder="Hứa Bỏ Game"
        placeholderTextColor='#AC8E71'
        />

<Text style={{fontWeight:'700',fontSize:18,lineHeight:21.6,color:'#6D3805',marginTop:40}}>Expiry Date</Text>
        <TextInput style={{width:'100%',height:48,backgroundColor:'#F3F3F3',borderRadius:5}}
        placeholder="Hứa Bỏ Game"
        placeholderTextColor='#AC8E71'
        />
         <Text style={{fontWeight:'700',fontSize:18,lineHeight:21.6,color:'#6D3805',marginTop:40}}>CCV</Text>
        <TextInput style={{width:'100%',height:48,backgroundColor:'#F3F3F3',borderRadius:5}}
        placeholder="Hứa Bỏ Game"
        placeholderTextColor='#AC8E71'
        />
     </View>
     <View style={{margin:15,marginTop:225}}>
     <View style={{height:50,width:'100%',backgroundColor:'#FF5E00',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
      <Pressable>
        <Text style={{fontWeight:'700',fontSize:18,lineHeight:21.6,width:79,height:22,color:'#fff'}}>Add Card</Text>
      </Pressable>
      </View>
     </View>
    </View>
  )
}

export default NewCard

const styles = StyleSheet.create({
    container:{
       
        flex:1,
        color:'#fff'
    },
})