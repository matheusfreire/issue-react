import React, { Component } from 'react';
import {View, TextInput } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
        <View style={{flexDirection:'row'}}>
            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                placeholderTextColor='black'
                underlineColorAndroid='transparent'
                placeholder = "New Repo"
                value={this.state.text}
            />
            <IconButton
                icon="add"
                color={Colors.black}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            <View style={{ borderBottomColor: 'black',borderBottomWidth: 1,}}/>
        </View>
    );
  }
}
