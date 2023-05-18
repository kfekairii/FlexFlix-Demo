import React, {FC, useState} from 'react';
import {basic} from '../../../utils/types';
import {ThemedText} from '../../../components/themed';

import styled, {useTheme} from 'styled-components/native';
import {EmailIcon, PasswordIcon} from '../../../utils/icons';
import {RoundedButton} from '../../../components/RoundedButton';
import SCREENS from '../../../utils/screens';
import AppTextInput from '../../../components/AppTextInput';
import {signup} from '../../../services/auth';

type props = basic & {};
const Register: FC<props> = ({navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await signup(email, password);
      // navigation.navigate(SCREENS.MAIN);
    } catch (err) {
      console.log('🚀 -> file: index.tsx:23 -> handleRegister -> err:', err);
      setLoading(false);
    }
  };

  return (
    <StyledScreen>
      <HeaderContainer>
        <ThemedText fontSize="lg" fontWeight="bold" color="primary">
          Register
        </ThemedText>
        <ThemedText fontSize="sm" mt={12}>
          Register now to track all your movies and tv shows at a place!
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
          text="Register"
          textColor="white"
          mt={48}
          onPress={handleRegister}
          color={email.length < 6 || password.length < 4 ? 'gray' : 'primary'}
          disabled={email.length < 6 || password.length < 4 || loading}
          loading={loading}
        />
      </FormContainer>
      <Divider />
      <RegisterContaner>
        <ThemedText>Already have an account?</ThemedText>
        <RoundedButton
          text="Login"
          link
          textColor="primaryLight"
          onPress={() => {
            navigation.navigate(SCREENS.LOGIN);
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

export default Register;
