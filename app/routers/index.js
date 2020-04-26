import { SwitchNavigator } from 'react-navigation';
import { AuthStack, DashboardStack, SessionscreenStack, SplashScreenStack, AccountStack } from './stackNavigator';
// import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Signin: AuthStack,
    // Account: AccountStack,
    Dashboard: DashboardStack,
    Sessionscreen: SessionscreenStack,
    SplashScreen: SplashScreenStack
    // App: Drawer
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
