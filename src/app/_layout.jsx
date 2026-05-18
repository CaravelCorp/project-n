import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </>
  );
}