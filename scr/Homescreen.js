import React from "react";
import { StyleSheet, Text, View ,Image ,Button} from "react-native";


const Homescreen = ( navigation ) => {
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
      </View>
        <View style={styles.frame2}>
            <Image style={styles.navbar} source={require("./icon/navbar.png")}/>
            <Text style={styles.w2}>Home</Text>
            <Image style={styles.search} source={require("./icon/search.png")}/>
        </View>
        <View style={styles.frame33}>
        <Image style={styles.pic2} source={require("./icon/rascal4.png")}/>
        <Text style={styles.w3}>Welcome~</Text>
        <Image style={styles.pic} source={require("./icon/333.png")}/>
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
      backgroundColor:'#FFFBE1',
      height:720,
      width:410,
  },
  w3:{
    fontSize:30,
    fontFamily:'sans-serif-medium',
    color:"#664015",
    top:80,
    left:60

  },
  pic:{
      top:160,
      left:150
  },
    frame5: {
      backgroundColor: '#ffffff',
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
 
  
  export default Homescreen;