import React from 'react'
import { Container } from './ErrorPage.styles'
import img from '../../assets/errorImg.png'
import { ButtonFill } from '../../styles/styles'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <img src={img} alt='pageNotFound' />
      </div>
      <div className='error__text'>
        <h1>404</h1>
        <div>에러가 발견되었습니다.</div>
        <ButtonFill 
          onClick={() => navigate('/')}>
          </ButtonFill>
      </div>
    </Container>
    )
}

export default ErrorPage