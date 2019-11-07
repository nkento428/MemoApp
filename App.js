import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

import ENV from './env.json';

require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  // appId: '1:491462643778:web:cff63573b3de2164885ddb',
  // measurementId: 'G-1GMF9HMXEG',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  MemoList: { screen: MemoListScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MEMO',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
