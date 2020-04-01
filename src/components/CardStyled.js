import React from "react";
import { Text, StyleSheet } from "react-native";
import { SocialIcon, Card, Button, Icon } from "react-native-elements";

export default function CardStyled(name) {
  const titulo = name.children;
  return (
    <Card
      title={titulo}
      containerStyle={{
        backgroundColor: "#DBA90140",
        borderRadius: 30
      }}
    >
      <Button
        icon={<Icon name="pets" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "#B45F04"
        }}
        title=" Ir ahora"
      />
    </Card>
  );
}
