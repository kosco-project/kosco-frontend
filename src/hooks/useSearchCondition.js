import moment from 'moment';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useSearchCondition = () => {
  const history = useHistory();

  const [start, setStart] = useState(
    sessionStorage.getItem('startDate')
      ? moment(sessionStorage.getItem('startDate'))
      : moment().subtract(1, 'M')
  );
  const [end, setEnd] = useState(
    sessionStorage.getItem('endDate')
      ? moment(sessionStorage.getItem('endDate'))
      : moment()
  );
  const [process, setProcess] = useState(1);

  const onChangeDate = (_, [start, end]) => {
    setStart(moment(start));
    setEnd(moment(end));
    history.push(`/inspectionList/${start}/${end}/${process}`);
    sessionStorage.setItem('startDate', start);
    sessionStorage.setItem('endDate', end);
  };

  const onChangeProcess = ({ target }) => {
    setProcess(target.value);
    history.push(
      `/inspectionList/${start.format('YYYY-MM-DD')}/${end.format(
        'YYYY-MM-DD'
      )}/${process}`
    );
  };

  return { start, end, process, onChangeDate, onChangeProcess };
};

export default useSearchCondition;
