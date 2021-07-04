import styled from 'styled-components';
import { CheckCircleTwoTone } from '@ant-design/icons';

import usePostFetch from '../../hooks/usePostFetch';

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(62, 60, 70, 0.5);

  .save_modal_wrap {
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 200px;
    z-index: 100;
    background-color: #fff;
    border-radius: 5px;
  }
  .comment {
    text-align: center;
    margin-bottom: 10px;
    font-size: 25px;
    padding: 0 20px 20px;
  }
  .button_wrap {
    align-items: stretch;
    > button {
      width: 50%;
      height: 45px;
      border-style: none;
      border-bottom: 5px;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      margin: 0;
    }
    .confirm {
      background: #292f4c;
      border-bottom-left-radius: 5px;
    }
    .cancel {
      background: #f04242;
      border-bottom-right-radius: 5px;
    }
  }
`;

const FetchModal = ({ form, children, isActive, setFetchModal }) => {
  const postFetch = usePostFetch(form);
  const onClick = ({ target }) => {
    if (target.type === 'button' || target.dataset.name === 'close') setFetchModal(false);
    // eslint-disable-next-line no-useless-return
    else return;
  };

  return (
    <>
      {isActive && (<ModalBackground
        data-name="close"
        onClick={onClick}
      >
        <div className="save_modal_wrap">
          <div className="comment">
          <CheckCircleTwoTone
              twoToneColor='#52c41a'
              style={{
                fontSize: 50,
                marginRight: 10,
                verticalAlign: 'middle',
              }}
            />
            {children} 하시겠습니까?
          </div>
          <div className="button_wrap">
            <button type="button" className="confirm" onClick={postFetch}>확인</button>
            <button type="button" className="cancel" onClick={() =>setFetchModal(false)}>취소</button>
          </div>
        </div>
      </ModalBackground>)}
      </>
  );
};

export default FetchModal;

