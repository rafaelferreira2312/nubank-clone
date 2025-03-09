# Cria a estrutura de pastas
New-Item -ItemType Directory -Path "nubank-clone"
Set-Location "nubank-clone"

# Pastas principais
New-Item -ItemType Directory -Name "android"
New-Item -ItemType Directory -Name "ios"
New-Item -ItemType Directory -Name "src"

# Subpastas dentro de src
$srcFolders = @("components", "screens", "services", "assets", "navigation", "utils")
foreach ($folder in $srcFolders) {
    New-Item -ItemType Directory -Path "src/$folder"
}

# Arquivos principais
New-Item -ItemType File -Path "App.js"
New-Item -ItemType File -Path "package.json"

# Arquivos de exemplo
@"
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './src/navigation/BottomTabs';
import LoginScreen from './src/screens/LoginScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Receipt" component={ReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
"@ | Out-File -FilePath "App.js" -Encoding utf8

@"
{
  "name": "nubank-clone",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "expo": "~48.0.18",
    "expo-camera": "~13.2.1",
    "expo-font": "~11.1.1",
    "expo-status-bar": "~1.4.4",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-biometrics": "^2.1.4",
    "react-native-gesture-handler": "~2.9.0",
    "react-native-html-to-pdf": "^0.12.0",
    "react-native-paper": "^5.9.3",
    "react-native-print": "^0.11.0",
    "react-native-reanimated": "~3.2.0",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-vector-icons": "^10.0.3"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
"@ | Out-File -FilePath "package.json" -Encoding utf8

Write-Host "Estrutura do projeto criada com sucesso!" -ForegroundColor Green