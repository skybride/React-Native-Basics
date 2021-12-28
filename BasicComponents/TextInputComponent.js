import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

const TextInputComponent = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Text Input:</Text>
            <TextInput
                style={styles.input}
                placeholder="Search..."/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    subTitle: {
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        margin: 10,
        padding: 10
    }
});
export default TextInputComponent;