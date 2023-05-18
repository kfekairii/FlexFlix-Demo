import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface AppScreenProps {
  statusBarColor?: string;
}

export const AppScreen = styled(SafeAreaView)<AppScreenProps>`
  flex: 1;
  background-color: ${props => props.statusBarColor ?? '#fff'};
`;

interface ThemedTextProps {
  fontWeight?: 'bold' | 'semibold' | 'light';
  fontSize?: 'md' | 'lg' | 'xs' | 'sm';
  color?:
    | 'primary'
    | 'primaryLight'
    | 'primaryLighter'
    | 'tint'
    | 'lightGray'
    | 'white';
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  center?: boolean;
}
export const ThemedText = styled.Text<ThemedTextProps>`
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'primaryLight':
        return props.theme.colors.primaryLight;
      case 'primaryLighter':
        return props.theme.colors.primaryLighter;
      case 'tint':
        return props.theme.colors.textTint;
      case 'lightGray':
        return props.theme.colors.lightGray;
      case 'white':
        return '#fff';
      default:
        return props.theme.colors.text;
    }
  }};
  font-family: ${props => {
    switch (props.fontWeight) {
      case 'bold':
        return 'Roboto-Bold';
      case 'semibold':
        return 'Roboto-Medium';
      case 'light':
        return 'Roboto-Light';

      default:
        return 'Roboto-Regular';
    }
  }};

  font-size: ${props => {
    switch (props.fontSize) {
      case 'xs':
        return props.theme.typography.xs;
      case 'sm':
        return props.theme.typography.sm;
      case 'md':
        return props.theme.typography.md;
      case 'lg':
        return props.theme.typography.lg;
      default:
        return 16;
    }
  }}px;
  text-align: ${props => (props.center ? 'center' : 'auto')};
  margin-right: ${props => props.mr ?? 0}px;
  margin-left: ${props => props.ml ?? 0}px;
  margin-top: ${props => props.mt ?? 0}px;
  margin-bottom: ${props => props.mb ?? 0}px;
`;

interface ThemedButtonProps {
  color?: 'primary' | 'gray';
  mb?: number;
  mt?: number;
  link?: boolean;
}
export const ThemedButton = styled.TouchableOpacity<ThemedButtonProps>`
  background-color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'gray':
        return props.theme.colors.gray;
      default:
        return props.theme.colors.background;
    }
  }};
  height: ${props => (props.link ? 'auto' : '56px')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  margin-bottom: ${props => props.mb ?? 0}px;
  margin-top: ${props => props.mt ?? 0}px;
`;
