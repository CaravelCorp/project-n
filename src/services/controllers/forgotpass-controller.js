import { sendPasswordResetEmail } from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "@/services/firebase";
import { router } from "expo-router";

 export default async function ForgotPassController(email){
        if (!email.trim()) {
      Alert.alert(
        "Erro",
        "Digite seu email."
      );
      return;
    }

    try {
      await sendPasswordResetEmail(
        auth,
        email.trim()
      );

    Alert.alert(
      "Sucesso",
      "Email de recuperação enviado!",
      [
        {
          text: "OK",
          onPress: () =>
            router.replace("/layout/login"),
        },
      ]
    );
    } catch (error) {
      console.log(error);

      switch (error.code) {

        case "auth/user-not-found":
          Alert.alert(
            "Erro",
            "Nenhuma conta encontrada com esse email."
          );
          break;

        case "auth/invalid-email":
          Alert.alert(
            "Erro",
            "Email inválido."
          );
          break;

        case "auth/too-many-requests":
          Alert.alert(
            "Erro",
            "Muitas tentativas. Tente novamente mais tarde."
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
            "Não foi possível enviar o email."
          );
          break;
      }
    }
 }