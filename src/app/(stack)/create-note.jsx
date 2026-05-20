import {
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { getAuth } from "firebase/auth";

import {
  createNote,
  updateNote,
  removeEmptyDraft,
} from "@/services/controllers/notes-controller";

let RichEditor;
let actions;

if (Platform.OS !== "web") {

  const rich =
    require(
      "react-native-pell-rich-editor"
    );

  RichEditor = rich.RichEditor;

  actions = rich.actions;
}

import Styles from "@/styles/global";

import SafeArea from "@/components/safe-area";

import getbackButtonStyle from "@/styles/back-button";

import getboldButtonStyle from "@/styles/bold-button";

import getitalicButtonStyle from "@/styles/italic-button";

export default function CreateNote() {

  const router = useRouter();

  const auth = getAuth();

  const uid = auth.currentUser?.uid;

  const editor = useRef();

  const [noteId, setNoteId] = useState(null);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [bold, setBold] = useState(false);

  const [italic, setItalic] = useState(false);

  useEffect(() => {

    async function handleCreateNote() { // handleCreateNote é uma função assíncrona que é chamada quando o componente é montado. Ela verifica se o ID do usuário (uid) está disponível e, em caso afirmativo, chama a função createNote para criar uma nova nota para o usuário. Se a criação for bem-sucedida, o ID da nova nota é armazenado no estado noteId usando setNoteId.

      if (!uid) return;

      const response = await createNote(uid);

      if (response.success) {
        setNoteId(response.noteId);
      }
    }

    handleCreateNote();

  }, []);

  useEffect(() => {

    if (!noteId) return; // Este efeito é responsável por atualizar a nota sempre que o título ou o conteúdo for alterado. Ele verifica se o ID da nota (noteId) está disponível e, em caso afirmativo, define um timer que aguarda 1 segundo após a última alteração no título ou conteúdo antes de chamar a função updateNote para salvar as alterações na nota. Se o usuário fizer outra alteração antes do timer expirar, o timer é reiniciado, garantindo que a nota seja atualizada apenas quando o usuário tiver terminado de digitar.

    const timer = setTimeout(async () => {

      await updateNote(uid, noteId, {
        title,
        content,
      });

    }, 1000);

    return () => clearTimeout(timer);

  }, [title, content]);

  async function handleBack() { // handleBack é uma função assíncrona que é chamada quando o usuário pressiona o botão de voltar. Ela verifica se o ID da nota (noteId) está disponível e, em caso afirmativo, chama a função removeEmptyDraft para verificar se a nota é vazia (sem título e sem conteúdo) e, se for o caso, excluí-la. Após isso, a função router.back() é chamada para navegar de volta para a tela anterior.

    if (noteId) {

      await removeEmptyDraft(
        uid,
        noteId,
        title,
        content
      );
    }

    router.back();
  }


  function handleBold() { // handleBold é uma função que é chamada quando o usuário pressiona o botão de negrito. Ela alterna o estado bold entre verdadeiro e falso usando setBold e, em seguida, chama o método sendAction do editor para aplicar ou remover a formatação de negrito no texto selecionado.

    setBold(!bold);

    editor.current?.sendAction(
      actions.setBold,
      "result"
    );
  }

  function handleItalic() { // handleItalic é uma função que é chamada quando o usuário pressiona o botão de itálico. Ela alterna o estado italic entre verdadeiro e falso usando setItalic e, em seguida, chama o método sendAction do editor para aplicar ou remover a formatação de itálico no texto selecionado.

    setItalic(!italic);

    editor.current?.sendAction(
      actions.setItalic,
      "result"
    );
  }

  return (
    <SafeArea>

      <View style={Styles.container}>

        <Pressable
          style={({ pressed }) =>
            getbackButtonStyle(pressed)
          }
          onPress={handleBack}
        >
          <Feather
            name="arrow-left"
            size={24}
            color="#000"
          />
        </Pressable>

        <View style={Styles.toolbar}>

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

        
        <RichEditor // RichEditor é um componente específico para edição de texto rico, como negrito, itálico, etc. Ele é usado aqui para permitir que o usuário formate o conteúdo da nota.
          ref={editor} // Referência para acessar os métodos do editor

          placeholder="Comece a escrever..."

          androidHardwareAccelerationDisabled // Desativa a aceleração de hardware no Android para evitar problemas de renderização

          style={Styles.noteContent}

          onChange={(text) => // Atualiza o estado do conteúdo sempre que o texto for alterado
            setContent(text) // Define o conteúdo da nota com o texto formatado
          }

          editorStyle={{
            backgroundColor: "#FFF",

            color: "#000",

            placeholderColor: "#999",

            contentCSSText: `
              font-size: 18px;
              padding: 0;
              outline: none;
            `,
          }}
        />

      </View>

    </SafeArea>
  );
}