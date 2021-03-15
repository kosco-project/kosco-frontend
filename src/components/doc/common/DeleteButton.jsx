import styled from 'styled-components';
import { GoX } from 'react-icons/go'; 


const DeleteButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 100%;
`;

const DeleteButton = () => {
  return (
    <DeleteButtonStyle type="button">
    <GoX fill="#e92a2a" size="18px"/>
    </DeleteButtonStyle>
  )
  
}

export default DeleteButton;
