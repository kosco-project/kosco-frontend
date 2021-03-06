import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    width: 100%;
    border: 0;
  }

  > .info-date,
  > .info-certificate,
  > .info-type {
    padding: 5px 5px;

    > p:first-child {
      margin-bottom: 5px;
      font-weight: 900;
    }
  }

  > .info-date,
  > .info-certificate {
    width: 25%;
  }

  > .info-date,
  > .info-type {
    border-right: 1px solid #000;
  }

  > .info-type {
    width: 50%;
  }
`;

const Info = () => {
  const shipNm = JSON.parse(localStorage.getItem('shipNm'));

  return (
    <InfoBox>
      <div className='info-date'>
        <p>Date:</p>
        <input type='text' defaultValue={moment().format('YYYY-MM-DD')} disabled />
      </div>
      <div className='info-type'>
        <p>Type and name of vessel/unit:</p>
        <input type='text' defaultValue={shipNm || ''} disabled />
      </div>
      <div className='info-certificate'>
        <p>Certificate No:</p>
        <input type='text' defaultValue={ JSON.parse(localStorage.getItem('certNo')) } disabled />
      </div>
    </InfoBox>
  );
};

export default Info;
