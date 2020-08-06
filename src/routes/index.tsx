import * as React from "react";
import * as Sharing from "expo-sharing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShareIcon from "../../assets/icons/share";
import HomeScreen from "../screen/Home";
import DescriptionScreen from "../screen/Description";
import AudiobookScreen from "../screen/Audiobook";
import SearchScreen from "../screen/Search";
import { TouchableOpacity, Share } from "react-native";

const Stack = createStackNavigator();

function App() {
  const onShare = async (title: string, url: string) => {
    try {
      const result = await Share.share({
        message: `Talvez você gostaria de ouvir o livro ${title} no 12 minutos. ${url}`,
        url: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4558a8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={(route: any) => ({
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() =>
                  onShare(
                    route?.route?.params?.title,
                    route?.route?.params?.shareUrl
                  )
                }
              >
                <ShareIcon />
              </TouchableOpacity>
            ),
            headerTitle: "",
          })}
        />
        <Stack.Screen
          name="Audiobook"
          component={AudiobookScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
