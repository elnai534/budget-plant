import {Text, View, StyleSheet, Image } from 'react-native';

const TopHotbar = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BUDGET PLANT</Text>
            <Image source={require('../../assets/images/cogwheel.png')} style={styles.image}></Image>
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
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
    }
})

export default TopHotbar;