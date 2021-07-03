import styled from 'styled-components';
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
    padding: 45px 30px;
    width: 300px;
    height: 150px;
    z-index: 100;
    background-color: #fff;
  }
  .comment {
    text-align: center;
    margin-bottom: 10px;
    font-size: 18px;
  }
  .button_wrap {
    display: flex;
    justify-content: center;
    > button {
      width: 76px;
      height: 32px;
      margin: 0 15px;
      border-style: none;
      color: #fff;
    }
      .confirm {
        background: #1890ff;
      }
      .cancel {
        background: #ff4d4f;
      }
  }
`;

const FetchModal = ({ form, children, isActive, setFetchModal }) => {
  const postFetch = usePostFetch(form);
  const onClick = ({ target }) => {
    if (target.type === 'button') setFetchModal(false);
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
