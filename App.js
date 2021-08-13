import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'green',
    padding: 16,
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  }
 
});