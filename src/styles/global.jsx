import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    viewLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
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
    },
    textTitle: {
        fontWeight: "bold", 
        fontSize: 30,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
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
        ontSize: 18,
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
})


export default Styles