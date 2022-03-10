import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../resources/theme";
const { width, height } = Dimensions.get("screen");

const ModalComponent = ({
  header = false,
  title,
  body,
  closeModal,
  modalVisible,
}) => {
  return (
    <View>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <TouchableOpacity onPressOut={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalMain}>
                {header && (
                  <View style={styles.modalHeaderContainer}>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {title}
                    </Text>
                  </View>
                )}
                <View style={styles.modalBody}>
                  <Text style={{ color: "#000", textAlign: "center" }}>
                    {body}
                  </Text>
                </View>
                <View style={styles.ModalbuttonContainer}>
                  <TouchableOpacity
                    style={styles.ModalbuttonBox}
                    onPress={closeModal}
                  >
                    <Text style={{ color: "#000", fontWeight: "bold" }}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  // STYLES FOR MODAL
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  modalMain: {
    width: width / 1.1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  modalHeaderContainer: {
    paddingBottom: 10,
  },
  modalBody: {
    // backgroundColor: COLORS.foitiGrey,
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 5,
  },
  ModalbuttonContainer: {
    paddingTop: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalbuttonBox: {
    // backgroundColor: "#8B8B8B",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
