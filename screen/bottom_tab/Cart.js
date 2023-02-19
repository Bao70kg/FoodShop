import { View, Text } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
   <View style={styles.container}>
            <View style={styles.Arow}>
                <Image
                    source={require('../media/images/IconArrow.png')}
                />
                <Text style={styles.textcart}>Cart</Text>
                <View></View>
              
         


            </View>

        

            <View style={styles.ViewTong}>
                <View style={styles.imgtext} >
                    <Image
                        source={require('../media/images/tao.png')}
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
                    source={require('../media/images/cong.png')}
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
                    source={require('../media/images/cong.png')}
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
                    source={require('../media/images/cong.png')}
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
  )
}

export default Cart