import { StyleSheet, Text, View, Image, Pressable,FlatList } from 'react-native'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';

const Cart = () => {

  
    return (
        <View style={styles.container}>
            <View style={styles.Arow}>
                <Image
                    source={require('../media/images/Arrow.png')}
                />
                <Text style={styles.textcart}>Cart</Text>
                <View></View>
              
         


            </View>

        

            <View style={styles.ViewTong}>
                <View style={styles.imgtext} >
                    <Image
                        source={require('../media/images/purepng.png')}
                    />
                    <Text style={styles.RedApple}>Red Apple</Text>
                </View>

                <View style={styles.ViewCongtru}>
                    <View style={styles.tru}>
                        <Image style={styles.imgtru}
                            source={require('../media/images/minus.png')}
                        />
                    </View>
                    <Text>2</Text>
                    <View style={styles.cong}>
                        <Image
                            source={require('../media/images/cong.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ViewGiaGia}>
                <Text style={styles.textGia}>$4,99</Text>
                <Text style={styles.kg}>kg</Text>
            </View>
            <View style={styles.gach}></View>

            <View style={styles.ViewTong}>
                <View style={styles.imgtext} >
                    <Image
                        source={require('../media/images/chuoi.png')}
                    />
                    <Text style={styles.RedApple}>Red Apple</Text>
                </View>

                <View style={styles.ViewCongtru}>
                    <View style={styles.tru}>
                    <Image style={styles.imgtru}
                            source={require('../media/images/minus.png')}
                        />
                    </View>
                    <Text>2</Text>
                    <View style={styles.cong}>
                    <Image
                            source={require('../media/images/cong.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ViewGiaGia}>
                <Text style={styles.textGia}>$4,99</Text>
                <Text style={styles.kg}>kg</Text>
            </View>
            <View style={styles.gach}></View>


            <View style={styles.ViewTong}>
                <View style={styles.imgtext} >
                    <Image
                        source={require('../media/images/bo.png')}
                    />
                    <Text style={styles.RedApple}>Red Apple</Text>
                </View>

                <View style={styles.ViewCongtru}>
                    <View style={styles.tru}>
                    <Image style={styles.imgtru}
                            source={require('../media/images/minus.png')}
                        />
                    </View>
                    <Text>2</Text>
                    <View style={styles.cong}>
                    <Image
                            source={require('../media/images/cong.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ViewGiaGia}>
                <Text style={styles.textGia}>$4,99</Text>
                <Text style={styles.kg}>kg</Text>
            </View>
            <View style={styles.gach}></View>

            <View style={styles.ViewTong}>
                <View style={styles.imgtext} >
                    <Image
                        source={require('../media/images/ca.png')}
                    />
                    <Text style={styles.RedApple}>Red Apple</Text>
                </View>

                <View style={styles.ViewCongtru}>
                    <View style={styles.tru}>
                    <Image style={styles.imgtru}
                            source={require('../media/images/minus.png')}
                        />
                    </View>
                    <Text>2</Text>
                    <View style={styles.cong}>
                    <Image
                            source={require('../media/images/cong.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ViewGiaGia}>
                <Text style={styles.textGia}>$4,99</Text>
                <Text style={styles.kg}>kg</Text>
            </View>
            <View style={styles.gach}></View>
            <View style={styles.ViewPre}>
                <Pressable style={styles.Presnext} >
                    <Text style={styles.next}>CheckOut</Text>
                </Pressable>
            </View>
        </View>

     
            
      );
}

export default Cart

const styles = StyleSheet.create({
   
    ViewPre: {
        marginTop: 130,
        padding: 16,

    },
    next: {
        width: 91,
        height: 22,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.6,

    },
    Presnext: {
        height: 50,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        justifyContent: 'center',
        alignItems: 'center',



    },
    gach: {
        marginTop: -35,
        borderBottomWidth: 0.5,
        borderColor: '#6D3805'
    },
    ViewGiaGia: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 6,
        height: 23,
        width: 73,
        left: 305,
        top: -46
    },
    kg: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.4,
        color: '#6D3805',
        marginTop: 4
    },
    textGia: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21.6,
        color: '#6D3805'
    },
    Gia: {
        // paddingLeft: 8,
        // flexDirection: 'row',
        // width: 73,
        // height: 23,
        // justifyContent: 'space-between'
    },
    RedApple: {
        width: 103,
        height: 41,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.6,
        color: '#6D3805',
        top: 10,
        left: 20
    },
    cong: {
        alignItems:'center',
        justifyContent:'center',
        width: 24.71,
        height: 24.71,
        backgroundColor: '#fff',
        borderRadius: 12.3,
    },
    tru: {
        justifyContent:'center',
        alignItems:'center',
        width: 24.71,
        height: 24.71,
        backgroundColor: '#fff',
        borderRadius: 12.3,

    },
    ViewTong: {
        marginTop: 15,
        flexDirection: 'row'
    },
    imgtext: {
        height: 100,
        width: 100,
        marginStart: 20,
        flexDirection: 'row'
    },
    ViewCongtru: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2.4,
        borderRadius: 30,
        marginTop: 40,
        width: 98,
        height: 29.65,
        left: 30,
        backgroundColor: '#F4F4F4'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    textcart: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 28.8,
        width: 50,
        height: 29,
        marginTop: 20,
        color: '#FF5E00'
    },
    Arow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    // pading:{
    //     padding:16,
    //     width: '100%',
    //     height: '15%'
    // },
    // Arrow:{
    //     padding:20
    // },
    // gach:{
    //     width:'100%',
    //     borderBottomWidth:0.5,
    //     borderColor:'#6D3805'
    // },
    // textGia:{
    //     width:73,
    //     height:23,
    //     fontWeight:'400',
    //     fontSize:18,
    //     lineHeight:21.6,
    //     textAlign:'right',
    //     color:'#6D3805'

    // },
    // ViewGia: {
    //     top:54,
    //     marginLeft:55
    // },
    // congtru2: {
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     padding: 2.4,

    // },
    // cong: {


    //     borderRadius: 12.3,
    //     width: 24.71,
    //     height: 24.71,
    //     backgroundColor: '#FFFFFF'
    // },
    // tru: {
    //     borderRadius: 12.3,
    //     width: 24.71,
    //     height: 24.71,
    //     backgroundColor: '#FFFFFF'
    // },
    // congtru: {
    //     borderRadius: 30,
    //     top: 51,
    //     marginLeft: -75,
    //     width: 98,
    //     height: 29.65,

    //     backgroundColor: '#F4F4F4'
    // },
    // purepng:{
    //    top:-10
    // },
    // textred: {
    //     marginStart: 22,
    //     width: 103,
    //     height: 41,
    //     // top: 14,
    //     color: '#6D3805',
    //     fontWeight: '700',
    //     fontSize: 18,
    //     lineHeight: 21.6
    // },
    // applered: {
    //     flexDirection: 'row'
    // },
    // cart: {
    //     marginLeft: 150,
    //     width: 50,
    //     height: 29,
    //     fontWeight: '700',
    //     fontSize: 24,
    //     lineHeight: 28.8,
    //     color: '#FF5E00'
    // },
    // container: {
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     // padding: 20
    // },
})