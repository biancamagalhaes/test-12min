import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import Logo from "../../../assets/icons/logo";
import SvgSearch from "../../../assets/icons/search";
import ListNew from "../../container/ListNew";
import ListPreviously from "../../container/ListPreviously";

export default function App(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <View
          style={{
            paddingVertical: 50,
            paddingBottom: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
            <SvgSearch />
          </TouchableOpacity>
        </View>
        {/* 
        <View style={{ marginRight: 40 }}>
          <Search />
        </View> */}
        <ListNew navigation={props.navigation} />
        <ListPreviously navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#F4F5F9",
  },
});
