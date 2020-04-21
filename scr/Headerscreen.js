import React from "react";
import { StyleSheet, Text, View ,Image ,Button} from "react-native";


const Headerscreen = ( navigation ) => {
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
      </View>
        <View style={styles.frame2}>
          
            <Image style={styles.navbar} source={require("./icon/navbar.png")}/>
            <Text style={styles.w2}>My Book</Text>
            <Image style={styles.search} source={require("./icon/search.png")}/>
        </View>
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
          <View style={styles.frame5}>
              <View style={styles.pp}>
                <Image style={styles.home} source={require("./icon/home.png")}/>
                <Text style={styles.ee}>                         </Text>
                <Image style={styles.gbook} source={require("./icon/gbook.png")}/>
                <Text style={styles.ee}>                         </Text>
                <Image style={styles.favorites} source={require("./icon/favorites.png")}/>
              </View>
              <View style={styles.ww}>
                <Text style={styles.w7}>Home</Text>
                <Text style={styles.ee}>                     </Text>
                <Text style={styles.w8}>My Book</Text>
                <Text style={styles.ee}>                   </Text>
                <Text style={styles.w7}>Favorites</Text>
              </View>
         </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    frame: {
      backgroundColor: '#00b49f',
      flexDirection: "row",
      width:500,
      height:40,
    },
    
    w1: {
      fontSize:15,
      fontFamily:'sans-serif',
      color:'#ffffff',
      left:335,
      top:5,
    },
    frame2: {
      backgroundColor: '#00b49f',
      width:500,
      height:80,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    w2: {
      fontSize:20,
      fontFamily:'sans-serif-medium',
      color:'#ffffff',
    },
    frame33: {
      top:0,
      left:-5,
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

  
    frame5: {
     
      borderTopWidth:1.5,
      borderColor:'#d1d1d1',
      width:500,
      height:100,
      top:-70,
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: 'flex-start',
    },
    ww: {
      flexDirection: "row",
      alignItems: 'center',
      top:5,
      left:-200,
    },
    w7: {
      fontSize:13,
      fontFamily:'sans-serif-medium',
      color:'#818181',
    },
    w8: {
      color:'#00b49f',
    },
    pp: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      left:100,
      top:-25
    },
    
    
  });
 
  
  export default Headerscreen;