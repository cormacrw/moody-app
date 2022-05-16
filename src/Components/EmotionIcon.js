import React from 'react'
import styled from 'styled-components/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styleConstants from '../constants/style-constants'


const EmotionIcon = props => (
  <Container style={{width: props.width, height: props.width, backgroundColor: styleConstants.EMOTIONS[props.emotion].PRIMARY, borderRadius: Math.round(props.width * 0.15)}}>
    <FontAwesome5 name={styleConstants.EMOTIONS[props.emotion].ICON} solid size={props.width * 0.6} color={styleConstants.EMOTIONS[props.emotion].SECONDARY} />
  </Container>
)

const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export default EmotionIcon

