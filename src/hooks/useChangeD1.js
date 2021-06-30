import { useDispatch } from 'react-redux';
import { changeA_D1 } from '../redux/modules/docsInput';

const useChangeD1 = () => {
  const dispatch = useDispatch();

  const onChangeD1 = ({ target }) => {
    const { value, dataset } = target;
    const { form, name } = dataset;

    dispatch(changeA_D1({ value, form, name }));
  };

  return onChangeD1;
};

export default useChangeD1;
