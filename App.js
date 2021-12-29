/**Findings:
 * Adding StatusBar Component changes spacing
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageComponent from './BasicComponents/ImageComponent';
import ScrollViewComponent from './BasicComponents/ScrollViewComponent';
import TextInputComponent from './BasicComponents/TextInputComponent';

export default function App() {
  return (
    <View>
      <View style={styles.center}>
        {/* <StatusBar barStyle="dark-content" hidden={false} /> */}
        <Text style={styles.bold}>Basics of React Native</Text>
        
      </View>
      <View>
        <ImageComponent />
      </View>
      <View>
        <TextInputComponent />
      </View>
      <View>
        <ScrollViewComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontSize: 30,
    paddingTop: 40
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
});