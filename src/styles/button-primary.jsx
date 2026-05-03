const getButtonPrimaryStyle = (pressed) => ({
  width: "80%",
  backgroundColor: "#000",
  borderRadius: 10,
  padding: 12,
  marginTop: 15,
  alignItems: "center",

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

export default getButtonPrimaryStyle