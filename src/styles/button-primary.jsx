const getButtonPrimaryStyle = (pressed) => ({
  width: "80%",
  backgroundColor: "#000",
  borderRadius: 10,
  padding: 12,
  marginTop: 15,
  alignItems: "center",

  // ANDROID (mais suave)
  elevation: pressed ? 3 : 6,

  // iOS (igual aos ícones)
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: pressed ? 2 : 5,
  },

  // efeito de clique
  transform: [{ translateY: pressed ? 2 : 0 }],
});

export default getButtonPrimaryStyle;