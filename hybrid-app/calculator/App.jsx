import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handlePress = value => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (e) {
      setOutput('Error');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>
      <TextInput style={styles.input} value={input} editable={false} />
      <Text style={styles.output}>{output}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="/" onPress={() => handlePress('/')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="*" onPress={() => handlePress('*')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="-" onPress={() => handlePress('-')} />
        </View>
        <View style={styles.row}>
          <Button title="C" onPress={handleClear} />
          <Button title="0" onPress={() => handlePress('0')} />
          <Button title="=" onPress={handleCalculate} />
          <Button title="+" onPress={() => handlePress('+')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  output: {
    fontSize: 30,
    marginBottom: 20,
    color: 'blue',
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default Calculator;
