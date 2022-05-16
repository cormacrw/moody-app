import React from 'react'
import styled from 'styled-components/native'
import EmotionIcon from '../EmotionIcon'
import {TouchableOpacity} from 'react-native'
import styleConstants from '../../constants/style-constants'

const EmotionPicker = props => (
  <TouchableOpacity onPress={props.onPress} >
    <Container style={{backgroundColor: props.active ? styleConstants.PRIMARY_COLOR : 'white', borderRadius: 10}}>
      <EmotionIcon width={90} emotion={props.emotion} />
      <Label style={{color: props.active ? 'white' : styleConstants.EMOTIONS[props.emotion].PRIMARY}}>{props.emotion}</Label>
    </Container>
  </TouchableOpacity>

)

const Container = styled.View`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const Label = styled.Text`
  text-transform: capitalize;
  font-family: ${styleConstants.FONT_BOLD}
  margin-top: 5px;
  font-size: 18px;
`

export default EmotionPicker