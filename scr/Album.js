import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
 
const Album = ( ) => {
return (
<View > 
<View style={styles.frame33}>
    <View style={styles.frame3}>
    <Text style={styles.p11}></Text>
    <Image style={styles.p1} source={require("./icon/1.png")}/>
    <View style={styles.word}>
        <Text style={styles.w3}>The Immortalists</Text>
        <Text style={styles.w4}>Chloe Benjamin</Text>
        <Text style={styles.w5}>If you were told the date of your </Text>
        <Text style={styles.w5}>death, how would it shape your…</Text>
        <Text style={styles.line1}></Text>
        <Text style={styles.line}></Text>
        <Text style={styles.w6}>50% completed</Text>
    </View>
    </View>
    <View style={styles.frame4}>
    <Text style={styles.p11}></Text>
    <Image style={styles.p1} source={require("./icon/2.png")}/>
        <View style={styles.word}>
        <Text style={styles.w3}>Grist Mill Road</Text>
        <Text style={styles.w4}>Christopher J.</Text>
        <Text style={styles.w5}>Twenty-six years ago Hannah had</Text>
        <Text style={styles.w5}>her eye shot out. Now she wants…</Text>
        <Text style={styles.line1}></Text>
        <Image style={styles.p2} source={require("./icon/5.png")}/>
        </View>
    </View>
    <View style={styles.frame6}>
    <Text style={styles.p11}></Text>
    <Image style={styles.p1} source={require("./icon/4.png")}/>
        <View style={styles.word}>
        <Text style={styles.w3}>Street Art Activity Book</Text>
        <Text style={styles.w4}>Mitchell Beazley</Text>
        <Text style={styles.w5}>Street art is colorful, vibrant,</Text>
        <Text style={styles.w5}>diverse and exciting.Now, you can</Text>
        </View>
    </View>
    </View>
 </View>

);
}


const styles = StyleSheet.create({
    frame33: {
        top:120,
        left:-50,
    },
    frame3: {
        backgroundColor: '#f0f0f0',
        borderBottomWidth:1.5,
        borderColor:'#d1d1d1',
        width:500,
        height:240,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    p11: {
        backgroundColor: '#ffffff',
        borderBottomWidth:0.5,
        textShadowColor:'#40000000',
        borderBottomColor: '#d1d1d1',
        borderRadius:2,
        width:140,
        height:210,
        left:65
    },
    p1: {
        width:130,
        height:200,
        left:-70
    },
    word: {
        flexDirection: "column",
        left:-45
    },
    w3: {
        fontSize:18,
        fontFamily:'sans-serif-medium',
        color:'#2e2e2e',
        top:-25
    },
    w4: {
        fontSize:14,
        fontFamily:'sans-serif',
        color:'#717171',
        top:-10
    },
    w5: {
        fontSize:11.3,
        fontFamily:'sans-serif',
        color:'#b1b1b1',
        top:11
    },
    line1: {
        backgroundColor: '#c3c3c3',
        width:200,
        height:2.5,
        top:27.5,
        borderRadius:3,
    },
    line: {
        backgroundColor: '#00b49f',
        width:100,
        height:2.5,
        top:25,
        borderRadius:3,
    },
    w6: {
        fontSize:12,
        fontFamily:'sans-serif',
        color:'#b1b1b1',
        top:40
    },
    frame4: {
        backgroundColor: '#f8f8f8',
        borderBottomWidth:1.5,
        borderColor:'#d1d1d1',
        width:500,
        height:240,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    p2: {
        width:80,
        top:45,
        left:-5
    },
    frame6: {
        backgroundColor: '#f8f8f8',
        borderBottomWidth:0.5,
        width:500,
        height:240,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
    },

});

export default Album;