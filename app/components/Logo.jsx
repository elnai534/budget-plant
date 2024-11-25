import {Text, View, StyleSheet } from 'react-native';

const Logo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BUDGET PLANT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "auto",
        alignItems: "center",
        marginBottom: "auto",
    },
    text: {
        fontFamily: "VT323, serif",
        fontSize: 96,
        fontWeight: "strong",
        color: "white",
    }

})

export default Logo;