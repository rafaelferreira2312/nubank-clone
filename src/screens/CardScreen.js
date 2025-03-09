// src/screens/CardScreen.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const CardScreen = () => {
  const [cardActive, setCardActive] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        <Text style={styles.cardHolder}>João Silva</Text>
      </View>
      <View style={styles.settings}>
        <Text style={styles.settingTitle}>Cartão Ativo</Text>
        <Switch
          value={cardActive}
          onValueChange={setCardActive}
          thumbColor="#820ad1"
          trackColor={{ false: '#ccc', true: '#6a1b9a' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: '#820ad1',
    borderRadius: 8,
    padding: 20,
    marginBottom: 24,
  },
  cardNumber: { color: 'white', fontSize: 18, marginBottom: 8 },
  cardHolder: { color: 'white', fontSize: 14 },
  settings: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  settingTitle: { fontSize: 16, color: '#333' },
});

export default CardScreen;