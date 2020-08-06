import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import { connect } from "react-redux";
import { getAudiobook, audiobook } from "../../ducks/audiobooks";

export function AudioTrack(props: { audiobook: audiobook }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [playbackInstance, setPlaybackInstance] = useState({} as any);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setAudioMode();
  }, []);

  const setAudioMode = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false,
      });

      loadAudio();
    } catch (e) {
      console.log(e);
    }
  };

  const loadAudio = async () => {
    try {
      const playbackInstancce = new Audio.Sound();
      const source = {
        uri: props.audiobook.audio_url,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };

      playbackInstancce.setOnPlaybackStatusUpdate((status: any) =>
        onPlaybackStatusUpdate(status)
      );
      await playbackInstancce.loadAsync(source, status, false);
      setPlaybackInstance(playbackInstancce);
    } catch (e) {
      console.log(e);
    }
  };

  const onPlaybackStatusUpdate = (status: {
    isBuffering: boolean;
    durationMillis: number;
    positionMillis: number;
  }) => {
    setIsBuffering(status.isBuffering);
    setPercentage(
      Math.round((status.positionMillis * 100) / status.durationMillis)
    );
    setDuration(status.durationMillis - status.positionMillis);
  };

  const handlePlayPause = async () => {
    isPlaying
      ? await playbackInstance?.pauseAsync()
      : await playbackInstance?.playAsync();

    setIsPlaying(!isPlaying);
  };

  const lessThanTen = (number: number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  const handleDuration = (durattion: number) => {
    if (isNaN(durattion)) {
      return "00:00";
    }
    var tempTime = moment.duration(durattion);
    var y = `${lessThanTen(tempTime.minutes())} : ${lessThanTen(
      tempTime.seconds()
    )}`;
    return y;
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteCircle}>
        <TouchableOpacity style={styles.purplePlay} onPress={handlePlayPause}>
          {isPlaying ? (
            <FontAwesome5 name="pause" size={24} color="#fff" />
          ) : (
            <FontAwesome5 name="play" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.containerTrack}>
        <View style={styles.trackPurple}>
          <View
            style={[
              styles.trackWhite,
              {
                width: `${percentage}%`,
              },
            ]}
          />
        </View>
        <Text style={styles.textDuration}>{handleDuration(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4558a8",
    height: 70,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  whiteCircle: {
    position: "absolute",
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: -70,
    backgroundColor: "#F4F5F9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  purplePlay: {
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: "#4558a8",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  containerTrack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
  },
  trackPurple: {
    backgroundColor: "#0E1E60",
    borderRadius: 5,
    height: 8,
    width: "80%",
    display: "flex",
    alignSelf: "flex-end",
  },
  trackWhite: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 8,
  },
  textDuration: {
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
});

export default connect(getAudiobook, (dispatch: any) => ({}))(AudioTrack);
