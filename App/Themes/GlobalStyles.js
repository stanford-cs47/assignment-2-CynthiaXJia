import React from "react";
import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = {
  sidePadding: width / 20
};

export default styles;
