import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

 
const Bottom = ( ) => {
return (
<View>
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
}

const styles = StyleSheet.create({
frame5: {
    backgroundColor: '#ffffff',
    borderTopWidth:1.5,
    borderColor:'#d1d1d1',
    width:500,
    height:100,
    top:47,
    left:-45,
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

export default Bottom;
   