import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  useState
} from "react-native";
import { CheckBox, Card } from "react-native-elements";
import imagen from "../../imagenes/examen.jpg";

import { HeaderStyled } from "../components/index";

export default function TestScreen({ navigation }) {
  const nombre = "TEST";
  return (
    <ScrollView>
      <HeaderStyled>{nombre}</HeaderStyled>
      <View style={styles.container}>
        <Card style={styles.containerRegister}>
          <Image source={imagen} style={styles.image} />
          <Text>PREGUNTA 1: </Text>
          <View>
            <CheckBox title="Opcion 1" />
            <CheckBox title="Opcion 2" />
            <CheckBox title="Opcion 3" />
            <CheckBox title="Opcion 4" />
          </View>
          <Text>PREGUNTA 2: </Text>
          <View>
            <CheckBox title="Opcion 1" />
            <CheckBox title="Opcion 2" />
            <CheckBox title="Opcion 3" />
            <CheckBox title="Opcion 4" />
          </View>
          <Text>PREGUNTA 3: </Text>
          <View>
            <CheckBox title="Opcion 1" />
            <CheckBox title="Opcion 2" />
            <CheckBox title="Opcion 3" />
            <CheckBox title="Opcion 4" />
          </View>
          <Text>PREGUNTA 4: </Text>
          <View>
            <CheckBox title="Opcion 1" />
            <CheckBox title="Opcion 2" />
            <CheckBox title="Opcion 3" />
            <CheckBox title="Opcion 4" />
          </View>
          <Text>PREGUNTA 5: </Text>
          <View>
            <CheckBox title="Opcion 1" />
            <CheckBox title="Opcion 2" />
            <CheckBox title="Opcion 3" />
            <CheckBox title="Opcion 4" />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  image: {
    height: 60,
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
    paddingTop: "2%",
    borderRadius: 12
  }
});
