import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MyCards = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Image
          source={require('../media/images/Arrow.png')}
        />
        <Text style={{ marginTop: 20, fontWeight: '700', fontSize: 24, lineHeight: 28.8, width: 103, height: 29, color: '#FF5E00' }}>My Cards</Text>
        <Image
          source={require('../media/images/7002.png')}
        />

      </View>
      <View style={{ marginTop: -60 }} >
        <Image
          source={require('../media/images/53.png')}
        />
      </View>
      <View style={{ alignItems:'center',}}>
        <Text style={{fontWeight:'700',fontSize:20,lineHeight:24,color:'#6D3805',}}>No Saved Card</Text>
        <Text style={{fontWeight:'400',fontSize:16,lineHeight:21,color:'#6D3805',width:253,height:42,marginLeft:50,marginTop:11}}>You can save your card info to make purchase easier, faster.</Text>
      </View>
    </View>
  )
}

export default MyCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff'
  }
})