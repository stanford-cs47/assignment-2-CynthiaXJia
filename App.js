import React from 'react';
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
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import NavBar from './App/Components/NavBar';
import ProfileCard from './App/Components/ProfileCard';
import ActionButtons from './App/Components/ActionButtons';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor() {
    super();

    var profile = Profiles.harold;
    this.state = {
      profile: profile,
      lastProfile: profile,
      rewound: true
    };
    this.nextProfile = this.nextProfile.bind(this);
    this.prevProfile = this.prevProfile.bind(this);
  }

  nextProfile() {
    this.setState({
      lastProfile: this.state.profile,
      profile: Profiles.random(),
      rewound: false
    });
  }

  prevProfile() {
    this.setState({ profile: this.state.lastProfile, rewound: true });
  }

  render() {
    return (
      <SafeAreaView style={styles.base}>
        <NavBar />
        <ProfileCard
          profileImage={this.state.profile.image}
          name={this.state.profile.name}
          age={this.state.profile.age}
          occupation={this.state.profile.occupation}
        />
        <ActionButtons
          next={this.nextProfile}
          prev={this.prevProfile}
          rewound={this.state.rewound}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#ebeef5',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
