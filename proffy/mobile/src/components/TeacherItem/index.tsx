import React from 'react';

import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoritIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles'


function TeacherItem(){
  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source={{ uri: 'https://avatars1.githubusercontent.com/u/25774278?s=460&u=9f3207c7fe6543da8b2985fcdf81fbe35ace0e5f&v=4' }} 
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Bruno Barbosa</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        A Web developer lover, Maybe a Game Developer someday. 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora: {'   '}
          <Text style={styles.priceValue}>R$20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;