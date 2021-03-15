import React, { useRef } from 'react';
import styled from 'styled-components';
import OX2TopTableRow from './OX2TopTableRow';
import useLists from '../../../hooks/useLists';

const TopBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 15px;
  width: 100%;
  border: 2px solid #000;

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
        width: 50px;
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
      }
    }
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const OX2Top = () => {
  const datas = [
    'MASKS CHECKED',
    'BREATHING VALVE CHECKED',
    'PRESSURE REGULATOR CHECKED',
    'SUPPLY HOSE CONNECTION CHECKED',
    'OXYGEN INHALER CHECKED',
    'DEVICE WHIT FUNCTION TEST',
    'SERVICE LABEL PUT ON DEVICE',
    'DELETE',
  ];

  const nextId = useRef(5);
  const [onInsert, onRemove, lists] = useLists([
    {
      id: 1,
    },
  ], nextId);
   

  return (
    <>
      <TopBox>
        <div className='left-box'>
          <div className='title'>Description of inspection</div>
          {datas.map((data, i) => (
            <p key={i}>{`${i + 1}. ${data}`}</p>
          ))}
        </div>
        <div className='right-box'>
          <div className='title'>Specification of medical oxygen ;</div>
          <div className='description-box'>
            {lists.map((list, index) => (
              <OX2TopTableRow key={list.id} id={list.id} num={index + 1} onRemove={onRemove} />
            ))}
          </div>
        </div>
      </TopBox>
      <ButtonDiv>
        <button type='button' onClick={onInsert}>
          추가
        </button>
      </ButtonDiv>
    </>
  );
};

export default OX2Top;
