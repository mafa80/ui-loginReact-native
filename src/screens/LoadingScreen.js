import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from 'firebase';
import '../auth/firebaseConf'



class LoadingScreen extends Component {
    componentDidMount() {
        this.handleAuth()
        this.checkIfLogged();
    }

    handleAuth() {

        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user, token);
            
            
        })
        .catch(function (error) {
            // This gives you a Google Access Token.
            console.log(error.message);
            
            
        })
        
        }

        checkIfLogged = () => {
            firebase.auth().onAuthStateChanged((user) => {
                this.setState({ user })
                if (user) {
                    console.log(' entro al if')
                    this.props.navigation.navigate('Inicio')
                } else {
                    console.log(' entro al else')
                    this.props.navigation.navigate('Login')
                }
            });
        };

        render(){
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
    }


    export default LoadingScreen

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })