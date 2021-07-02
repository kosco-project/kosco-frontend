import { useDispatch } from 'react-redux';
import { change_D1 } from '../redux/modules/docsInput';

const useChangeD1 = () => {
  const dispatch = useDispatch();

  const onChangeD1 = ({ target }) => {
    const { value, dataset } = target;
    const { form, name, key } = dataset;
    console.log(form, name, key, value);
    dispatch(change_D1({ value, form, name, key }));
  };

  return onChangeD1;
};

export default useChangeD1;
