import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Description from "../../container/Description";

export default function App(props: any) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Description navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
