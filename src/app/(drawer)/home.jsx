import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Pressable } from "react-native";

import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

export default function Home() {

  const router = useRouter();

  return (
    <SafeArea>
      <View style={Styles.headerHome}>

        <Pressable
          style={Styles.menuButton}
          onPress={() => router.replace("/layout/login")}
        >
          <Feather
            name="menu"
            size={28}
            color={"#000"}
          />
        </Pressable>

      </View>

      <View style={Styles.viewLogin}>

      </View>
    </SafeArea>
  );
}