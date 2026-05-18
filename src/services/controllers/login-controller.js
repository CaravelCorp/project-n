import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { Alert } from "react-native";
import { router } from "expo-router";

export default async function LoginController(email, senha){
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            senha
        );

        console.log(response.user);

        Alert.alert("Sucesso", "Login realizado!");

        router.replace("/layout/home");

        } catch (error) {
        console.log(error);

        Alert.alert(
            "Erro",
            "Email ou senha inválidos."
        );
    }
}