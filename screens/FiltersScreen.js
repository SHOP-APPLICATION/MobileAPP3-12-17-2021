import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/headerButton'
import Colors from '../constants/Colors'


const FiltersSwitch = props =>{
    return ( <View style = {styles.filterConatiner}>
        <Text>{props.label}</Text>
        <Switch
        trackColor={{true: Colors.primary,false:'gray'}}
        thumbColor={'orange'}
         value={props.state}
          onValueChange={props.onChange} />
    </View>);
}

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGLutenFree, setIsGlutenFree] = useState(false);
    const [isLactose, setIsLactose] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegtarian, setIsVegtarian] = useState(false);

    const saveFilters = useCallback( () => {
        const appliedFilters = {
            gluten:isGLutenFree,
            lactose:isLactose,
            vegan:isVegan,
            vegetarian:isVegtarian
        }
    },[isGLutenFree,isLactose,isVegan,isVegtarian]);
    
    useEffect( () => {
        navigation.setParams({save:saveFilters})
    },[saveFilters]);
    return (
        <View style = {styles.screen}>
        <Text style = {styles.title}>Availiable Filters / Restrictions</Text>
        <FiltersSwitch 
        label='Gluten-free' 
        state={isGLutenFree} 
        onChange={newValue=> setIsGlutenFree(newValue)} />
      
      <FiltersSwitch 
        label='Lactose' 
        state={isLactose} 
        onChange={newValue=> setIsLactose(newValue)} />
      
        <FiltersSwitch 
        label='Vegan' 
        state={isVegan} 
        onChange={newValue=> setIsVegan(newValue)} />
        <FiltersSwitch 
        label='Vegetarian' 
        state={isVegtarian} 
        onChange={newValue=> setIsVegtarian(newValue)} />
      
        
 </View>
    )
}


FiltersScreen.navigationOptions = (navData) => {
    return {

        headerTitle: 'Filters Meals',
        headerLeft: (<HeaderButtons 
            HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {
                    navData.navigation.toggleDrawer();                
                }} />
            </HeaderButtons>
            ),
        headerRight: (<HeaderButtons 
        HeaderButtonComponent = {CustomHeaderButton} > 
            <Item title= "save" iconName='ios-save' onPress={
             navData.navigation.getParam('save')
            } />
        </HeaderButtons>)
        
    }
}

const styles = StyleSheet.create({

    screen: {
        flex:1,
       
        alignItems: 'center', 

    },
    title:{
        fontWeight:'bold',
        fontSize:22,
        margin:20,
        textAlign:'center',
 },
 filterConatiner:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     width:'80%'
 }
});

export default FiltersScreen




