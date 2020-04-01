import * as React from "react";
import { View, ScrollView } from "react-native";
import { HeaderStyled, CardStyled, TabNavigation } from "../components/index";
import { SideMenu, Icon, Button } from "react-native-elements";
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#B45F0420" }}>
        <View>
          <HeaderStyled>perfil</HeaderStyled>

          <CardStyled>{"Mis perros"}</CardStyled>
          <CardStyled>{"Recordatorios"}</CardStyled>
          <CardStyled>{"Perfil"}</CardStyled>
          <CardStyled>{"Videos de cuidados"}</CardStyled>
          <CardStyled>{"Videos de cuidados"}</CardStyled>
          <CardStyled>{"Videos de cuidados"}</CardStyled>
          <CardStyled>{"Videos de cuidados"}</CardStyled>
        </View>
      </View>
    </ScrollView>
  );
}
