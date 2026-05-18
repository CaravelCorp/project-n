import Logo from "@/assets/svg/Logo.svg";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Linking,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import getButtonPrimaryStyle from "@/styles/button-primary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

import { useState } from "react";
import { useRouter } from "expo-router";
import LoginController from "@/services/controllers/login-controller";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  const openInstagram = async () => {
    const url = "https://www.instagram.com/arcan_studio_tattoo/";

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  async function handleLogin() {
    const result = await LoginController(email, senha);

    if (result.success) {
      Alert.alert("Sucesso", "Login realizado!");
      router.replace("/home");
    } else {
      Alert.alert("Erro", result.error);
    }
  }

  return (
    <SafeArea>
      <View style={Styles.viewLogin}>
        <Logo width={100} height={100} />

        <Text style={Styles.textTitle}>DotNotes</Text>

        <Text style={Styles.textForgetPass}>
          Aplicativo de Anotações
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
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
          onPress={handleLogin}
          style={({ pressed }) =>
            getButtonPrimaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonW}>
            Entrar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/register")}
          style={({ pressed }) =>
            getButtonPrimaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonW}>
            Registrar
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            router.push("/forgotpass")
          }
        >
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