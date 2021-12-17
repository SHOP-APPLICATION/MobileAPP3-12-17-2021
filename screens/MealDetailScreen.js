import React from 'react'
import { ScrollView, View,Image, Text,Button, StyleSheet } from 'react-native';
import  {  MEALS } from '../data/dummy-data'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/headerButton'
import DefaultText from '../components/DefaultText';


const ListItem = props => {
  return (<View style={styles.listItem}>
    <DefaultText > {props.children}</DefaultText>
  </View>);
}
const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(
    meal => meal.id === mealId
    );
    return (
      <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>

        <View style={styles.details}>
               <DefaultText> {selectedMeal.duration}m </DefaultText>
               <DefaultText> {selectedMeal.complexity.toUpperCase()} </DefaultText>
               <DefaultText> {selectedMeal.affordability.toUpperCase()} </DefaultText>


           </View>
           <Text style={styles.title}>Ingrediants</Text>
           {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
           <Text style={styles.title}>Steps</Text>
           {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

        
        <View style = {styles.screen}>
               <Text>{selectedMeal.title}</Text>
            <Button title='go Back to Categories' onPress={() => {
                  // props.navigation.pop()
                   props.navigation.popToTop()


            }} />
        </View>
        </ScrollView>
    );
}
MealDetailScreen.navigationOptions = navigationData => {
    
   
      const mealId  = navigationData.navigation.getParam('mealId');
 
      const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: 
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => {
                console.log('mark as favorite')
            }} />
    </HeaderButtons>
   
  };
};
const styles = StyleSheet.create({
         image: {
           width:'100%',
           height:200
         },
         details:{
           flexDirection:'row',
           padding:15,
           justifyContent:'space-around',

         },
         title:{
           fontWeight:'bold',
           fontSize:22,
           textAlign:'center',
         },
         listItem:{
           marginVertical:10,
           marginHorizontal:20,
           borderColor:'#ccc',
           borderWidth:1,
           padding:10,

         }
});
// import { View, Text, StyleSheet, Button } from 'react-native'
// import { MEALS } from '../data/dummy-data';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import CustomHeaderButton from '../components/headerButton';
// const MealDetailScreen = props => {
//     const mealId = props.navigation.getParam('mealId');
//     const selectedMeal = MEALS.find(meal => meal.id === mealId);

//     return (
//         <View style={styles.screen}>
//             <Text>The Meal Details Screen !</Text>
//             <Text>{selectedMeal.title}</Text>
//             <View>
//                 <Button title="Back To Categories" 
//                 onPress={() => props.navigation.push('Categories')} />
//             </View>
//         </View>
//     )
// }

// // acces to the title of the heeader  {dynamic name of the header }
// MealDetailScreen.navigationOptions = (navigationData) => {
//     const mealId = navigationData.navigation.getParam('mealId');
//     const selectedMeal = MEALS.find(meal => meal.id === mealId);
//     return {
//         headerTitle: selectedMeal.title,
//         headerRight: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//                     <Item title='Favorite' iconName='star-outline' onPress={() => {
//                         console.log('mark as favorite')
//                     }} />
//                     </HeaderButtons>)
           
        
//       };
// }
// const styles = StyleSheet.create({

//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });

export default MealDetailScreen