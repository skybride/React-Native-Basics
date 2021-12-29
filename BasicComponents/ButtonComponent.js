import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const ButtonComponent = () => {
    return (
        <View>
            <Button
                title="Works"
                color="#841584"
                accessibilityLabel="Works button"
                onPress={() => Alert.alert('Button pressed!')}
            />
        </View>
    );
}

export default ButtonComponent;