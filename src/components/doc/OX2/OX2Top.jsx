import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { OX2_D1_DATAS, OX2_INIT } from '../../../docsInitialState/OX2';
import AddButton from '../../common/AddButton';
import OX2TopTableRow from './OX2TopTableRow';

const TopBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #000;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    border-bottom: 1px solid #000;
  }

  > .left-box {
    width: 50%;
    border-right: 1px solid #000;

    > .title {
      height: 80px;
    }

    > p {
      display: flex;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      font-size: 14px;
    }

    > p:not(:last-child) {
      border-bottom: 1px solid #000;
    }
  }

  > .right-box {
    width: 50%;
    vertical-align: top;

    > .title {
      height: 30px;
    }

    > .description-box {
      overflow: auto;
      display: flex;
      flex-flow: row nowrap;
      height: calc(100% - 30px);

      > div {
        width: 12.5%;
        border-right: 1px solid #000;
        flex-shrink: 0;

        > .title {
          padding: 0 5px;
          height: 50px;
          text-align: center;

          input {
            border: 1px solid #000;
          }
        }

        > .description {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;

          > input {
            width: 40%;
            height: 40%;
          }
        }

        > .description:not(:last-child) {
          border-bottom: 1px solid #000;
        }
        > .description:last-child {
          cursor: pointer;
        }
      }
    }
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const OX2Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);
  
  const OX2_state = OX2_INIT.D1[0];

  return (
    <>
      {D1 && (
        <>
        <TopBox>
          <div className='left-box'>
            <div className='title'>Description of inspection</div>
            {OX2_D1_DATAS.map((data, i) => (
              <p key={i}>{`${i + 1}. ${data}`}</p>
            ))}
          </div>
          <div className='right-box'>
            <div className='title'>Specification of medical oxygen ;</div>
            <div className='description-box'>
               {Object.entries(D1).map((item, index) => (
                <OX2TopTableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </div>
          </div>
        </TopBox>
          <ButtonDiv>
            <AddButton form="D1" state={OX2_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default OX2Top;
