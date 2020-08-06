import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

export default function Search(props: {
  image: string;
  title: string;
  author: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
    display: "flex",
    width: 200,
    height: 100,
    flexDirection: "row",
  },
  image: {
    height: "100%",
    width: "80%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4558a8",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "700",
  },
  containerText: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
  },
});
