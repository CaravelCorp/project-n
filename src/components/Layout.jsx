import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function Layout({ children }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
}