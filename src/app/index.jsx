import Logo from "@/assets/svg/Logo.svg";
import { Text, View, TextInput, Pressable } from "react-native";
import getButtonPrimaryStyle from "@/styles/button-primary";
import Styles from "@/styles/global";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Index() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View
      style={ Styles.viewLogin }
    >
      <Logo width={100} height={100} />

      <Text style={ Styles.textTitle }>
        DotNotes
      </Text>

      <Text style={ Styles.textForgetPass }>
        Aplicativo de Anotações
      </Text>

      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuário"
        placeholderTextColor="#888"
        style={ Styles.textInput }
      />

      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        placeholderTextColor="#888"
        style={ Styles.textInput }
      />

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => getButtonPrimaryStyle(pressed)}
      >
        <Text style={ Styles.textButton }>
          Entrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => getButtonPrimaryStyle(pressed)}
      >
        <Text style={ Styles.textButton }>
          Registrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
      >
        <Text style={ Styles.textForgetPass }>
          Esqueci minha senha
        </Text>
      </Pressable>  
    </View>
  );
}