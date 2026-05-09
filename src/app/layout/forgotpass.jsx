import {
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import ForgotPassController from "@/services/controllers/forgotpass-controller";
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
          onPress={async () => await ForgotPassController(email)}
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