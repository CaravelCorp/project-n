import { View, Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";
import getplusButtonStyle from "@/styles/plus-button";
import getmenuButtonStyle from "@/styles/menu-button";
import { routePatternToRegex } from "expo-router/build/fork/getStateFromPath-forks";

export default function Home() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeArea>
      <View style={Styles.container}>

        <Pressable
          style={({ pressed }) =>
            getmenuButtonStyle(pressed)
          }
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
        
        <View style={Styles.content}>
          <Text style={Styles.textTitleHome}>
            Notas
          </Text>

          <Text style={Styles.textSubTitleHome}>
            Você não possui nenhuma anotação, crie a sua primeira anotação clicando no botão abaixo!
          </Text>
        </View>

        <Pressable
          style={({ pressed }) =>
            getplusButtonStyle(pressed)
          }
          onPress={() => router.push("/create-note")}
        >
          <Feather
            name="plus"
            size={28}
            color="#000"
          />
        </Pressable>

      </View>
    </SafeArea>
  );
}