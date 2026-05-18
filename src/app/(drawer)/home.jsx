import { Feather } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { View, Pressable } from "react-native";

import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeArea>
      <View style={Styles.headerHome}>

        <Pressable
          style={Styles.menuButton}
          onPress={() =>
            navigation.dispatch(DrawerActions.openDrawer())
          }
        >
          <Feather
            name="menu"
            size={28}
            color="#000"
          />
        </Pressable>

      </View>

      <View style={Styles.viewLogin}>
        {/* conteúdo da home */}
      </View>
    </SafeArea>
  );
}