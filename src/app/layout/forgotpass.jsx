import { Text, View, TextInput, Pressable } from "react-native";
import getButtonPrimaryStyle from "@/styles/button-primary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("email");

  return (
    <SafeArea>
      <View style={Styles.viewLogin}>   

        <Text style={Styles.textTitle}>
          Encontre sua conta
        </Text>

        <Text style={Styles.textSubTitle}>
          {mode === "email"
            ? "Insira o email da sua conta."
            : "Insira seu nome de usuário."}
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={mode === "email" ? "Email" : "Nome de usuário"}
          placeholderTextColor="#888"
          style={Styles.textInput}
        />

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => getButtonPrimaryStyle(pressed)}
        >
          <Text style={Styles.textButtonW}>
            Continuar
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            setMode(mode === "email" ? "username" : "email")
          }
        >
          <Text style={Styles.textForgetPass}>
            {mode === "email"
              ? "Encontrar pelo nome de usuário"
              : "Encontrar pelo email"}
          </Text>
        </Pressable>

      </View>
    </SafeArea>
  );
}