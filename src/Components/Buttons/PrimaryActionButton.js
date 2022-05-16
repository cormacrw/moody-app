import React from 'react'
import styled from 'styled-components/native'
import styleConstants from '../../constants/style-constants'
import {TouchableOpacity} from 'react-native'

const PrimaryActionButton = props => (
  <BtnContainer>
    <TouchableOpacity {...props}>
      <Btn>
        <BtnText>{props.text}</BtnText>
      </Btn>
    </TouchableOpacity>
  </BtnContainer>
)

const BtnContainer = styled.View`
  padding: 0 20px;
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
`

const Btn = styled.View`
  width: 100%;
  background-color: ${styleConstants.PRIMARY_COLOR}
  height: 50px;
  border-radius: 25px;
  align-content: center;
  justify-content: center;
  elevation: 20;
`

const BtnText = styled.Text`
  text-align: center;
  font-family: ${styleConstants.FONT_BOLD}
  color: white;
  font-size: 18px;
`

export default PrimaryActionButton