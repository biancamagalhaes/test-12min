import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SvgSearch from "../../../assets/icons/search";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Search(props: {
  handleSearch: (text: string) => void;
}) {
  const [textSearch, setTextSearch] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Search audiobooks"}
        placeholderTextColor={"#000"}
        onChangeText={(value: string) => setTextSearch(value)}
        onKeyPress={(event: any) => {
          if (event.keyCode === 13) {
            props.handleSearch(textSearch);
          }
        }}
      />
      <TouchableOpacity onPress={() => props.handleSearch(textSearch)}>
        <SvgSearch />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(112,112,112,0.18)",
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    color: "#000",
  },
});
