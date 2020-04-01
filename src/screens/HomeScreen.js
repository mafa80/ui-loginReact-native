import * as React from "react";
import { View, ScrollView } from "react-native";
import { HeaderStyled, CardStyled, TabNavigation } from "../components/index";
import { SideMenu, List, ListItem } from "react-native-elements";
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <HeaderStyled>{"Perfil"}</HeaderStyled>
        <CardStyled>{"PERROS"}</CardStyled>
        <CardStyled>{"Cuidados"}</CardStyled>
      </View>
    </ScrollView>
  );
}
