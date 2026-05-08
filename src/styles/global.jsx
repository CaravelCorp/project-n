import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
    viewLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
    },

    footer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
        paddingBottom: 15,
    },

    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        paddingTop: height * 0.02,      // ~2% da altura da tela
        paddingBottom: height * 0.015,  // ~1.5%
        paddingHorizontal: width * 0.05 // ~5% da largura
    },

    textButtonW: {
        fontSize: 16,
        color: "#FFF",
    },

    textButtonB: {
        fontSize: 16,
        color: "#000",
    },

    textInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        marginTop: 15,
    },

    textForgetPass: {
        color: "#888",
        fontSize: 15,
        margin: 15,
        textAlign: "center",
    },

    textTitle: {
        fontWeight: "bold",
        fontSize: 30,
    },

    textSubTitle: {
        fontWeight: "bold",
        fontSize: 15,
    },

    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },

    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
    },

    iconText: {
        fontSize: 18,
        color: "#000",
    },

    tooltip: {
        position: "absolute",
        top: -45,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
    },

    tooltipText: {
        color: "#fff",
        fontSize: 12,
    },
});

export default Styles;