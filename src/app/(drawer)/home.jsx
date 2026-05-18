import { View, Pressable, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "expo-router";

import { DrawerActions } from "@react-navigation/native";

import Styles from "@/styles/global";

import SafeArea from "@/components/safe-area";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeArea>
      <View style={Styles.container}>

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

        <View style={Styles.content}>
          <Text style={Styles.textTitleHome}>
            Notas
          </Text>

          <Text style={Styles.textSubTitleHome}>
            Você não possui nenhuma anotação, crie a sua primeira anotação clicando no botão abaixo!
          </Text>
        </View>

        <Pressable style={Styles.plusButton}>
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