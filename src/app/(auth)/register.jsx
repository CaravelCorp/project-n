import Logo from "@/assets/svg/Logo.svg";
import { useState } from "react";
import { useRouter } from "expo-router";
import RegisterController from "@/services/controllers/register-controller";

import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/services/firebase";

import getButtonPrimaryStyle from "@/styles/button-primary";
import getButtonSecondaryStyle from "@/styles/button-secodary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

export default function Register() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfSenha] = useState("");

  const router = useRouter();

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        keyboardVerticalOffset={0}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={{ flex: 1 }}>

            <View style={Styles.viewLogin}>
              <Logo width={100} height={100} />

              <Text style={Styles.textTitleB}>
                DotNotes
              </Text>

              <Text style={Styles.textForgetPass}>
                Aplicativo de Anotações
              </Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
                style={Styles.textInput}
              />

              <TextInput
                value={usuario}
                onChangeText={setUsuario}
                placeholder="Usuário"
                placeholderTextColor="#888"
                autoCapitalize="none"
                style={Styles.textInput}
              />

              <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                placeholderTextColor="#888"
                secureTextEntry
                style={Styles.textInput}
              />

              <TextInput
                value={confsenha}
                onChangeText={setConfSenha}
                placeholder="Confirmar Senha"
                placeholderTextColor="#888"
                secureTextEntry
                style={Styles.textInput}
              />

              <Pressable
                onPress={async () => await RegisterController(usuario, email, senha, confsenha)}
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
                  router.back()
                }
                style={({ pressed }) =>
                  getButtonSecondaryStyle(pressed)
                }
              >
                <Text style={Styles.textButtonB}>
                  Voltar
                </Text>
              </Pressable>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View style={Styles.footer}>
        <Text style={Styles.textForgetPass}>
          Copyright © 2026 CaravelCorp.
        </Text>
      </View>

    </SafeArea>
  );
}