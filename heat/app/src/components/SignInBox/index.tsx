import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../theme';
import { Button } from '../Button'
import { useAuth } from '../../hooks/auth'

import { styles } from './styles';

export function SignInBox(){
  const { signIn, isSigninIn } = useAuth();

  return (
    <View style={styles.container}>

      <Button
        title='Entrar com GITHUB'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW} 
        icon='github'
        onPress={signIn}
        isLoading={isSigninIn}
      />

    </View>
  );
}