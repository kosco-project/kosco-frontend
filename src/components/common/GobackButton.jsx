import styled from 'styled-components';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

const Button = styled.button`
  background-color: #605c72;
  margin-top: 30px !important;
  width: 100px;
    height: 45px;
    font-size: 18px;
    border-style: none;
    color: #fff;
`;

const BackIcon = styled(RiArrowGoBackLine)`
  font-weight: 700;
  line-height: 18px;
  vertical-align: bottom;
  margin-right: 5px;
`;

const GobackButton = () => {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  }

  return (
    <Button type='button' onClick={onClick}><BackIcon />뒤로</Button>
  );
};

export default GobackButton;