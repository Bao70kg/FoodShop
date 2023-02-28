import { StyleSheet, Text, View, Image, TextInput, requireNativeComponent, Pressable } from 'react-native'
import React from 'react'

const SignUp = () => {
    
    return (
        <View style={styles.container} >
            <View >
                <Image style={styles.imaArrow}
                    source={require('../media/images/Arrow.png')}
                />
                <View style={styles.imaSup}>
                    <Text style={styles.Sup}>SignUp</Text>
                    <Image style={styles.vector}
                        source={require('../media/images/imgVector.png')}
                    />
                </View>
            </View>
            <View>
                <TextInput style={styles.namsurname}
                   placeholder='Name Surname'
                   placeholderTextColor="#AC8E71"
                />
            <View style={styles.Comtx}>
                <TextInput style={styles.PhoneNumber}
                    placeholder="Phone Number"
                    placeholderTextColor="#AC8E71"
                />
              
                <Image style={styles.imgCo}
                source={require('../media/images/Co.png')}
                />
                <Image style={styles.mtx}
                source={require('../media/images/mtx.png')}
                />
              
            </View>    
            </View>
            <View style={styles.textWe}>
                <Text style={styles.text}>We need to verify you. We will send you a one time verification code. </Text>
            </View>
            <View style={styles.nexttext}>

                <Pressable style={styles.next}>
                 <Text style={styles.textNext}>Next</Text>
                </Pressable>
                

            </View>
            <View style={styles.account}>
                <Text style={styles.accountLable}>Already have an account?</Text>
                <Pressable
                  >
                    <Text style={styles.SignUpLable}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    accountLable:{
        fontWeight:'400',
        fontSize:16,
        lineHeight:19.2,
        color:'#7F4E1D'
    },
    SignUpLable:{
        fontWeight:'600',
        fontSize:16,
       lineHeight:18.78,
        color:'#FF5E00'
    },
    nexttext:{
        marginTop:40,
        width:'100%',
       paddingHorizontal:16,
    },
    account:{
        justifyContent:'center',
      
        flexDirection:'row'
    },
    textNext:{
        color:'#FFFFFF',
        fontWeight:'700',
        fontSize:20,
        lineHeight:20,
        width:45,
        height:18.33,
        
    },
    next:{
       justifyContent:'center',
        alignItems: 'center',
       paddingVertical: 13,
      paddingHorizontal: 25,
   
       height:50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
    },
    textWe:{
    width:325,
    height:53,
    marginLeft:25,
    marginTop:5
    },
    text:{
    fontWeight:'400',
    fontSize:16,
    lineHeight:19.2,
     
    },
    mtx:{
       position:'absolute',
       marginTop:34,
       marginStart:73,
    },
    imgCo:{
        marginTop:27,
        marginLeft:26,
        width:33,
        height:26,
        position:'absolute'
    },
    PhoneNumber:{
        
        paddingLeft: 85,
        width:355,
        marginTop: 16,
        padding: 10,
        height: 48,
        backgroundColor:'#F3F3F3',
      marginLeft:16,
     
        borderColor: '#F3F3F3',
        borderRadius: 5,
    },
    namsurname:{
        
        paddingLeft:27,
        width:355,
        marginTop: 81,
        padding: 10,
        height: 48,
        backgroundColor:'#F3F3F3',
        marginLeft:16,
        borderColor: '#F3F3F3',
        borderRadius: 5,
       // marginBottom: 16,
    },
    vector:{
        width:348.27,
        height:260
    },
    imaSup:{
        alignItems:'center'
    },
    Sup: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FF5E00'
    },
    imaArrow: {
        width: 8.49,
        height: 14,
        marginLeft: 20

        
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})