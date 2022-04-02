import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import Transaction from "./screens/transaction.js"
import Search from "./screens/Search.js"

const Tab = createBottomTabNavigator()
class BottomTabNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer >
                <Tab.Navigator>
                    <Tab.Screen name = "Search" component = {Search}/>
                    <Tab.Screen name = "Transaction" component = {Transaction}/>  
                </Tab.Navigator>
            </NavigationContainer>

        )
    }
}

export default BottomTabNavigator;