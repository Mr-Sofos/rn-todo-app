import React, { useState } from "react";
import { View, StyleSheet, TextInput, Modal, Alert } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "../components/ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    const length = title.trim().length;
    if (length < 3) {
      Alert.alert(
        "Ошибка!",
        `Минимальная длина названия 3 символа. Сейчас ${length} символов.`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Введите название'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton
            style={styles.text}
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          >
            Отменить
          </AppButton>
          <AppButton style={styles.text} onPress={saveHandler} color='#190'>
            Сохранить
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
  },
});
