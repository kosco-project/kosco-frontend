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


const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Warning />
      <h1>
        404
      </h1>
      <div className='title'>
        Not Found
      </div>
      <div className='desc'>
        The resource requested could not be found on this server!
      </div>
    </NotFoundWrapper>
    );
};

export default NotFound;
