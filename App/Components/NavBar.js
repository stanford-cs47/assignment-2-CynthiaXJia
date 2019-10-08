import React from 'react';
import { Images, GlobalStyles } from '../Themes';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Platform
} from 'react-native';

export default NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.buttonImage} source={Images.settings} />
      </TouchableOpacity>
      <Image style={styles.logo} source={Images.logo} />
      <TouchableOpacity style={styles.button}>
        <Image style={styles.buttonImage} source={Images.chat} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 44 : 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: '#C5C5C5',

    paddingLeft: GlobalStyles.sidePadding,
    paddingRight: GlobalStyles.sidePadding,
    paddingBottom: 15,
    paddingTop: 15
  },

  logo: {
    height: 35,
    width: 150,
    resizeMode: 'contain'
  },

  buttonImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: '#C5C5C5'
  },

  button: {
    height: 35,
    width: 35
  }
});
