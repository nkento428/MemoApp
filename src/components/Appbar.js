import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTytle}>
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Appbar;
