import React from 'react'
import styled from 'styled-components'
import onlinebanking from '../../assets/images/icon-online.svg'
import simplebudgeting from '../../assets/images/icon-budgeting.svg'
import fastonboarding from '../../assets/images/icon-onboarding.svg'
import openapi from '../../assets/images/icon-api.svg'


export default function WhyEasyBank() {
  return (
    <Container>
       <TextContainer>
          <Heading>Why choose Easybank?</Heading>
          <Paragraph>
             we leverage Open Banking to turn your bank account into your financial hub.
             Control your finances like never before.
          </Paragraph>
       </TextContainer>

       <FeatureContainer>
          <Feature>
            <Image src={onlinebanking} />
            <FeatureHeading>Online Banking</FeatureHeading>
            <FeatureDiscription>
                Our modern web and mobile
                applications allow you to keep
                track of your finances wherever you are in the world.
            </FeatureDiscription>
          </Feature>
          
          <Feature>
            <Image src={simplebudgeting} />
            <FeatureHeading>Simple Budgeting</FeatureHeading>
            <FeatureDiscription>
                See exactly where your money
                goes each month.Receive
                notifications when you're close to hitting your limits.
            </FeatureDiscription>
          </Feature>

          <Feature>
            <Image src={fastonboarding} />
            <FeatureHeading>Fast Onboarding</FeatureHeading>
            <FeatureDiscription>
                We don't do branches.Open your
                account in minutes online and start taking
                control of your finances right away.
            </FeatureDiscription>
          </Feature>

          <Feature>
            <Image src={openapi} />
            <FeatureHeading>Open API</FeatureHeading>
            <FeatureDiscription>
                Manange your savings,investments,
                pension, and much more from one account.
                Tracking your money has never been easier
            </FeatureDiscription>
          </Feature>
  
       </FeatureContainer>

    </Container>
  )
}

const Container = styled.div`
  background-color: #f4f5f7;
  position: relative;
  z-index: -2;
  padding: 7% 7% 7% 13%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`

const TextContainer = styled.div`
   @media (max-width: 600px){
     display: flex;
     flex-direction: column;
   }
`

const Heading = styled.h1`
  font-weight: 100;
  @media (max-width: 600px){
    text-align: center;
  }
`

const Paragraph = styled.p`
  white-space: nowrap;
  color: gray;
  font-size: 1.1rem;
  line-height: 1.5;
  @media (max-width: 600px){
    white-space: break-spaces;
    text-align: center;
  }
`

const FeatureContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px){
    flex-direction: column;
  }
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  @media (max-width: 600px){
    align-items: center;
  }
`

const Image = styled.img`

`

const FeatureHeading = styled.h2`
  font-weight: 100;
  font-size: 1.5rem;
  margin: 0;
`

const FeatureDiscription = styled.p`
  color: gray;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 600px){
    text-align: center;
  }
`