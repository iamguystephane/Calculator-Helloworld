import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.display}>{input || "0"}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {["7", "8", "9", "/"].map((item) => (
          <Button key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["4", "5", "6", "*"].map((item) => (
          <Button key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["1", "2", "3", "-"].map((item) => (
          <Button key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["C", "0", "=", "+"].map((item) => (
          <Button key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
    </View>
  );
}

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  display: {
    fontSize: 36,
    color: "white",
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    color: "#ccc",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#333",
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});
