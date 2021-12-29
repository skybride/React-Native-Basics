/**Findings:
 * Adding StatusBar Component changes spacing
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './BasicComponents/ButtonComponent';
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
      <View style={styles.separator} />
      <View>
        <ImageComponent />
      </View>
      <View style={styles.separator}></View>
      <View>
        <TextInputComponent />
      </View>
      <View style={styles.separator} />
      <View>
        <ButtonComponent />
      </View>
      <View style={styles.separator} />
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
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    // borderBottomWidth: StyleSheet.hairlineWidth
    borderBottomWidth: 2
  }
});