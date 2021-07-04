import React from 'react';
import styled from 'styled-components';
import { WarningOutlined } from '@ant-design/icons';

const NotFoundWrapper = styled.div`
  color: rgb(68, 68, 68);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > h1 {
    color: rgb(68, 68, 68);
    font-size: 150px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  > .title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
  }
`;

const Warning = styled(WarningOutlined)`
  font-size: 100px;
  color: #c62828;
`;


const ErrorPage = () => {
  return (
    <NotFoundWrapper>
      <Warning />
      <h1>
        500
      </h1>
      <div className='title'>
        Try again!
      </div>
      <div className='desc'>
        에러가 계속 발생한다면 담당자에게 연락해주세요
      </div>
    </NotFoundWrapper>
    );
};

export default ErrorPage;
