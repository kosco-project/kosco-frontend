import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    border: 1px solid #000;
  }

  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .top-description {
    font-size: 14px;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          border-bottom: 1px solid #000;
        }
      }
      tbody {
        td:first-child {
          width: 25px;
        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 0;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:last-child {
          border-right: 0;
        }
      }
    }
  }
`;

const B3Bottom2 = () => {
  const D3 = useSelector(state => state.docsInput.D3);

  const onChange = useChangeD1();
  
  return (
    <>
      {D3 && (
        <BottomBox>
      <p className='top-title'>NBI Air quality requirement : Ref. to BS 4001-1:1998</p>
      <div className='top-description'>
        <table>
          <tbody>
            <tr>
              <td>A</td>
              <td>Air quality check : CO = Max. 15 ppm</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-key="0" data-form="D3" value={D3[0]} onChange={onChange} style={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              <td>B</td>
              <td>Air quality check : CO2 = Max. 500 ppm</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-key="1" data-form="D3" value={D3[1]} onChange={onChange} style={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              <td>C</td>
              <td>
                Air quality check : H2O = Max. 50 mg/m<sup>3</sup>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-key="2" data-form="D3" value={D3[2]} onChange={onChange} style={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              <td>D</td>
              <td>
                Air quality check : Oil = Max. 0.5 mg/m<sup>3</sup>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-key="3" data-form="D3" value={D3[3]} onChange={onChange} style={{ width: '100%' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BottomBox>
      )}
    </>
  );
};

export default B3Bottom2;