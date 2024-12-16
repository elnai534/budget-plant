import { Text, View, StyleSheet, Image } from "react-native";
import Taskbar from "./components/Taskbar";
import ScrollableHistory from "./components/History";
import TopHotbar from "./components/TopHotbar";
import TotalDisplay from "./components/TotalDisplay";
import { RecordsProvider } from "./components/recordsData"; // Import the provider

export default function Index() {
  return (
    <RecordsProvider>
      <View style={styles.container}>
        <View style={styles.frame}>
          <TopHotbar />
          <TotalDisplay />
          <ScrollableHistory />
          <Taskbar />
        </View>
      </View>
    </RecordsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3E364A",
    width: "100%",
    height: "100%",
    margin: "auto",
  },

  frame: {
    width: "100%",
    height: "90%",
    backgroundColor: "#3E364A",
  
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    marginTop: "10%",
  },
});
