import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import {Image} from "react-native"

// These are the screens to be implement


// import HomePage from "../../screens/HomePage";
// import Live from "../../screens/Live"
// import MyCart from "../../screens/MyCart"
// import NewsFeed from "../../screens/NewsFeed";
// import Profile from "../../screens/Profile";



const Tab = createMaterialBottomTabNavigator()

const BottomTab = () => {
  return (
      
      <Tab.Navigator  
          initialRouteName="NewsFeed"
          activeTintColor= '#f95a7e'
          barStyle = {{backgroundColor: "#fff", paddingBottom: 5}}

          >
        <Tab.Screen name="NewsFeed"
                    component={NewsFeed} 
                    options={{tabBarIcon: ({focused}) =>(
                            <Image source= { focused? require("../../assets/Icons/feed.png")
                                                      :require("../../assets/Icons/feed.png")} 
                                 />
                        ) }}/>
        <Tab.Screen name="Live"  component={Live}  options={{tabBarIcon: ({focused}) =>(
                            
                            <Image source= { focused? require("../../assets/Icons/live.png")
                                                      :require("../../assets/Icons/live.png")} 
                                 />
         ) }}/>
        <Tab.Screen name="Home"  component={HomePage}  options={{tabBarIcon: ({focused}) =>{
                            return (
                                                  
                            <Image source= { focused? require("../../assets/Icons/home.png")
                                                      :require("../../assets/Icons/home.png")} 
                                    />
                        )} }}/>
        <Tab.Screen name="MyCart"  component={MyCart}  options={{tabBarIcon: ({focused}) =>(
                            <Image source= { focused? require("../../assets/Icons/cart.png")
                                                      :require("../../assets/Icons/cart.png")} 
                                />
                        ) }}/>
        <Tab.Screen name="Profile"  component={Profile} options={{tabBarIcon: ({focused}) =>(
                            <Image source= { focused? require("../../assets/Icons/profile.png")
                                                      :require("../../assets/Icons/profile.png")} 
                                 />
                        ) }} />
      </Tab.Navigator>
  );
}



export default BottomTab