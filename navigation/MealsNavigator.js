import React from 'react';
import {SafeAreaView, ScrollView, Dimensions, Image, View} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';


import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';


// defaults styles options
const defaultStackNavoptions = {  
        headerStyle: {
             backgroundColor: 'white', 
             
         },        
        headerTintColor: Colors.primary,
        headerTitleStyle: {
            //  fontWeight: 'bold',
             fontFamily: 'open-sans-bold'
         },
         headerBacktitleStyle: {
          fontFamily: 'open-sans'

         },
        headerTitleAlign: 'center'
    };
    
const MealsNavigator = createStackNavigator({
    
      Categories: CategoriesScreen,
      CategoryMeals: {
          screen: CategoryMealsScreen,
        //   navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: 'white', 
               
        //       },
        //     headerTintColor: Colors.primary,
        //     headerTitleStyle: {
        //     fontWeight: 'bold',
        //     },
        //     headerTitleAlign: 'center'
        //   }
      },
      MealDeatil: MealDetailScreen,

    
  },
  {
   defaultNavigationOptions: defaultStackNavoptions
   
  });

  // stack for favorites 

 const FavStackNavigator = createStackNavigator({
      Favorites: FavoritesScreen,
      MealDeatil: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavoptions
    }
  );
  


  const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant-outline' size={25} color={tabInfo.tintColor} />;
        }
    },
   // tabBarColor: Colors.primary
},
    Favorites: {screen: FavStackNavigator, navigationOptions: {
        tabBarLabel: 'Favorites Meals',
      tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-star-outline' size={25} color={tabInfo.tintColor} />;
      }
    },
    ///tabBarColor: Colors.accent
}
}

  const MealsFavTabNavigator = 
 createBottomTabNavigator(tabScreenConfig,{
      tabBarOptions: {
        labelStyle:{
          fontFamily:'open-sans'
        },
          activeTintColor: 'white',
          activeBackgroundColor: Colors.accent
      }
  });

  // to change style for android devices 

//   Platform.OS ==='android' ? 
//   createMaterialBottomTabNavigator(tabScreenConfig, {
//       activeColor: Colors.primary,
//       shifting: false,
//       barStyle: {
//           backgroundColor: Colors.primary
//       }
//   }) 
//   : createBottomTabNavigator(tabScreenConfig,{
//       tabBarOptions: {
//           activeTintColor: 'white',
//           activeBackgroundColor: Colors.accent
//       }
//   });
  


const FiltersStackNavigator = createStackNavigator({
  Filters: FiltersScreen,
}
,
{
  // navigationOptions: {
  //   drawerLabel: 'Filters ::'
  // },
defaultNavigationOptions: defaultStackNavoptions
}
);
// drawer navigations
const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../assets/user.png')} 
        style={{height: 120, width: 120, borderRadius: 60}} />
    </View>
    <ScrollView>
      <DrawerItems  {...props}/>
    </ScrollView>
    <View style={{height: 150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../assets/user.png')} 
        style={{height: 120, width: 120, borderRadius: 60}} />
    </View>
  </SafeAreaView>
);
const MainNavigator = createDrawerNavigator({
   MealsFavs: {screen: MealsFavTabNavigator,navigationOptions:{
    drawerLabel: 'Meals',
    drawerIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant-outline' size={25} color={tabInfo.tintColor} />;
  }
   }},
   Filters: FiltersStackNavigator
},
{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: Colors.primary,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
}
);
  export default createAppContainer(MainNavigator);
