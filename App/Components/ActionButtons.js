import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { Images, GlobalStyles } from "../Themes";

const screenWidth = Dimensions.get("window").width;

export default ActionButtons = props => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalText, setModalText] = React.useState("");
  return (
    // is there a way to use map to make this cleaner?
    <View style={styles.container}>
      <Modal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        transparent={true}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModalOpen(false)}
            style={styles.modal}
          >
            <Text style={styles.boostedText}>{modalText}</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: props.rewound ? "#fafafa" : "white" }
        ]}
        onPress={props.prev}
        disabled={props.rewound}
      >
        <Image
          source={Images.rewind}
          style={[
            styles.buttonIcon,
            { tintColor: props.rewound ? "#ffe6a8" : null }
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigButton} onPress={props.next}>
        <Image source={Images.nope} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalText("Boosted!");
          setModalOpen(true);
        }}
      >
        <Image source={Images.boost} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigButton} onPress={props.next}>
        <Image source={Images.like} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalText("Super Liked!");
          setModalOpen(true);
        }}
      >
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
  },

  modal: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },

  boostedText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontWeight: "bold"
  }
});
