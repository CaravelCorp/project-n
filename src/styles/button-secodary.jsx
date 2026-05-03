const getButtonSecondaryStyle = (pressed) => ({
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius: 10,
  padding: 12,
  marginTop: 15,
  alignItems: "center",

  // ✅ borda preta
  borderWidth: 2,
  borderColor: "#000",

  // ANDROID
  elevation: pressed ? 4 : 12,

  // iOS
  shadowColor: "#000",
  shadowOpacity: 0.25,
  shadowRadius: 6,
  shadowOffset: {
    width: 0,
    height: pressed ? 2 : 6,
  },

  // efeito de clique
  transform: [{ translateY: pressed ? 2 : 0 }],
});

export default getButtonSecondaryStyle;