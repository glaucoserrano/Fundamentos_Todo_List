import { useFonts,Inter_400Regular,Inter_700Bold } from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";




export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <>
    <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent" 
      translucent 
    />

      {fontLoaded ? 
        <Home /> : 
        <Loading />
      }
    </>
  );
}

