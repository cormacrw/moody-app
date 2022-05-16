import React from 'react';
import {SafeAreaView, Text} from 'react-native'
import styled from 'styled-components/native'
import PrimaryActionButton from '../Components/Buttons/PrimaryActionButton';
import EmotionIcon from '../Components/EmotionIcon';
import SubHeader from '../Components/Text/SubHeader';
import styleConstants from '../constants/style-constants';


const HomeScreen = props => {
  
  const actionButtonPress = () => {
    props.navigation.navigate('NewMood')
  }

  return (
    <ScreenContent>
      <TopContainer>
        <LogoText>MoodVault</LogoText>
      </TopContainer>
      <ListContainer>
        <SubHeader>Previous Moods</SubHeader>
      </ListContainer>
      <PrimaryActionButton text="New Mood" onPress={actionButtonPress} />
    </ScreenContent>
  )
}

const TopContainer = styled.View`
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 40px;
  background-color: ${styleConstants.PRIMARY_COLOR};
`

const LogoText = styled.Text`
  font-family: ${styleConstants.FONT_EXTRA_BOLD};
  font-size: 16px;
  color: white;
  text-align: center;
  margin-top: 10px;
`

const ListContainer = styled.ScrollView`
  padding: 20px 20px;
`

const ScreenContent = styled.SafeAreaView`
  background-color: white;
  height: 100%;
`

export default HomeScreen