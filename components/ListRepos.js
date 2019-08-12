import React,{ Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import { AppLoading } from 'expo'
import { connect } from 'react-redux'

import { fetchRepos} from '../utils/api'
import { getRepos } from '../actions'

import NewRepo from './NewRepo'
import EmptyRepos from './EmptyRepos'
import { white } from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    card: {
        borderRadius: 5
    }
})

class ListRepos extends Component {
    static navigationOptions = {
        title: 'Repos'
    }
    state = {
        loading: false
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
                // this.setState(() => { loading: false })
            })
    }

    render() {
        const {loading} = this.state
        const {repos} = this.props

        if(loading){
            return (
                <View style={styles.container}>
                      <AppLoading />
                </View>
            )
        }

        return(
                
            <ScrollView style={styles.container}>
                <NewRepo />
                {repos ?
                        <FlatList>
                            {Object.keys(repos).map((key) => (
                                <TouchableOpacity key={key}
                                    onPress={() => this.props.navigation.navigate('Issues', { repo: key })}>
                                        <Card style={styles.card} title={repos[key]}>
                                            <Text style={{ marginBottom: 10, textAlign: 'center' }}>
                                                {`${repos[key]}`}
                                            </Text>
                                        </Card>
                                    </TouchableOpacity> 
                            ))}
                        </FlatList>
                        :
                        <View>
                            <EmptyRepos />
                        </View>
                }     
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => ({ repos: state })
export default connect(mapStateToProps)(ListRepos)