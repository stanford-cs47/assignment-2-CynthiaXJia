import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
import { Images, GlobalStyles } from "../Themes";

const screenWidth = Dimensions.get("window").width;

export default ActionButtons = () => {
  return (
    // is there a way to use map to make this cleaner?
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} underlayColor="black">
        <Image source={Images.rewind} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigButton}>
        <Image source={Images.nope} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={Images.boost} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigButton}>
        <Image source={Images.like} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={Images.superLike} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingRight: GlobalStyles.sidePadding,
    paddingLeft: GlobalStyles.sidePadding,
    height: 50,
    marginBottom: 20
  },

  button: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10
  },

  bigButton: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: 120,
    padding: 12
  },

  buttonIcon: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain"
  }
});
