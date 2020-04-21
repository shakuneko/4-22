import React from 'react';
import { StyleSheet, Text, View,Image ,Button} from 'react-native';
 
const Drawerscreen = (navigation) => {
return (
    
  <View style={styles.frame77}>
    <View style={styles.frame7}>
              <Image style={styles.user} source={require("./icon/user.png")}/>
              <Text style={styles.w8}>GamexHCl</Text>
              <Text style={styles.w8}>gdlab2017@gmail.com</Text>
              <Image style={styles.arrow} source={require("./icon/arrow.png")}/>
            </View>
            <View style={styles.frame8}>
              <View style={styles.sicon}>
                <Image style={styles.s} source={require("./icon/shome.png")}/>
                <Text style={styles.ee}>           </Text>
                <Text style={styles.w9}>Home</Text>
              </View>
              <View style={styles.sicon2}>
                <Image style={styles.wb} source={require("./icon/wbook.png")}/>
                <Text style={styles.ee}>           </Text>
                <Text style={styles.w10}>My Book</Text>
              </View>
              <View style={styles.sicon}>
                <Image style={styles.s} source={require("./icon/sfavorites.png")}/>
                <Text style={styles.ee}>           </Text>
                <Text style={styles.w9}>Favorites</Text>
              </View>
              <View style={styles.sicon}>
                <Image style={styles.s} source={require("./icon/ssetting.png")}/>
                <Text style={styles.ee}>           </Text>
                <Text style={styles.w9}>Setting</Text>
               </View>
              <View style={styles.sicon}>
                <Image style={styles.s} source={require("./icon/saboutus.png")}/>
                <Text style={styles.ee}>           </Text>
                <Text style={styles.w9}>About us</Text>
                </View>

            </View>
            </View>
            
  

  );
}

const styles = StyleSheet.create({
frame77: {
  top:120,
  left:5
},
frame7: {
    backgroundColor: '#00b49f',
    width:390,
    height:250,
    top:-940,
    left:-50,
  },
  user: {
    top:100,
    left:60
  },
  w8:{
    fontSize:14,
    fontFamily:'sans-serif',
    color:'#ffffff',
    top:110,
    left:65
  },
  arrow: {
    top:75,
    left:340
  },
  frame8: {
    backgroundColor: '#ebebeb',
    width:390,
    height:850,
    top:-940,
    left:-50,
  },
  sicon: {
    flexDirection: "row",
    paddingTop:40,
    top:0,
    left:70,
  },
  w9: {
    fontSize:14,
    fontFamily:'sans-serif-medium',
    color:'#5c5c5c',
    top:5,
  },
  sicon2: {
    backgroundColor: '#00b49f',
    flexDirection: "row",
    paddingTop:40,
    top:20,
    left:0,
  },
  w10: {
    fontSize:14,
    fontFamily:'sans-serif-medium',
    color:'#ffffff',
    top:-15,
    left:70,
  },
  wb: {
    top:-20,
    left:70,
  }
});

export default Drawerscreen;