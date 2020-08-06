import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../../components/Card";
import { connect } from "react-redux";
import {
  getAudiobookList,
  fetchListAudiobooks,
  actions,
  audiobook,
} from "../../ducks/audiobooks";

export function ListNew(props: {
  fetchListAudiobooks: () => Promise<any>;
  setActualAudiobook: (item: audiobook) => Promise<any>;
  navigation: any;
  audiobooks: Array<audiobook>;
}) {
  useEffect(() => {
    props.fetchListAudiobooks();
  }, []);

  const handlePress = (item: audiobook) => {
    props.setActualAudiobook(item);
    props.navigation.navigate("Description", {
      title: item.title,
      shareUrl: item.sharing_url,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ADICIONADOS RECENTEMENTE</Text>
      <FlatList
        horizontal={true}
        data={props.audiobooks}
        renderItem={({ item }) => (
          <Card
            image={item.cover_image_url}
            author={item.author}
            title={item.title}
            onPress={() => handlePress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default connect(getAudiobookList, (dispatch: any) => ({
  fetchListAudiobooks: () => dispatch(fetchListAudiobooks()),
  setActualAudiobook: (item: audiobook) =>
    dispatch(actions.setActualAudiobook(item)),
}))(ListNew);
