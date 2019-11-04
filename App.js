import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTytle}>MEMO</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTytle}>タイトル</Text>
          <Text style={styles.memoDate}>2019/11/3</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTytle}>タイトル</Text>
          <Text style={styles.memoDate}>2019/11/3</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTytle}>タイトル</Text>
          <Text style={styles.memoDate}>2019/11/3</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTytle}>タイトル</Text>
          <Text style={styles.memoDate}>2019/11/3</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTytle}>タイトル４</Text>
          <Text style={styles.memoDate}>2019/11/3</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTytle}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    height: 80,
    left: 0,
    right: 0,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#265366',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTytle: {
    color: '#fff',
    fontSize: 24,
  },
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTytle: {
    fontSize: 16,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 48,
    height: 48,
    backgroundColor: '#ff768e',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  memoAddButtonTytle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});
