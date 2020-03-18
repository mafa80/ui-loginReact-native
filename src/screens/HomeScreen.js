  
import * as React from 'react';
import { Text,TextInput,View, Image,ImageBackground, StyleSheet } from 'react-native';
import { Icon,Button, SocialIcon,Tile,Header } from 'react-native-elements'

const imgbg = require('../../imagenes/fondo.jpg');

export default function HomeScreen({ navigation }) {
 
    return (<View>
      
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
   
    <Tile
        imageSrc={imgbg}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      />
       </View>
    );
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