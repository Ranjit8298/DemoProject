import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

/**
 * Stack Navigator types.
 */
export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

/**
 * RootStack all registered screens.
 */
export type Screens = 'LoginScreen' | 'HomeScreen';

/**
 * Generic navigation props interface for all screens.
 */
type ScreensRouteProp = RouteProp<RootStackParamList, Screens>;
type ScreensNavigationProp = StackNavigationProp<RootStackParamList, Screens>;

export interface GenericNavigationProps {
  route?: ScreensRouteProp | undefined;
  navigation: ScreensNavigationProp;
}

export interface GenericNavigationPropOnly {
  navigation: ScreensNavigationProp;
}

export interface GenericRoutePropOnly {
  route: ScreensRouteProp;
}
