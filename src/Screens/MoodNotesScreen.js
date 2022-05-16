import React from 'react';
import { TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react';
import styled from 'styled-components/native'
import PrimaryActionButton from '../Components/Buttons/PrimaryActionButton';
import SubHeader from '../Components/Text/SubHeader';
import styleConstants from '../constants/style-constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const NewMoodScreen = props => {

  const [notes, setNotes] = useState('')

  const actionButtonPress = async () => {
    // props.navigation.navigate('Home')
    console.log(notes)
    
  }

  return (
    <ScreenContent>
      <TopContainer>
        <Header>Talk about how you are feeling...</Header>
      </TopContainer>
      <Body>
        <TextInput multiline={true} value={notes} onChangeText={t => setNotes(t)} placeholder="Type here..." style={{paddingBottom: 100}} />
      </Body>
      <Footer>
        <TouchableOpacity onPress={actionButtonPress}>
          <Button>
            <FontAwesome5 name="check" size={32} color="white" />
          </Button>
        </TouchableOpacity>
      </Footer>
    </ScreenContent>
  )
}

const Header = styled.Text`
  font-family: ${styleConstants.FONT_SEMI_BOLD};
  font-size: 18px;
  text-align: center;
  color: white;
`

const TopContainer = styled.View`
  width: 100%;
  height: 150px;
  border-bottom-left-radius: 40px;
  background-color: ${styleConstants.PRIMARY_COLOR};
  justify-content: center;
`

const Body = styled.ScrollView`
  padding: 20px 20px;
`

const ScreenContent = styled.SafeAreaView`
  background-color: white;
  height: 100%;
`

const Button = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${styleConstants.BTN_COLOR_PRIMARY};
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15px;
  bottom: 15px;
  elevation: 5;
`

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

export default NewMoodScreen