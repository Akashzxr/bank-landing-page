import React from 'react'
import styled from 'styled-components'
import currencyimg from '../../assets/images/image-currency.jpg'
import foodimg from '../../assets/images/image-restaurant.jpg'
import flight from '../../assets/images/image-plane.jpg'
import glitter from '../../assets/images/image-confetti.jpg'



export default function Articles() {
  return (
    <Container>
        <Heading>Latest Articles</Heading>
        <ArticleContainer>
            <Article>
                <Image src={currencyimg} />
                <ArticleDetailsConatiner>
                    <Author>by Claire Robinson</Author>
                    <ArticleHeading>
                      Receive money in any
                      currency with no fees
                    </ArticleHeading>
                    <Description>
                    The world is getting smaller and
                    we're becoming more mobile. So
                    why should you be forced to only.
                    receive money in a single ...
                    </Description>
                </ArticleDetailsConatiner>
            </Article>

            <Article>
                <Image src={foodimg} />
                <ArticleDetailsConatiner>
                    <Author>By Wilson Hutton</Author>
                    <ArticleHeading>
                    Treat yourself without
                    worrying about money
                    </ArticleHeading>
                    <Description>
                    - Our simple budgeting feature
                    allows you to separate out your
                    spending and set realistic limits
                    each month, That means you ...
                    </Description>
                </ArticleDetailsConatiner>
            </Article>

            <Article>
                <Image src={flight} />
                <ArticleDetailsConatiner>
                    <Author>By Wilson Hutton</Author>
                    <ArticleHeading>
                     Take your Easybank card
                     wherever you go
                    </ArticleHeading>
                    <Description>
                      We want you to enjoy your travels.
                      Thisis why we don't charge any.
                      fees on purchases while you're
                      abroad. Well even show you...
                    </Description>
                </ArticleDetailsConatiner>
            </Article>

            <Article>
                <Image src={glitter} />
                <ArticleDetailsConatiner>
                    <Author>By Clire Robinson</Author>
                    <ArticleHeading>
                      Our invite-only Beta
                      accounts are now live!
                    </ArticleHeading>
                    <Description>
                      After alot of hard work by the
                      whole team, we're excited to launch
                      our closed beta. It's easy to request
                      an invite through the site .
                    </Description>
                </ArticleDetailsConatiner>
            </Article>
            
        </ArticleContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 4rem;
  padding-left: 9rem;
  padding-top: 2rem;
  @media (max-width: 600px){
    padding: 0;
    align-items: center;
  }
`

const Heading = styled.h1`
  font-weight: 100;
`

const ArticleContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px){
    flex-direction: column;
  }
`

const Article = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

const Image = styled.img`
  aspect-ratio: 3/2;
`

const Author = styled.h1`
  font-size: 12px;
  color: #a7a6ab;
  font-weight: 100;
`

const ArticleHeading = styled.h1`
  font-size: 18px;
  font-weight: 100;
  word-break: break-word;
  white-space: break-spaces;
  &:hover{
    color: #31cf71;
  }
`

const Description = styled.p`
  color: #a7a6ab;
  font-weight: 200;
  font-size: 15px;
`

const ArticleDetailsConatiner = styled.div`
  padding: 19px;
`