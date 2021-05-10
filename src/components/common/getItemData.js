import axios from 'axios';

const getItemData = async setState => {
  const CERT_NO = JSON.parse(localStorage.getItem('certNo'));

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

    setState({
      H: {
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
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
