import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';

require('dotenv').config();

const FormBox = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  width: 500px;

  .ant-input:focus {
    border-color: #363347;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(87,168,233, .2);
    box-shadow: 0 0 0 2px rgba(87,168,233, .2);
  }
  > .img-box {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 250px;

    > img {
      width: 100%;
    }
  }

  > .login-form {
    position: relative;

    > .login-input {
      margin-bottom: 15px;
    }

    > .submit-btn {
      display: block;
      margin: 20px auto 0;
      width: 100px;
      height: 45px;
      border-color: #363347;
      background: #363347;
      font-size: 18px;
      border-style: none;
      color: #fff;
    }

    > .error-message {
      position: absolute;
      bottom: 45px;
      left: 0;
      font-size: 14px;
      font-weight: 900;
      color: #ff2a2a;
    }
  }
`;

const LoginForm = ({errorVisible, errorMsg, onChangeValue, onSubmit, state}) => {

  return (
    <FormBox>
      {/* 로고 이미지 */}
      <h1 className='a11y-hidden'>KOSCO</h1>
      <div className='img-box'>
        <img src={`${process.env.REACT_APP_SERVER_URL}/img/login-logo.png`} alt='kosco 로고' />
      </div>

      {/* 로그인 폼 */}
      <h2 className='a11y-hidden'>로그인</h2>
      <form className='login-form'>
        <label htmlFor='userId' className='a11y-hidden'>
          아이디
        </label>
        <Input
          size='large'
          id='userId'
          className='login-input'
          name='userId'
          placeholder='아이디'
          prefix={<UserOutlined />}
          autoComplete='off'
          onChange={onChangeValue}
          onPressEnter={onSubmit}
          value={state.userId}
        />
        <label htmlFor='userPw' className='a11y-hidden'>
          비밀번호
        </label>
        <Input.Password
          size='large'
          id='userPw'
          className='login-input'
          name='userPw'
          placeholder='비밀번호'
          prefix={<KeyOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={onChangeValue}
          onPressEnter={onSubmit}
          value={state.userPw}
        />
        {errorVisible && <p className='error-message'>{errorMsg}</p>}
        <Button className='submit-btn' type='primary' onClick={onSubmit}>
          로그인
        </Button>
      </form>
    </FormBox>
  );
};

export default LoginForm;
