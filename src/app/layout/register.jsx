import Logo from "@/assets/svg/Logo.svg";
import { Text, View, TextInput, Pressable, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import getButtonPrimaryStyle from "@/styles/button-primary";
import getButtonSecondaryStyle from "@/styles/button-secodary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";
import { useState } from "react";
import { useRouter } from "expo-router";

function SocialIcon({ label, color }) {
  const [active, setActive] = useState(false);

  return (
    <Pressable
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      style={[
        Styles.icon,
        active && { backgroundColor: color },
      ]}
    >
      {active && (
        <View style={[Styles.tooltip, { backgroundColor: color }]}>
          <Text style={Styles.tooltipText}>{label}</Text>
        </View>
      )}

      <Text style={[Styles.iconText, active && { color: "#fff" }]}>
        {label[0]}
      </Text>
    </Pressable>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfSenha] = useState("");
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

  return (
  <SafeArea>
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
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#888"
        style={ Styles.textInput }
      />

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
      <TextInput
        value={confsenha}
        onChangeText={setConfSenha}
        placeholder="Confirmar Senha"
        placeholderTextColor="#888"
        style={ Styles.textInput }
      />

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => getButtonPrimaryStyle(pressed)}
      >
        <Text style={ Styles.textButtonW }>
          Registrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/layout/login")}
        style={({ pressed }) => getButtonSecondaryStyle(pressed)}
      >
        <Text style={ Styles.textButtonB }>
          Voltar
        </Text>
      </Pressable>
      <View style={Styles.wrapper}>
      <Pressable onPress={openInstagram}>
        <FontAwesome name="instagram" size={28} color="#E4405F" />
      </Pressable>
      </View>
    </View>
  </SafeArea>
  );
}