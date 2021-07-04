import { useDispatch } from 'react-redux';
import { change_checkbox } from '../redux/modules/docsInput';

const useChangeCheckbox = () => {
  const dispatch = useDispatch();

  const onChangeCheckbox = ({ target }) => {
    const { name, checked } = target;
    const { form, key } = target.dataset;
    console.log(form, name, key);
    dispatch(change_checkbox({ checked, form, name, key }));
  };

  return onChangeCheckbox;
};

export default useChangeCheckbox;
