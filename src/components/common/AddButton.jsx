import { Button } from 'antd/lib/radio';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/modules/docsInput';

const Addbtn = styled.button`
  background-color: #33373f;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const PlusIcon = styled(PlusOutlined)`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #fff;
`;

const AddButton = ({ form, state }) => {
  const dispatch = useDispatch();
  
  return (
    <Addbtn type="button" onClick={() => dispatch(addList({ form, initState: state }))}>
      <PlusIcon />
    </Addbtn>
  )
  
}

export default AddButton;
