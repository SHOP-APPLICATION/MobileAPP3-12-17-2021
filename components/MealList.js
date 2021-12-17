import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return (<MealItem  
            title={itemData.item.title} 
            image={itemData.item.imageUrl} 
            affordability={itemData.item.affordability} 
            complexity={itemData.item.complexity} 
            duration={itemData.item.duration} 
            onSelectMeal={() => {
                props.navigation.navigate('MealDeatil',{
                    mealId:itemData.item.id
                })
            }}/>); 
    }
    return ( <View style={styles.list}>
        <FlatList  data={props.listData} 
        renderItem={renderMealItem} 
        style={{width:'100%'}} />
</View>)
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;