import React from "react";
import { StyleSheet, Text, View ,Image } from "react-native";

const Header = ( ) => {
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
      </View>
        <View style={styles.frame2}>
            <Image style={styles.navbar} source={require("./icon/navbar.png")}/>
            <Text style={styles.w2}>My Book 123</Text>
            <Image style={styles.search} source={require("./icon/search.png")}/>
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
  });
 
  
  export default Header;