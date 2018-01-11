import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity 
          onPress={onPress}
          style={styles.button}>
            <Image
              resizeMode='contain'
              style={styles.icon}
              source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>
);

Header.prototypes = {
    onPress: PropTypes.func,
}

export default Header;