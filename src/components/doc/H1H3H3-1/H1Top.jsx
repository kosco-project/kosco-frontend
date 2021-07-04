import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H_D1_DATAS, H_INIT } from '../../../docsInitialState/H';
import useChangeD1 from '../../../hooks/useChangeD1';
import { addList } from '../../../redux/modules/docsInput';
import AddButton from '../../common/AddButton';
import H1TopTableRow from './H1TopTableRow';

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
          vertical-align: middle;
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

const H1Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const H_state = H_INIT.D1[0];

  return (
    <>
      {D1 && (
        <>
        <TopBox>
          <div className='left-box'>
            <div className='title'>Description of inspection</div>
            {H_D1_DATAS.map((data, i) => (
              <p key={i}>{`${i + 1}. ${data}`}</p>
            ))}
          </div>
          <div className='right-box'>
            <div className='title'>SPECIFICATION OF SETS BELOWS ;</div>
            <div className='description-box'>
               {Object.entries(D1).map((item, index) => (
                  <H1TopTableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </div>
          </div>
        </TopBox>
        <ButtonDiv>
          <AddButton form="D1" state={H_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default H1Top;
