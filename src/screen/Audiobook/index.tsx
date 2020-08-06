import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import AudioTrack from "../../container/AudioTrack";
import ImageTrack from "../../container/ImageTrack";
import { AntDesign } from "@expo/vector-icons";

export default function App(props: { navigation: any }) {
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
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 40,
            width: "100%",
            paddingLeft: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="#4558a8"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Image
            source={{
              uri:
                "https://ideiasenegociosdigitais.com.br/wp-content/uploads/2018/02/aplicativo-12-minutos.png",
            }}
            style={{ width: "35%", height: "100%", marginRight: 20 }}
          />
        </View>
        <ImageTrack />
        <AudioTrack />
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
