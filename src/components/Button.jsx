import React from 'react'
import styled from 'styled-components'

export default function Button() {
  return (
     <Buttoncontainer>
        Request Invite
     </Buttoncontainer>
  )
}

const Buttoncontainer = styled.button`
  background-image: linear-gradient(to right,#31cf70,#2cb9cb);
  border: none;
  width: 10rem;
  height: 2.6rem;
  border-radius: 21px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`