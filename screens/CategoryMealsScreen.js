import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

  
    const catId = props.navigation.getParam('itemId', 'NO-ID');
    const selectedCatgeory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
}


// acces to the title of the heeader  {dynamic name of the header }
CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('itemId');
    const selectedOption = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedOption.title,
      
      };
}

const styles = StyleSheet.create({

  
});

export default CategoryMealsScreen