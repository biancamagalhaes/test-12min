import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Card from "../../components/CardSearch";
import Search from "../../components/Search";
import { connect } from "react-redux";
import { getAudiobookList, audiobook, actions } from "../../ducks/audiobooks";

export function ListSearch(props: {
  navigation: any;
  audiobooks: Array<audiobook>;
  setActualAudiobook: (item: audiobook) => Promise<void>;
}) {
  const [data, setData] = useState([] as Array<audiobook>);

  const handleDataSearch = (word: string) => {
    if (word !== "") {
      const result = props.audiobooks.filter(
        (item) => item.title.toUpperCase().indexOf(word.toUpperCase()) > -1
      );
      setData(result);
    }
  };

  const handlePress = (item: audiobook) => {
    props.setActualAudiobook(item);
    props.navigation.navigate("Description", {
      title: item.title,
      shareUrl: item.sharing_url,
    });
  };

  return (
    <View style={styles.container}>
      <Search handleSearch={(text: string) => handleDataSearch(text)} />
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card
              image={item.thumb_image_url}
              author={item.author}
              title={item.title}
              onPress={() => handlePress(item)}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: "gray",
                height: 1,
                width: "100%",
                opacity: 0.5,
              }}
            />
          )}
          style={{ marginRight: -40 }}
        />
      ) : (
        <Text style={{ textAlign: "center", fontWeight: "700" }}>
          Nenhum item encontrado
        </Text>
      )}
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
    marginTop: 20,
  },
});

export default connect(getAudiobookList, (dispatch: any) => ({
  setActualAudiobook: (item: audiobook) =>
    dispatch(actions.setActualAudiobook(item)),
}))(ListSearch);
