import H2AForm from "../../components/doc/H2-A/H2AForm";
import useH2H4 from "../../hooks/useH2H4";
import { addInitialState, changeField, deleteInitialState, storage, changeTextArea } from "../../redux/modules/h2A";

const H2AContainer = () => {
  const { onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists, units } = useH2H4(addInitialState, changeField, deleteInitialState, storage, changeTextArea);

  return (
    <H2AForm onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} onStorage={onStorage} onChangeTextArea={onChangeTextArea} units={units}/>
  )
}

export default H2AContainer;