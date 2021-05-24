import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWraper = styled.header`
  display: flex;
  justify-content: space-between;

  > .header-logo-box {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 200px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;

const DocType = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  margin-right: 20px;
  color: #CF0000;

  > .chart-name {
    font-size: 28px;
  }

  > .chart-desc {
    margin-top: 1em;
  }
`;

const Header = ({docDesc}) => {
  const location = useLocation();

  return (
    <HeaderWraper>
      <h1 className='a11y-hidden'>KOSCO</h1>
      <div className='header-logo-box'>
        <Link to='/home'>
          <img src={`${process.env.REACT_APP_SERVER_URL}/img/header-logo.png`} alt='kosco 로고' />
        </Link>
      </div>
      <DocType>
      <div className='chart-name'>
          SERVICE CHART {location.pathname.split('/')[2]}
      </div>
      <div className='chart-desc'>
        {docDesc}
        </div>
      </DocType>
    </HeaderWraper>
  );
};

export default Header;
