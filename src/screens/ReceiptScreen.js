import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import RNPrint from 'react-native-print';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ReceiptScreen = ({ route }) => {
  const { transaction } = route.params;

  const printPDF = async () => {
    const html = `
      <h1>Comprovante de Pagamento</h1>
      <p>Valor: R$ ${transaction.amount}</p>
      <p>Código: ${transaction.barcode}</p>
      <p>Data: ${new Date().toLocaleDateString()}</p>
    `;

    const { filePath } = await RNHTMLtoPDF.convert({ html });
    await RNPrint.print({ filePath });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprovante</Text>
      <Text>Valor: R$ {transaction.amount}</Text>
      <Text>Código: {transaction.barcode}</Text>
      <Button title="Imprimir" onPress={printPDF} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default ReceiptScreen;