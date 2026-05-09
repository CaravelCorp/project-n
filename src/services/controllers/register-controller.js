import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { Alert } from "react-native";

export default async function RegisterController(usuario, email, senha, confsenha){
    if (!email || !usuario || !senha || !confsenha) {
      return {
        success: false,
        error: "Preencha todos os campos."
      };
    }

    if (senha !== confsenha) {
      return {
        success: false,
        error: "As senhas não coincidem."
      };
    }

    if (senha.length < 8) {
      return {
        success: false,
        error: "A senha deve ter no mínimo 8 caracteres."
      };
    }

    try {
      const response =
        await createUserWithEmailAndPassword(
          auth,
          email,
          senha
        );

      return {
        success: true
      };

    } catch (error) {
      console.error(error);

      return {
        success: false,
        error: error.message
      };
    }
}
