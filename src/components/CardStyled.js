import React from "react";
import { Text, StyleSheet } from "react-native";
import { SocialIcon, Card, Button, Icon } from "react-native-elements";
export default function CardStyled(name) {
  const titulo = name.children;
  return (
    <Card
      title={titulo}
      cardStyle={{ backgroundColor: "red", borderRadius: 80 }}
    >
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="VIEW NOW"
      />
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  containerSignIn: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "2%",
    borderRadius: 100
  },
  containerCard: {
    backgroundColor: "red",
    borderRadius: 80
  }
});
