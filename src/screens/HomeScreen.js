import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balance}>Saldo: R$ 2.500,00</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')}>
          <Icon name="history" size={24} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Payment')}>
          <Icon name="payment" size={32} color="#666" />
          <Text style={styles.actionText}>Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="swap-horiz" size={32} color="#666" />
          <Text style={styles.actionText}>Transferir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  balance: { fontSize: 20, fontWeight: 'bold', color: '#444' },
  actions: { flexDirection: 'row', justifyContent: 'space-around' },
  actionButton: { alignItems: 'center' },
  actionText: { marginTop: 8, color: '#666' },
});

export default HomeScreen;