import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import IconPlay from "../../../assets/icons/play";
import { connect } from "react-redux";
import { getAudiobook, actions, audiobook } from "../../ducks/audiobooks";

export function Description(props: {
  navigation: any;
  audiobook: audiobook;
  previouslyAudiobooksList: (id: number) => Promise<any>;
}) {
  const handlePress = () => {
    props.previouslyAudiobooksList(props?.audiobook?.id);
    props.navigation.navigate("Audiobook");
  };
  return (
    <>
      <TouchableOpacity onPress={() => handlePress()}>
        <ImageBackground
          source={{
            uri: props.audiobook.medium_image_url,
          }}
          style={styles.imageContainer}
        >
          <View style={styles.blackView} />
          <View style={styles.containerIcon}>
            <IconPlay />
            <Text style={styles.textIcon}>Clique para ouvir o audiobook</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
        <Text style={styles.title}>{props.audiobook.title}</Text>
        <Text style={styles.tagline}>{props.audiobook.tagline}</Text>
        <Text style={styles.author}>Autor: {props.audiobook.author}</Text>
        <Text style={styles.description}>{props.audiobook.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blackView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  containerIcon: {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  textIcon: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  tagline: { fontSize: 18, fontWeight: "700", marginVertical: 10 },
  author: {
    fontSize: 14,
    fontWeight: "700",
    marginVertical: 10,
    color: "#707070",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: "#707070",
  },
});

export default connect(getAudiobook, (dispatch: any) => ({
  previouslyAudiobooksList: (id: number) =>
    dispatch(actions.previouslyAudiobooksList(id)),
}))(Description);
