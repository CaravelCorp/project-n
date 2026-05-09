import Logo from "@/assets/svg/Logo.svg";
import { Text, View, TextInput, Pressable, Linking, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import getButtonPrimaryStyle from "@/styles/button-primary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";
import { useState } from "react";
import { useRouter } from "expo-router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  const openInstagram = async () => {
    const appUrl = "https://www.instagram.com/arcan_studio_tattoo/";
    const webUrl = "https://www.instagram.com/arcan_studio_tattoo/";

    const canOpen = await Linking.canOpenURL(appUrl);

    if (canOpen) {
      await Linking.openURL(appUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        usuario,
        senha
      );

      console.log(response.user);

      Alert.alert("Sucesso", "Login realizado!");

      router.replace("@/layout/home");

    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Email ou senha inválidos."
      );
    }
  };

  return (
    <SafeArea>
      <View style={Styles.viewLogin}>
        <Logo width={100} height={100} />

        <Text style={Styles.textTitle}>
          DotNotes
        </Text>

        <Text style={Styles.textForgetPass}>
          Aplicativo de Anotações
        </Text>

        <TextInput
          value={usuario}
          onChangeText={setUsuario}
          placeholder="Email"
          placeholderTextColor="#888"
          style={Styles.textInput}
          autoCapitalize="none"
        />

        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          style={Styles.textInput}
        />

        <Pressable
          onPress={login}
          style={({ pressed }) => getButtonPrimaryStyle(pressed)}
        >
          <Text style={Styles.textButtonW}>
            Entrar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/layout/register")}
          style={({ pressed }) => getButtonPrimaryStyle(pressed)}
        >
          <Text style={Styles.textButtonW}>
            Registrar
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push("/layout/forgotpass")}>
          <Text style={Styles.textForgetPass}>
            Esqueci minha senha
          </Text>
        </Pressable>

      </View>

      <View style={Styles.footer}>
        <View style={Styles.wrapper}>
          <Pressable onPress={openInstagram}>
            <FontAwesome
              name="instagram"
              size={28}
              color="#E4405F"
            />
          </Pressable>
        </View>

        <Text style={Styles.textForgetPass}>
          Copyright © 2026 CaravelCorp.
        </Text>
      </View>

    </SafeArea>
  );
}