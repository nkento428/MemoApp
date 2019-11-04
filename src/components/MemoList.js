import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
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
    );
  }
}
const styles = StyleSheet.create({
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
});

export default MemoList;
