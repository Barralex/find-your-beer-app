import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  self: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

const FullScreenLoading = () => {
  const isLoading = useSelector(({ loading }) => loading.running);
  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.self}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

export default FullScreenLoading;
