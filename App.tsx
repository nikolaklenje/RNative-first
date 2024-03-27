import { StyleSheet } from "react-native";
import Navigation from "./src/components/navigation";
import AppProvider from "./src/lib/context";
export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
