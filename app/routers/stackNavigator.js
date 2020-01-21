import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import Dashboard from '../screens/Dashboard';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import sessionScreen from '../screens/Sessionscreen';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const DashboardStack = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SessionscreenStack = StackNavigator(
  {
    Sessionscreen: {
      screen: sessionScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AuthStack = StackNavigator(
  {
    Signin: {
      screen: Signin,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
