import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

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
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.author}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
    marginRight: 30,
    display: "flex",
    width: 200,
    height: "100%",
    minHeight: 300,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: "80%",
    width: "100%",
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#4558a8",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "normal",
    marginBottom: 20,
  },
});
