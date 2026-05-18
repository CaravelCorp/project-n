import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles, { drawerScreenOptions } from "@/styles/global";

export default function DrawerLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Drawer screenOptions={drawerScreenOptions} />
    </SafeAreaView>
  );
}