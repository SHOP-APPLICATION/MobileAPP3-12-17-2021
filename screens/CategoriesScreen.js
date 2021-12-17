import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import CustomHeaderButton from '../components/headerButton'
const CategoriesScreen = props => {
    const reanderGridItem = (itemData) => {
        return (<CategoryGridTile 
                    title={itemData.item.title}
                    color={itemData.item.color}

                    onSelect={() => {
                        props.navigation.navigate('CategoryMeals', {
                            itemId:itemData.item.id
                        })
                    }} />);
    }
    return (
        // <View style={styles.screen}>
        //     <Text>The Categories Screen !</Text>
        //     <View>
        //         <Button title="Categoty Meal" 
        //         // replace we can use like in login screen
        //         onPress={() => props.navigation.replace('CategoryMeals')} />
        //     </View>
        // </View>
        <FlatList data={CATEGORIES} renderItem={reanderGridItem}  numColumns={2}/>
    )
}

// add some info in the header
CategoriesScreen.navigationOptions = (navData) => {
    return {

        headerTitle: 'Meal Categories',
        headerLeft: (<HeaderButtons 
            HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {
                    navData.navigation.toggleDrawer();                
                }} />
            </HeaderButtons>
            )
        
    }
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  

});

export default CategoriesScreen
