import { useDispatch } from 'react-redux';
import { change_checkbox } from '../redux/modules/docsInput';

const useChangeCheckbox = () => {
  const dispatch = useDispatch();

  const onChangeCheckbox = ({ target }) => {
    const { form, name, key } = target.dataset;
    dispatch(change_checkbox({ checked: target.checked, form, name, key }));
  };

  return onChangeCheckbox;
};

export default useChangeCheckbox;
