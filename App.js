import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {StackNavigator} from 'react-navigation'

import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import ListRepos from './components/ListRepos';

const Navigator = StackNavigator({
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

export default class App extends React.Component {
  render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1 }}>
					<FlashStatusBar backgroundColor={black} barStyle={barStyle = "light-content"} />
					<Navigator />
				</View>
			</Provider>
		)
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
