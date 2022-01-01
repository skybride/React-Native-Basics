/**
 * Switch is equivalent to toggle button
 */
import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <Switch
            trackColor={{
                false: "#757575", // sonic silverr
                true: "#8b0000" //dark red
            }}
            
            thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"} //true = maya blue, fales = Selago
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}

export default SwitchComponent;