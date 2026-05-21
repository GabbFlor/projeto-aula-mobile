import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const Style = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center"
    },
    mainScrollView: {
        flex: 1, 
        width: '100%'
    },
    titulo: {
        marginTop: 20
    },
    btnPermission: {
        borderWidth: 1,
        borderStyle: "solid"
    },
    btn: {
        backgroundColor: "#ffffff00",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#00f7ff",
        padding: 5,
        width: 100,
        borderRadius: 2.5,
        marginTop: 15
    },
    btnEnviar: {
        backgroundColor: "#ffffff00",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#00f7ff",
        padding: 5,
        width: 100,
        borderRadius: 2.5,
        marginTop: 15,
        height: 40,
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    btnText: {
        color: "#00f7ff",
        fontSize: 14,
        textAlign: "center"
    },
    camera: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },
    borderCamera: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#8343dd",
    },
    viewCamera: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        gap: 15,
        marginTop: 25,
    },
    viewBtnsCamera: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        // backgroundColor: "red",
        gap: 25
    },
    btnsCamera: {
        color: "#fff",
        fontSize: 35
    },
    btnsCameraActive: {
        color: "#7e7e7e"
    },
    viewForm: {
        width: '100%', 
        marginTop: 30
    },
    viewInput: {
        marginBottom: 15
    },
    formLabel: {
        marginBottom: 5, 
        color: '#fff'
    },
    formInput: {
        borderWidth: 1.5, 
        borderColor: '#8343dd', 
        padding: 12, 
        borderRadius: 5, 
        color: '#fff', 
        backgroundColor: '#ffffff1a'
    }
})

export default Style;