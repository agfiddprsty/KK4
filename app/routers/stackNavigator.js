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
import SplashScreen from '../screens/Splashscreen';
import Definition from '../screens/Definition';
import Concept from '../screens/Concept';
import Benefits from '../screens/Benefits';
import Element from '../screens/Element';
import Detail from '../screens/Detail';
import Quiz from '../screens/Quiz';
import Score from '../screens/Score';
import Exam from '../screens/Exam';
import About from '../screens/About';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
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
        tabBarVisible: true
      }
    },
    Definition: {
      screen: Definition,
      navigationOptions: {
        tabBarVisible: true
      },
    },
    Concept: {
      screen: Concept,
      navigationOptions: {
        tabBarVisible: true
      },
    },
    Benefits: {
      screen: Benefits,
      navigationOptions: {
        tabBarVisible: true
      },
    },
    Element: {
      screen: Element,
      navigationOptions: {
        tabBarVisible: true
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        tabBarVisible: true
      },
    },
    Exam: {
      screen: Exam,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Score: {
      screen: Score,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
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
