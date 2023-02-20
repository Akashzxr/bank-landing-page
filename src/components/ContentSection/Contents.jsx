import React from 'react'
import styled from 'styled-components'
import DigitalBanking from './DigitalBanking'
import WhyEasyBank from './WhyEasyBank'

export default function Contents() {
  return (
    <Container>
      <DigitalBanking/>
      <WhyEasyBank/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`