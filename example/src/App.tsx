import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { Grid } from '@volkish/react-native-svg-charts';

export default function App() {
  return (
    <View style={styles.container}>
      <Grid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
