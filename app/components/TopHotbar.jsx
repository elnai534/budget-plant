import {Text, View, StyleSheet, Image } from 'react-native';

const TopHotbar = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/hamburgericon.png')} style={styles.hamburgericon}></Image>
            <Text style={styles.text}>BUDGET PLANT</Text>
            <Image source={require('../../assets/images/cogwheel.png')} style={styles.cogwheel}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginBottom: "auto",
        
    },
    text: {
        fontFamily: "VT323, serif",
        fontSize: 96,
        fontWeight: "strong",
        color: "white",
    },
    cogwheel: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    hamburgericon: {
        width: 50,
        height: 75,
        position: 'absolute',
        top: 15,
        left: 25,
    }
})

export default TopHotbar;