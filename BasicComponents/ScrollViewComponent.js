/**
 * ScrollView renders all its react children at once.
 * Make sure ALL parent Views have bounded height,
 * Setting height of the View directly is discouraged.
 * 
 * FlatList renders items lazily, when they are about to appear
 * then removes items that scroll way off screen
 * saving memory and processing time.
 */
import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const ScrollViewComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        marginHorizontal: 150
    },
    text: {
        fontSize: 30
    }
});

export default ScrollViewComponent;