import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

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
        placeholder='Please enter text'
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <AntDesign.Button onPress={pressHandler} name='pluscircleo'>
        Add
      </AntDesign.Button>
      {/* <Button title='Add' onPress={pressHandler} /> */}
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
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
