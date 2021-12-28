/**
 * Reference from: https://docs.expo.dev/tutorial/image/
 */
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logo from "../assets/test.png";

const ImageComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>This is an Image:</Text>
            <Image source={logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    subTitle: {
        fontSize: 20
    }
});
export default ImageComponent;