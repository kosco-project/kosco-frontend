import H4Form from "../../components/doc/H4/H4Form";
import useH2H4 from "../../hooks/useH2H4";
import { addInitialState, changeField, deleteInitialState, storage, changeTextArea } from "../../redux/modules/h2A";

const H4Container = () => {
  const { onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists, units } = useH2H4(addInitialState, changeField, deleteInitialState, storage, changeTextArea);

  return (
    <H4Form onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} onStorage={onStorage} onChangeTextArea={onChangeTextArea} units={units}/>
  )
}

export default H4Container;