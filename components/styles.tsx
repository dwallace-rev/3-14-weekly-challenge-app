import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignContent: "center",
        justifyContent: "center",
    },
    listsPageContainer: {
        flex: .8,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "5%",
    },
    listContainer: {
        flex: 1,
    },
    listView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderColor: "darkgray",
        borderWidth: 2,
        margin: 10,
        marginHorizontal: 15,
        maxHeight: "70%",
    },
    listItemText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        borderTopWidth: 2,
        borderColor: "lightgray"
    },
    addItemButton: {
        alignSelf: "center",
        backgroundColor: "#09F",
        width: "60%",
        marginTop: 5,
        padding: 8
    },
    addItemButtonText: {
        textAlign: "center",
        color: "white",
    },
    addItemTextEntry: {
        borderColor: "lightgray",
        borderWidth: 2,
        marginHorizontal: 15,
        backgroundColor: "white",
        paddingHorizontal: 6,
        fontSize: 16,
    },
    resultsContainer: {
        flex: 0.2,
    },
    resultTextView: {
        flex: 1,
    },
    resultTextFound: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#292",
        marginTop: 10,
    },
    resultTextNotFound: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
        marginTop: 10,
    },
    findIntersectButton: {
        alignSelf: "center",
        backgroundColor: "darkorange",
        width: "50%",
        paddingVertical: 10,
        margin: 5,
    },
    findIntersectButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
    stackView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderColor: "darkgray",
        borderWidth: 2,
        marginHorizontal: "5%",
        maxWidth: "50%",
        height: "70%",
    },
    clearStackButton: {
        flex: 0.1,
        alignSelf: "center",
        backgroundColor: "darkorange",
        justifyContent: "center",
        marginBottom: 5,
        paddingHorizontal: 15
    },
    stackTextInput:{
        borderColor: "lightgray",
        borderWidth: 2,
        marginLeft:15,
        marginTop:"5%",
        backgroundColor: "white",
        paddingLeft: 6,
        fontSize: 16,
    },
    textInputLabel:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:"15%",
        marginLeft:15,
    },
    stackItem:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
    }


})

export default styles;