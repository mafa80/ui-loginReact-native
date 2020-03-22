  
import * as React from 'react';
import { Text,TextInput,View, Image,ImageBackground, StyleSheet } from 'react-native';
import { Icon,Button, SocialIcon } from 'react-native-elements'

const imgbg = require('./imagenes/fondo.jpg');

export default class LoginScreen extends React.Component {
 

  render() {
    return (
        <ImageBackground source={imgbg} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <View style={styles.containerUserName}>
              <Icon type="font-awesome" name="user" color="dark" containerStyle={styles.icon}/>
              <TextInput placeholder="Usuario" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>

            <View style={styles.containerPassword}>
              <Icon type="entypo" name="key" color="dark" containerStyle={styles.icon}/>
              <TextInput placeholder="Contrasenia" placeholderTextColor="gray"
              style={styles.textInput} secureTextEntry={true}/> 
            </View>

            <View style={styles.containerSignIn}>
              <Button title='iniciar con google' backgroundColor='#ffff' style={styles.boton} />
            </View>
            
            <View style={styles.containerRegister}> 
              <Text style={{color:'white',fontWeight: 'bold'}}>Crear cuenta?
                <Text
                style={{color:'red',fontWeight: 'bold',}}>  Registrate</Text>
              </Text>
            </View>
            
          </View>        
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
  },
  containerSignIn:{
    height: 60,
    marginLeft:'6%',
    marginRight:'6%',
    paddingTop:'2%',
    borderRadius:100,
  },
  containerUserName:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:80,
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:100,
  },
  containerRegister:{
    height: 60,
    marginLeft:'6%',
    marginRight:'6%',
    alignItems: 'center',
  },
  icon:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'gray',
    paddingLeft:'25%'
  },
  boton:{
    borderRadius:100,
    flex:3
  }
})


//---------------------------------------

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen'
import HomeScreen from './src/screens/HomeScreen'
import 'react-native-gesture-handler';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}