import axios from 'axios';

const getItemData = async (CERT_NO, setState) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/doc/A1?ct=${CERT_NO}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
        },
      }
    );
    const { D1, D2 } = await res.data;
    console.log(D1);

    setState({
      H: {
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
      },
      D1,
      D2,
    });
  } catch (e) {
    console.error(e);
  }
};
export default getItemData;
