import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>詳細ページ</Text>
            <Text style={styles.memoHeaderDate}>2019/11/4</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            内容
          </Text>
        </View>

        <CircleButton name="pencil" color="white" style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  memoHeaderDate: {
    color: '#fff',
    fontSize: 12,
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
