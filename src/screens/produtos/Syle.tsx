import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const Style = StyleSheet.create({
    card: {
        padding: spacing.sm,
        backgroundColor: "#ffffff00",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "#8343dd",
    },
    cardImage: {
        margin: spacing.md,
        borderRadius: 8,
        backgroundColor: "#ffffff00"
    },
    cardContent: {
        gap: 10
    },
    pagTitle: {
        paddingBottom: 15
    },
    geralText: {
        color: "#fff"
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    normalText: {
        fontSize: 14,
        textAlign: "justify"
    },
    priceText: {
        fontSize: 14,
        textAlign: "center",
        color: "lime"
    },
    btn: {
        backgroundColor: "#ffffff00",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#00f7ff",
        padding: 5,
        width: 100,
        borderRadius: 2.5,
        margin: "auto",
        marginTop: 15
    },
    btnText: {
        color: "#00f7ff",
        fontSize: 14,
        textAlign: "center"
    },

    modal: {
        padding: spacing.sm,
        backgroundColor: "#36134f",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "#8343dd",
        width: "85%",
        gap: 15,
        borderRadius: 6
    },
    modalImage: {
        width: '100%',
        height: 190,
        borderRadius: spacing.sm,
        marginBottom: spacing.md,
        resizeMode: 'cover',
        marginTop: 35
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    modalNormalText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "justify"
    },
    modalPriceText: {
        fontSize: 16,
        textAlign: "left",
        color: "lime"
    },
    btnFecharModal: {
        position: "absolute",
        right: '2.5%',
        top: '2.5%'
    }
})

export default Style;