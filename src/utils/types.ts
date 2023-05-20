import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export type basic = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
};
