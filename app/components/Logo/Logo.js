import React from "react";
import { View, Image, ImageBackground, Text, Animated } from "react-native";
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.containerImage}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode="contain"
            style={styles.logo}
            source={require('./images/logo.png')}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
);

export default Logo;
