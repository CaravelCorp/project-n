import {
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import { useRef, useState } from "react";

import Styles from "@/styles/global";

import SafeArea from "@/components/safe-area";

import getbackButtonStyle from "@/styles/back-button";

import getboldButtonStyle from "@/styles/bold-button";

import getitalicButtonStyle from "@/styles/italic-button";

// RICH TEXT
let RichEditor;
let actions;

if (Platform.OS !== "web") {
  const rich = require(
    "react-native-pell-rich-editor"
  );

  RichEditor = rich.RichEditor;

  actions = rich.actions;
}

export default function CreateNote() {
  const router = useRouter();

  const editor = useRef();

  const [title, setTitle] = useState("");

  const [bold, setBold] = useState(false);

  const [italic, setItalic] = useState(false);

  function handleBold() {
    setBold(!bold);

    editor.current?.sendAction(
      actions.setBold,
      "result"
    );
  }

  function handleItalic() {
    setItalic(!italic);

    editor.current?.sendAction(
      actions.setItalic,
      "result"
    );
  }

  return (
    <SafeArea>
      <View style={Styles.container}>

        {/* VOLTAR */}
        <Pressable
          style={({ pressed }) =>
            getbackButtonStyle(pressed)
          }
          onPress={() => router.back()}
        >
          <Feather
            name="arrow-left"
            size={24}
            color="#000"
          />
        </Pressable>

        {/* TOOLBAR */}
        <View style={Styles.toolbar}>

          {/* BOLD */}
          <Pressable
            style={() =>
              getboldButtonStyle(bold)
            }
            onPress={handleBold}
          >
            <Feather
              name="bold"
              size={20}
              color="#000"
            />
          </Pressable>

          {/* ITALIC */}
          <Pressable
            style={() =>
              getitalicButtonStyle(italic)
            }
            onPress={handleItalic}
          >
            <Feather
              name="italic"
              size={20}
              color="#000"
            />
          </Pressable>

        </View>

        {/* TÍTULO */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Título"
          placeholderTextColor="#999"

          underlineColorAndroid="transparent"
          selectionColor="transparent"
          cursorColor="#000"

          style={Styles.noteTitle}
        />

        {/* EDITOR */}
        {Platform.OS !== "web" && (
          <RichEditor
            ref={editor}

            placeholder="Comece a escrever..."

            androidHardwareAccelerationDisabled

            style={Styles.noteContent}

            editorStyle={{
              backgroundColor: "#FFF",

              color: "#000",

              placeholderCo lor: "#999",

              contentCSSText: `
                font-size: 18px;
                padding: 0;
                outline: none;
              `,
            }}
          />
        )}

      </View>
    </SafeArea>
  );
}