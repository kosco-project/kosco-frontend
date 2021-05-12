import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  > .title {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
  }

  > .info-box {
    margin-bottom: 15px;
    border: 2px solid #000;

    > p {
      padding: 5px;
      border-bottom: 1px solid #000;

      > span {
        font-weight: 900;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

const F2Info = () => {
  return (
    <InfoBox>
      <p className='title'>
        INSPECTION and SERVICE <br />
        CERTIFICATE of
        <br />
        HYDROSTATIC RELEASE UNIT
      </p>
      <div className='info-box'>
        <p>
          <span>Ship's Name </span>: { JSON.parse(localStorage.getItem('shipNm'))} 
        </p>
        <p>
          <span>Certificate No </span>: { JSON.parse(localStorage.getItem('certNo'))} 
        </p>
        <p>
          <span>Inspection Date </span>: { moment().format('YYYY-MM-DD') }
        </p>
      </div>
    </InfoBox>
  );
};

export default F2Info;
