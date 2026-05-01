import Logo from "@/assets/svg/Logo.svg";
import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRef } from "react";

export default function Index() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Logo width={100} height={100} />

      <Text style={{ fontWeight: "bold", fontSize: 30 }}>
        DotNotes
      </Text>

      <Text style={{ color: "#808080", marginBottom: 15, fontSize: 15 }}>
        Aplicativo de Anotações
      </Text>

      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuário"
        placeholderTextColor="#888"
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#888",
          borderRadius: 10,
          padding: 12,
          fontSize: 16,
          marginTop: 15,
        }}
      />

      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        placeholderTextColor="#888"
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#888",
          borderRadius: 10,
          padding: 12,
          fontSize: 16,
          marginTop: 15,
        }}
      />

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => ({
          width: "80%",
          backgroundColor: "#000",
          borderRadius: 10,
          padding: 12,
          marginTop: 15,
          alignItems: "center",

          // sombra (iOS)
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: pressed ? 2 : 6, // muda altura da sombra
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,

          // dois tipos de Sombras, pois: "shadow*" não funciona no Android e "elevation" não funciona no IOS.
          // sombra (Android)
          elevation: pressed ? 2 : 8,

          // efeito de "afundar"
          transform: [
            { translateY: pressed ? 2 : 0 }
          ],
        })}
      >
        <Text style={{ fontSize: 16, color: "#FFF" }}>
          Entrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => ({
          width: "80%",
          backgroundColor: "#000",
          borderRadius: 10,
          padding: 12,
          marginTop: 15,
          alignItems: "center",

          // dois tipos de Sombras, pois: "shadow*" não funciona no Android e "elevation" não funciona no IOS.
          // sombra (iOS)
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: pressed ? 2 : 6, // muda altura da sombra
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,

          // sombra (Android)
          elevation: pressed ? 2 : 8,

          // efeito de "afundar"
          transform: [
            { translateY: pressed ? 2 : 0 }
          ],
        })}
      >
        <Text style={{ fontSize: 16, color: "#FFF" }}>
          Registrar
        </Text>
      </Pressable>

        
      <Pressable
        onPress={() => {}}
        style={{
          marginTop: 15,
        }}
      >
        <Text style={{ color: "#888", fontSize: 15 }}>
          Esqueci minha senha
        </Text>
      </Pressable>
    </View>
  );
}