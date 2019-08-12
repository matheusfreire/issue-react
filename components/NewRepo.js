import React, { Component } from 'react';
import {View, TextInput, Keyboard, StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'

import { connect } from 'react-redux'
import { addRepo } from '../actions'
import { saveNewRepo } from '../utils/api'

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex: 1
    },
    input: {
        borderRadius: 5,
        flex: 2,
        borderColor: 'gray',
        borderWidth: 1,
        marginStart: 5,
        marginTop: 5
    },
    button: {
        flex: 0.1
    }
})


class NewRepo extends Component {
  constructor(props) {
    super(props);
    this.state = { newrepo: '' };
  }

    submit = () => {
        Keyboard.dismiss()
        const {newrepo} = this.state
        if(!newrepo || (newrepo !== null && newrepo.trim().length === 0)){
            alert("Please, a url of repo")
            return;
        }
        // let regex = new RegExp("\w+\/\w+")
        // if(!regex.test(newrepo)){
        //     alert("Provide a repo in pattern organization/repository")
        //     return;
        // }
        saveNewRepo({newrepo}).then(() => {
            this.props.dispatch(addRepo(newrepo))
            this.setState({newrepo: ''})
        })
    }   

  render() {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={(newrepo) => this.setState({newrepo})}
                placeholderTextColor='black'
                underlineColorAndroid='transparent'
                placeholder = "Org/Repo"
                pattern={[
                    ,
                  ]}
                value={this.state.newrepo}
            />
            <IconButton style={styles.button}
                icon="add"
                color={Colors.black}
                size={20}
                onPress={this.submit}
            />
            <View style={{ borderBottomColor: 'black',borderBottomWidth: 1,}}/>
        </View>
    );
  }
}

export default connect()(NewRepo)
