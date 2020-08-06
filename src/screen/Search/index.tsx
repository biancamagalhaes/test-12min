import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ListSearch from "../../container/ListSearch";

export default function SearchScreen(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          display: "flex",
        }}
        contentContainerStyle={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="#4558a8"
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <ListSearch navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
    paddingTop: 30,
  },
});
