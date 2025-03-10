# Nubank Clone 

<p align="center">
  <img src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png" alt="Nubank" width="60" height="60">
</p>

Um clone funcional do aplicativo Nubank desenvolvido em React Native. O projeto inclui funcionalidades como autenticação biométrica, leitura de código de barras, impressão de comprovantes e navegação entre telas. 

![Tela nubank-1](/src/assets/nubank-1.PNG)
![Tela nubank-2](/src/assets/nubank-2.PNG)

## 📋 Índice 

- Funcionalidades Principais 
- Tecnologias Utilizadas 
- Pré-requisitos 
- Instalação 
- Execução 
- Estrutura do Projeto 
- Contribuição 
- Licença 

## 🚀 Funcionalidades Principais 

1. Autenticação do Usuário:  
- Login com e-mail/senha.
- Autenticação biométrica (digital/facial).
        

2. Visão Geral da Conta:  
- Exibição do saldo atual, limite do cartão de crédito e status de faturas.
- Resumo de transações recentes.
        

3. Histórico de Transações:  
    Lista detalhada de transações com filtros por categoria, data e tipo.
        

4. Pagamentos e Transferências:  
    Leitura de código de barras/QR code para pagamentos.
    Agendamento de pagamentos com escolha de data.
        

5. Impressão de Comprovantes:  
    Geração automática de comprovantes após transações.
    Visualização em PDF com dados da transação.
    Compartilhamento via e-mail, WhatsApp ou impressão direta.
        

6. Cartão de Crédito:  
    Acompanhamento do limite disponível e fechamento da fatura.
    Bloqueio/desbloqueio do cartão via app.
        
## 💻 Tecnologias Utilizadas 

- Front-end:  React Native
- Navegação:  React Navigation
- Autenticação Biométrica:  react-native-biometrics
- Leitura de Código de Barras:  expo-camera
- Impressão de PDF:  react-native-html-to-pdf, react-native-print
- Design:  react-native-paper, react-native-vector-icons
- Gestos e Animações:  react-native-gesture-handler, react-native-reanimated

## ⚙️ Pré-requisitos 

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema: 

- Node.js:  Download 
- npm ou Yarn:  Incluído no Node.js ou Yarn 
- Android Studio:  Download  (para Android)
- Xcode:  Download  (para iOS, apenas macOS)
- Expo CLI (opcional):  Documentação 

## 🛠️ Instalação 

1. Clone o Repositório:  
```bash 
git clone https://github.com/seu-usuario/nubank-clone.git
cd nubank-clone
```
 
2. Instale as Dependências:  
```bash bash
 npm install --legacy-peer-deps
 ```
 
Ou, se estiver usando Yarn: 
```bash      
yarn install
```     
3. Configure o Ambiente Android (Opcional):  
- Configure o SDK do Android e adicione ao Path.
- Inicie o emulador via Android Studio.

## ▶️ Execução 
Com Expo  

1. Execute o servidor Expo: 
```bash
npx expo start
```  

2. Abra o app no dispositivo: 
- Use o QR Code com o app Expo Go  no celular.
- Ou pressione a para abrir no emulador Android.
 
3. Sem Expo (React Native CLI)  

- Execute o projeto no Android: 
```bash     
npx react-native run-android
```
 
4. Execute o projeto no iOS (macOS): 
```bash    
npx react-native run-ios
```    
     
## 📂 Estrutura do Projeto
```bash 
nubank-clone/
├── android/          # Configurações específicas do Android
├── ios/              # Configurações específicas do iOS
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── screens/      # Telas principais
│   ├── services/     # Lógica de autenticação e APIs
│   ├── assets/       # Imagens, ícones e fontes
│   ├── navigation/   # Configuração de navegação
│   └── utils/        # Funções auxiliares
├── App.js            # Arquivo principal
├── package.json      # Dependências do projeto
└── README.md         # Documentação do projeto
``` 

## 🤝 Contribuição 

Contribuições são bem-vindas! Para contribuir: 

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).
3. Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
4. Envie para a branch (git push origin feature/nova-funcionalidade).
5. Abra um Pull Request.
        

## 📄 Licença 
Este projeto está sob a licença MIT. Veja o arquivo LICENSE  para mais detalhes. 