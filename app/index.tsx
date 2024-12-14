import { Text, View, StyleSheet, Image } from "react-native";
import Taskbar from "./components/Taskbar";
import ScrollableHistory from "./components/History";
import PlantImage from "./components/Plant";
import TopHotbar from "./components/TopHotbar";
import TotalDisplay from "./components/TotalDisplay";
import { RecordsProvider } from "./components/recordsData"; // Import the provider

export default function Index() {
  return (
    <RecordsProvider>
      <View style={styles.container}>
        <View style={styles.frame}>
          <Taskbar />
          <ScrollableHistory />
          <TotalDisplay />
          <PlantImage />
          <TopHotbar />
        </View>
      </View>
    </RecordsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderColor: "#000000",
    width: "100%",
    height: "100%",
    margin: "auto"
  },

  frame: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3E364A",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column-reverse",
  },
});
