// src/services/auth.js
export const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@nubank.com' && password === '123456') {
          resolve({ token: 'fake-jwt-token', user: { name: 'João Silva' } });
        } else {
          reject('Credenciais inválidas');
        }
      }, 1000);
    });
  };