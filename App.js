import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';

import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Constants from 'expo'
import ListRepos from './components/ListRepos'
import {white, black} from './utils/colors'

const StackNavigation = createStackNavigator({
    Home:{
      screen: ListRepos,
			navigationOptions: {
				headerTintColor: white,
				headerStyle: {
					backgroundColor: black
				}
			}
    }
})

function FlashStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor: backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

let Navigation = createAppContainer(StackNavigation)

export default class App extends React.Component {
  render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1 }}>
					{/* <FlashStatusBar backgroundColor={black} barStyle={barStyle = "light-content"} /> */}
          <Navigation />
				</View>
			</Provider>
		)
	}
}