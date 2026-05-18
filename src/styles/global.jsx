import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
    viewLogin: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
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
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
    },

    headerHome: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        textAlign: "flex-start",
    },

    textButtonW: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold",
    },

    textButtonB: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },

    textInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        marginTop: 15,
        backgroundColor: "#FFF",
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
        textAlign: "center",
    },

    textSubTitle: {
        fontWeight: "500",
        fontSize: 15,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 25,
        color: "#666",
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
        shadowOffset: {
            width: 0,
            height: 5,
        },
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