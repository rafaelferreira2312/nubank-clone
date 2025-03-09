// src/components/TransactionList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { formatCurrency } from '../utils/helpers';

const TransactionList = ({ transactions }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.transactionItem}>
          <View>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
          <Text style={[styles.transactionValue, item.type === 'income' && { color: '#00C853' }]}>
            {item.type === 'income' ? '+' : '-'} {formatCurrency(item.value)}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionTitle: { fontSize: 16, color: '#333' },
  transactionDate: { fontSize: 12, color: '#888', marginTop: 4 },
  transactionValue: { fontSize: 16, fontWeight: 'bold', color: '#E53935' },
});

export default TransactionList;