import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
        padding: 30,
    },
    formu: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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

    input: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
        fontSize: 18,
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
        backgroundColor: '#8D31E1',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 84,
        marginTop: 35,
    },

    textButtonLogin: {
        fontSize: 20,
        color: '#fff',
    },

    ButtonSignin: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        backgroundColor: '#fff',
        padding: 5,
        paddingLeft: 15,
    },

    textButtonSignin: {
        fontSize: 15,
        color: '#000',
        paddingTop: 20,
        textDecorationLine: 'underline',
        marginLeft: 10,
        
    },

    txtEmail: {
        paddingTop: 20,
        paddingLeft: 20,
        width: '95%',
    },

    txtName: {
        marginTop: 29,
        paddingTop: 20,
        paddingBottom: 18,
        paddingLeft: 20,
        width: '95%',
    },

    txtPwrdArea: {
        flexDirection: 'row',
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
        marginBottom: 20,
        marginTop: 5,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        padding: 10,
        fontSize: 15,
        color: "#8D31E1"
    },

});

export default styles