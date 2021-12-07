import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 30,
        marginTop: 40,
    },
    imageTitle: {
        width: 394,
        height: 220,
        marginTop: 10,
        marginBottom: -40,
        alignSelf: 'center',
    },

    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color:'#000',
        fontSize: 18,
        paddingLeft: 20,
    },

    ButtonLogin: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: '#923de0',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 84,
        marginTop: 35,
    },

    textButtonLogin: {
        fontSize: 20,
        color: '#fff',
    },

    textButtonSignin: {
        textDecorationLine: 'underline',
        
    },
    textSignin: {
        color: '#949494',
    },

    txtEmail: {
        paddingLeft: 20,
        width: '95%',
    },

    txtPwrdArea: {
        width: '90%',
        marginTop: 5,
        paddingTop: 10,
        position: 'relative',
    },

    txtPwrd: {
        paddingTop: 20,
        paddingLeft: 20,
        width: '105%',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: '16%',
        marginTop: 8,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        padding: 7,
        marginLeft: -8,
        fontSize: 15,
        color: "#8D31E1"
    },
    divisor: {
        marginTop: 20,
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 33,
        paddingTop: 20,

    },
    divisorLine: {
        width: '58%',
        height: 2,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },

});

export default styles