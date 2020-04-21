import * as React from 'react';
import { Button, View,StyleSheet,Image,Text,SafeAreaView } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Headerscreen from "./scr/Headerscreen";
import Homescreen from "./scr/Homescreen";
import Favoritescreen from "./scr/Favoritescreen";

function CustomDrawerContent(props){
  return (
    <DrawerContentScrollView style={{marginTop:-56}} {...props}>
      <View style={{flexDirection: "row",}}>
      <View style={{
         backgroundColor: '#00b49f',
         height:260,
         top:0
      }}>
      <Image style={styles.user} source={require("./icon/user.png")}/>
      <View style={{top:100,height:200}}>
       <Text style={{ fontSize:14,color:'#fff',marginTop:20,marginLeft:22 }}>GamexHCl</Text>
        <Text style={{ fontSize:14,color:'#fff',marginLeft:22 }}>gdlab2017@gmail.com</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#00b49f',
         height:260,width:150}}>
        <Image style={{backgroundColor: '#00b49f',top:200,left:95}} source={require("./icon/arrow.png")}/>
        </View>
        </View>
        <DrawerItemList {...props}
/>
      </DrawerContentScrollView> 
  );
}
const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home" 
      drawerStyle={{ backgroundColor: '#fff',width: 330}}
      drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        itemStyle: { marginLeft: 0, marginRight: 0 ,marginTop:20},     
        labelStyle: { fontSize: 16 },
      }}
      drawerContent={props => <CustomDrawerContent {...props}/>} >
        <Drawer.Screen name="Home" component={Homescreen}
       options={{
        drawerIcon: ( ) => (
          <Image
          source={require("./icon/shome.png")}
          style={{marginLeft:26 }}
          />
          )}
        }/>
         <Drawer.Screen name="My book" component={Headerscreen}
       options={{
        drawerIcon: ( { tintColor }) => (
          <Image
          source={require("./icon/sbook.png")}
          style={{marginLeft:26 , tintColor: tintColor }}
          />
          )}
        }/>
         <Drawer.Screen name="Favorites" component={Favoritescreen}
       options={{
        drawerIcon: ( ) => (
          <Image
          source={require("./icon/sfavorites.png")}
          style={{marginLeft:26 }}
          />
          )}
        }/>
         <Drawer.Screen name="Setting" component={Headerscreen}
       options={{
        drawerIcon: ( ) => (
          <Image
          source={require("./icon/ssetting.png")}
          style={{marginLeft:26 }}
          />
          )}
        }/>
         <Drawer.Screen name="About us" component={Headerscreen}
       options={{
        drawerIcon: ( ) => (
          <Image
          source={require("./icon/saboutus.png")}
          style={{marginLeft:26 }}
          />
          )}
        }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    user: {
      top:115,
      left:17
    },
    arrow: {
      top:100,
      left:120
    },
    frame8: {
      top:-60,
      left:-35,
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
      left:35,
    },
    w10: {
      fontSize:14,
      fontFamily:'sans-serif-medium',
      color:'#ffffff',
      top:-15,
      left:35,
    },
    wb: {
      top:-20,
      left:35,
    }
  });