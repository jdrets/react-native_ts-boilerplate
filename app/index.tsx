import { View, ActivityIndicator } from "./ui";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";

export default function Page() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const completeLoad = appIsReady && fontsLoaded;

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (completeLoad) {
      router.replace("/screens/home");
    }
  }, [completeLoad]);

  return (
    <View>{!completeLoad && <ActivityIndicator animating size="large" />}</View>
  );
}
