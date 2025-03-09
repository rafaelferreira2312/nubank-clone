// src/services/api.js
export const getTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Mercado', value: 150.99, date: '10/09/2023', type: 'expense' },
          { id: 2, title: 'Salário', value: 3000, date: '05/09/2023', type: 'income' },
        ]);
      }, 500);
    });
  };