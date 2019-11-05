import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontName', fontAwsome);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color, onPress } = this.props;
    let bgColor = '#ff768e';
    let textColor = '#fff';
    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#ff768e';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTytle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  circleButtonTytle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleButton;
