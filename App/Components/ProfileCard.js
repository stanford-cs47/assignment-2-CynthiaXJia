import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { GlobalStyles } from "../Themes";

const { height, width } = Dimensions.get("window");

export default ProfileCard = props => {
  const { profileImage, name, age, occupation } = props;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={profileImage} style={styles.profilePic} />
      </View>
      <View style={styles.cardLabel}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titleBold}>{name}, </Text>
          <Text style={styles.title}>{age}</Text>
        </View>
        <Text style={styles.subtitle}>{occupation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#C5C5C5",
    backgroundColor: "white",
    borderWidth: 1,
    marginLeft: GlobalStyles.sidePadding,
    marginRight: GlobalStyles.sidePadding,
    height: width - 2 * GlobalStyles.sidePadding + 65,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-between"
  },

  imageContainer: {
    height: width - 2 * GlobalStyles.sidePadding - 2,
    width: width - 2 * GlobalStyles.sidePadding - 2
  },

  profilePic: {
    height: undefined,
    width: undefined,
    flex: 1
  },
  title: {
    fontSize: 24
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: 24
  },
  subtitle: {
    fontSize: 16,
    color: "#C5C5C5"
  },
  cardLabel: {
    padding: 10
  }
});
