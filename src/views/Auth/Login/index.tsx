import React, {FC, useState} from 'react';
import {basic} from '../../../utils/types';
import {ThemedText} from '../../../components/themed';

import styled, {useTheme} from 'styled-components/native';
import {EmailIcon, PasswordIcon} from '../../../utils/icons';
import {RoundedButton} from '../../../components/RoundedButton';
import SCREENS from '../../../utils/screens';
import AppTextInput from '../../../components/AppTextInput';
import {signin} from '../../../services/auth';
import useSnackbar from '../../../hooks/useSnackbar';

type props = basic & {};
const Login: FC<props> = ({navigation}) => {
  const theme = useTheme();
  const {showError} = useSnackbar();
  // DATA
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signin(email, password);
      // setLoading(false);
      // navigation.navigate(SCREENS.MAIN);
    } catch (err: any) {
      showError(err.message);
      setLoading(false);
    }
  };

  return (
    <StyledScreen>
      <HeaderContainer>
        <ThemedText fontSize="lg" fontWeight="bold" color="primary">
          Login
        </ThemedText>
        <ThemedText fontSize="sm" mt={12}>
          Login now to track all your movies and tv shows at a place!
        </ThemedText>
      </HeaderContainer>
      <FormContainer>
        <AppTextInput
          lable="Email"
          placeholder="Ex: abc@example.com"
          leftIcon={
            <EmailIcon width={20} height={20} color={theme.colors.primary} />
          }
          onChangeText={value => {
            setEmail(value);
          }}
          value={email}
        />
        <AppTextInput
          lable="Password"
          placeholder="*****"
          leftIcon={
            <PasswordIcon width={20} height={20} color={theme.colors.primary} />
          }
          secureTextEntry
          onChangeText={value => {
            setPassword(value);
          }}
          value={password}
        />
        <RoundedButton
          text="Login"
          textColor="white"
          mt={48}
          onPress={handleLogin}
          color={
            email.length < 6 || password.length < 4 || loading
              ? 'gray'
              : 'primary'
          }
          disabled={email.length < 6 || password.length < 4 || loading}
          loading={loading}
        />
      </FormContainer>
      <Divider />
      <RegisterContaner>
        <ThemedText>Don’t have an account?</ThemedText>
        <RoundedButton
          text="Register"
          link
          textColor="primaryLight"
          onPress={() => {
            navigation.navigate(SCREENS.REGISTER);
          }}
        />
      </RegisterContaner>
    </StyledScreen>
  );
};

const StyledScreen = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

const HeaderContainer = styled.View`
  width: 70%;
`;
const FormContainer = styled.View`
  margin-top: 40px;
`;
const Divider = styled.View`
  border-top-width: 1px;
  width: 100%;
  margin-top: 24px;
`;

const RegisterContaner = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export default Login;
