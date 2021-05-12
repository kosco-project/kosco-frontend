import axios from 'axios';

const getItemData = async setState => {
  const CERT_NO = JSON.parse(localStorage.getItem('certNo'));
  const RCVNO = JSON.parse(localStorage.getItem('rcvNo'));
  const VESSELNM = JSON.parse(localStorage.getItem('shipNm'));

  if (!CERT_NO) return;

  const params = new URL(window.location.href).pathname;
  const path = params.split('/')[2];

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/doc/${path}?ct=${CERT_NO}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
        },
      }
    );

    const { D1, ...rest } = await res.data;

    if (!Object.keys(D1).length && !Object.keys(rest.D2).length) return;

    setState({
      H: {
        RCVNO,
        VESSELNM,
        CERTNO: CERT_NO || null,
      },
      D1,
      ...rest,
    });

    return {
      D1,
      ...rest,
    };
  } catch (e) {
    console.error(e);
  }
};
export default getItemData;
