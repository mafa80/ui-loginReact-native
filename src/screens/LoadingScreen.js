import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";
import "../auth/firebaseConf";

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLogged();
  }

  checkIfLogged = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      if (user) {
        console.log(" entro al if");
        this.props.navigation.navigate("Inicio");
      } else {
        console.log(" entro al else");
        this.props.navigation.navigate("Login");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
