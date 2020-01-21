import { SwitchNavigator } from 'react-navigation';
import { AuthStack, DashboardStack, SessionscreenStack } from './stackNavigator';
// import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Signin: AuthStack,
    Dashboard: DashboardStack,
    Sessionscreen: SessionscreenStack,
    // App: Drawer
  },
  {
    initialRouteName: 'Sessionscreen'
  }
);
