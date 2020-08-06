import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../../components/Card";
import { connect } from "react-redux";
import {
  getPreviouslyAudiobooksList,
  audiobook,
  actions,
} from "../../ducks/audiobooks";

export function ListPreviously(props: {
  setActualAudiobook: (item: audiobook) => Promise<any>;
  navigation: any;
  previouslyAudiobooks: Array<number>;
  audiobooks: Array<audiobook>;
}) {
  const handleData = () => {
    const data = props.previouslyAudiobooks.map((item: number) =>
      props.audiobooks.find((element) => element.id === item)
    );
    return data as Array<audiobook>;
  };

  const handlePress = (item: audiobook) => {
    props.setActualAudiobook(item);
    props.navigation.navigate("Description", {
      title: item.title,
      shareUrl: item.sharing_url,
    });
  };

  return handleData().length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.textTitle}>OUVIDOS ANTERIORMENTE</Text>
      <FlatList
        horizontal={true}
        data={handleData()}
        renderItem={({ item }) => (
          <Card
            image={item.cover_image_url}
            author={item.author}
            title={item.title}
            onPress={() => handlePress(item)}
          />
        )}
        style={{ marginRight: -40 }}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});

export default connect(getPreviouslyAudiobooksList, (dispatch: any) => ({
  setActualAudiobook: (item: audiobook) =>
    dispatch(actions.setActualAudiobook(item)),
}))(ListPreviously);
