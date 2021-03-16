import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppWrapper from '../components/common/AppWrapper';
import LoginForm from '../components/login/LoginForm';

const LoginFormContainer = () => {
  const history = useHistory();

  const [state, setState] = useState({
    userId: '',
    userPw: '',
  });
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeValue = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    const { userId, userPw } = state;

    if (!userId.trim()) {
      setErrorVisible(true);
      setErrorMsg('아이디를 입력해주세요.');
      return;
    }

    if (!userPw.trim()) {
      setErrorVisible(true);
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }

    // const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user`, {
    //   userId,
    //   userPw,
    // });
    const res = await axios.post(`http://localhost:3050/api/user`, {
      userId,
      userPw,
    });

    if (res.data.message === 'find fail') {
      setErrorVisible(true);
      setErrorMsg(res.data.error);
      return;
    }

    sessionStorage.setItem('KOSCO_token', res.data.token);

    history.push('/home');
  };
  return (
    <AppWrapper>
      <LoginForm
        history={history}
        errorVisible={errorVisible}
        errorMsg={errorMsg}
        onChangeValue={onChangeValue}
        onSubmit={onSubmit}
        state={state}
      />
    </AppWrapper>
  );
};

export default LoginFormContainer;
