import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "@/services/firebase";
import { router } from "expo-router";

export default async function RegisterController(
  usuario,
  email,
  senha,
  confsenha
) {

  if (
    !usuario.trim() ||
    !email.trim() ||
    !senha.trim() ||
    !confsenha.trim()
  ) {
    Alert.alert(
      "Erro",
      "Preencha todos os campos."
    );
    return;
  }

  if (senha !== confsenha) {
    Alert.alert(
      "Erro",
      "As senhas não coincidem."
    );
    return;
  }

  if (senha.length < 8) {
    Alert.alert(
      "Erro",
      "A senha deve ter no mínimo 8 caracteres."
    );
    return;
  }

  try {

    await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      senha
    );

    Alert.alert(
      "Sucesso",
      "Usuário cadastrado com sucesso!",
      [
        {
          text: "OK",
          onPress: () =>
            router.replace("/login"),
        },
      ]
    );

  } catch (error) {

    console.log(error);

    switch (error.code) {

      case "auth/email-already-in-use":
        Alert.alert(
          "Erro",
          "Esse email já está em uso."
        );
        break;

      case "auth/invalid-email":
        Alert.alert(
          "Erro",
          "Email inválido."
        );
        break;

      case "auth/weak-password":
        Alert.alert(
          "Erro",
          "A senha é muito fraca."
        );
        break;

      case "auth/network-request-failed":
        Alert.alert(
          "Erro",
          "Sem conexão com a internet."
        );
        break;

      default:
        Alert.alert(
          "Erro",
          "Não foi possível cadastrar o usuário."
        );
        break;
    }
  }
}