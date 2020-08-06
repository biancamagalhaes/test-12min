import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { connect } from "react-redux";
import { getAudiobook, audiobook } from "../../ducks/audiobooks";

export function ImageTrack(props: { audiobook: audiobook }) {
  return (
    <ImageBackground
      source={{
        uri: props.audiobook.cover_image_url,
      }}
      style={styles.container}
    >
      <View style={styles.blackView} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{props.audiobook.title}</Text>
        <Text style={styles.subtitle}>{props.audiobook.author}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    maxWidth: 330,
    maxHeight: 580,
    display: "flex",
    alignSelf: "center",
    backgroundColor: "red",
  },
  blackView: {
    width: "100%",
    height: "15%",
    backgroundColor: "#000",
    opacity: 0.7,
    alignItems: "center",
    display: "flex",
  },
  containerText: {
    position: "absolute",
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  subtitle: {
    color: "#CCC8C8",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default connect(getAudiobook, (dispatch: any) => ({}))(ImageTrack);
