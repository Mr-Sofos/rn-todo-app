import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const pressHandler = () => {
    if (!text.trim()) {
      Alert.alert("Error,\nPlease enter text");
    }
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <Button title='Add' onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: "80%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});