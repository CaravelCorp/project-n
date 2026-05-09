import {
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";

import {
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/services/firebase";

import getButtonPrimaryStyle from "@/styles/button-primary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

export default function ForgotPass() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const resetPassword = async () => {
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
  };

  return (
    <SafeArea>

      <View style={Styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={Styles.textTitle}>
            {"<"}
          </Text>
        </Pressable>
      </View>

      <View style={Styles.viewLogin}>

        <Text style={Styles.textTitle}>
          Recuperar senha
        </Text>

        <Text style={Styles.textSubTitle}>
          Insira o email da sua conta.
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
          style={Styles.textInput}
        />

        <Pressable
          onPress={resetPassword}
          style={({ pressed }) => [
            getButtonPrimaryStyle(pressed),
          ]}
        >
          <Text style={Styles.textButtonW}>
            Continuar
          </Text>
        </Pressable>

      </View>
    </SafeArea>
  );
}