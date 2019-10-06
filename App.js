import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Platform
} from "react-native";
import { Images, Profiles } from "./App/Themes";
import NavBar from "./App/Components/NavBar";
import ProfileCard from "./App/Components/ProfileCard";
import ActionButtons from "./App/Components/ActionButtons";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.base}>
        <NavBar />
        <ProfileCard
          profileImage={this.state.profileImage}
          name={this.state.name}
          age={this.state.age}
          occupation={this.state.occupation}
        />
        <ActionButtons />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#edf0f5",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
