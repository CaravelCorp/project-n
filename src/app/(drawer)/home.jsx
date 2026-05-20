import {
  View,
  Pressable,
  Text,
  FlatList,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import { Feather } from "@expo/vector-icons";

import {
  useNavigation,
  useRouter,
} from "expo-router";

import { DrawerActions } from "@react-navigation/native";

import { getAuth } from "firebase/auth";

import {
  listenNotes,
} from "@/services/controllers/notes-controller";

import Styles from "@/styles/global";

import SafeArea from "@/components/safe-area";

import getplusButtonStyle from "@/styles/plus-button";

import getmenuButtonStyle from "@/styles/menu-button";

export default function Home() {

  const navigation = useNavigation();

  const router = useRouter();

  const auth = getAuth();

  const uid = auth.currentUser?.uid;

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    if (!uid) return;

    const unsubscribe =
      listenNotes(uid, setNotes);

    return unsubscribe;

  }, [uid]);

  function renderItem({ item }) {

    return (

      <Pressable style={getNoteButtonStyles} onPress={() => router.push({
            pathname: "/create-note",
            params: {
              id: item.id,
            },
          })
        }
      >

        <Text
          style={Styles.textTitle}
        >
          {item.title || "Sem título"}
        </Text>

        <Text
          numberOfLines={2}
          style={Styles.textSubTitle}
        >
          {item.preview || "Nota vazia"}
        </Text>

      </Pressable>
    );
  }

  return (

    <SafeArea>

      <View style={Styles.container}>

        <Pressable
          style={({ pressed }) =>
            getmenuButtonStyle(pressed)
          }

          onPress={() =>
            navigation.dispatch(
              DrawerActions.openDrawer()
            )
          }
        >
          <Feather
            name="menu"
            size={28}
            color="#000"
          />
        </Pressable>

        {

          notes.length === 0 ? (

            <View style={Styles.content}>

              <Text style={Styles.textTitleHome}>
                Notas
              </Text>

              <Text style={Styles.textSubTitleHome}>
                Você não possui nenhuma anotação,
                crie a sua primeira anotação
                clicando no botão abaixo!
              </Text>

            </View>

          ) : (

            <FlatList

              data={notes}

              keyExtractor={(item) =>
                item.id
              }

              renderItem={renderItem}

              contentContainerStyle={Styles.notesListContent}

              showsVerticalScrollIndicator={
                false
              }
            />

          )
        }

        <Pressable
          style={({ pressed }) =>
            getplusButtonStyle(pressed)
          }

          onPress={() =>
            router.push("/create-note")
          }
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