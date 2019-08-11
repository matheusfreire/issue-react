import {React, Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { List, Card } from 'react-native-elements'

import { AppLoading } from 'expo';

import { fetchRepos} from '../utils/api'
import { getRepos, addRepo } from '../actions'

import EmptyRepos from './EmptyRepos'
import { white } from '../utils/colors';

class ListRepos extends Component {
    state = {
        loading: true
    }

    componentDidMount(){
        this.getRepos()
    }

    getRepos(){
        fetchRepos()
            .then((repos) => {
                this.propos.dispatch(getRepos(repos))
            })
            .then((result) => {
                this.setState(()=> {repos: result})
            })
            .then(() => {
                this.setState({loading: false})
            })
            .catch((error) => {
                console.log("error", error.message)
                this.setState({loading: false})
            })
    }

    render() {
        const {loading} = this.state
        const {repos} = this.props

        if(loading){
            return (
                <View style={StyleSheet.container}>
                      <AppLoading />
                </View>
            )
        }

        return(
            <ScrollView style={styles.container}>
                   {repos ?
                           <List>
                               {Object.keys(repos).map((key) => (
                                  <TouchableOpacity key={key}
                                    onPress={() => this.props.navigation.navigate('Issues', { repo: key })}>
                                        <Card style={styles.card} title={repos[key].title}>
                                            <Text style={{ marginBottom: 10, textAlign: 'center' }}>
                                                {`${repos[key].title}`}
                                            </Text>
                                        </Card>
                                    </TouchableOpacity> 
                               ))}
                           </List>
                        :
                        <EmptyRepos />
                   }     
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    card: {
        borderRadius: 5
    }
})
const mapStateToProps = (state) => ({ repos: state })
export default connect(mapStateToProps)(ListRepos)