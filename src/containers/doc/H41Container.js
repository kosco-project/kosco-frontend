import H41Form from "../../components/doc/H4-1/H41Form";
import useH2H4 from "../../hooks/useH2H4";
import { addInitialState, changeField, deleteInitialState, storage, changeTextArea } from "../../redux/modules/h2A";

const H41Container = () => {
  const { onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists } = useH2H4(addInitialState, changeField, deleteInitialState, storage, changeTextArea);

  return (
    <H41Form onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} onStorage={onStorage} onChangeTextArea={onChangeTextArea}/>
  )
}

export default H41Container;