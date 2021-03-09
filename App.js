import React from 'react';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }


}

const TabNavigator =createBottomTabNavigator({
  Instagram:{screen:Instagram},
  Facebook:{screen:Facebook}

},
{

}
)

const AppContainer=createAppContainer(TabNavigator)