import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
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
          padding: 0 10px;
          text-align: left;
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

const WBottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChangeText = useChangeD1();
  const onChangeCheckbox = useChangeCheckbox();

  return (
    <>
      {D2 && (
        <BottomBox>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>Description of Inspection / Tests</td>
                <td>Carried out</td>
                <td>Not carried</td>
                <td>Not applicable</td>
                <td>See Comments</td>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>1. Visual checked secure service valve</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[0].CarriedOut} data-key="0" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[0].NotCarried} data-key="0" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[0].NotApp} data-key="0" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="0" name="Comm" value={D2[0].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>2. Check that all distribution valves</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[1].CarriedOut} data-key="1" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[1].NotCarried} data-key="1" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[1].NotApp} data-key="1" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="1" name="Comm" value={D2[1].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ padding: '10px 10px' }}>3. Detection panel checked by :</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>a. Flame detector</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[2].CarriedOut} data-key="2" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[2].NotCarried} data-key="2" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[2].NotApp} data-key="2" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="2" name="Comm" value={D2[2].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>b. Pre warning alarm</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[3].CarriedOut} data-key="3" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[3].NotCarried} data-key="3" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[3].NotApp} data-key="3" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="3" name="Comm" value={D2[3].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>c. Function test</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[4].CarriedOut} data-key="4" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[4].NotCarried} data-key="4" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[4].NotApp} data-key="4" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="4" name="Comm" value={D2[4].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ padding: '10px 10px' }}>4. Extended inspection high press pump checked</td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ padding: '0 5px' }}></td>
              </tr>
  
              <tr>
                <td>5. Start/stop function of high press pump & motor</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[5].CarriedOut} data-key="5" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[5].NotCarried} data-key="5" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[5].NotApp} data-key="5" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="5" name="Comm" value={D2[5].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>6. Test alarm central as per make’s specification for the following :</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[6].CarriedOut} data-key="6" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[6].NotCarried} data-key="6" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[6].NotApp} data-key="6" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '6 5px' }}>
                  <input type='text' data-form="D2" data-key="6" name="Comm" value={D2[6].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>a. Pump running</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[7].CarriedOut} data-key="7" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[7].NotCarried} data-key="7" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[7].NotApp} data-key="7" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="7" name="Comm" value={D2[7].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>b. Discharge alarm</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[8].CarriedOut} data-key="8" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[8].NotCarried} data-key="8" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[8].NotApp} data-key="8" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="8" name="Comm" value={D2[8].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td style={{ paddingLeft: 40 }}>c. Automatic valve open</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[9].CarriedOut} data-key="9" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[9].NotCarried} data-key="9" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[9].NotApp} data-key="9" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="9" name="Comm" value={D2[9].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>7. Distribution valve inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[10].CarriedOut} data-key="10" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[10].NotCarried} data-key="10" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[10].NotApp} data-key="10" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="10" name="Comm" value={D2[10].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>8. Release stations inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[11].CarriedOut} data-key="11" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[11].NotCarried} data-key="11" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[11].NotApp} data-key="11" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="11" name="Comm" value={D2[11].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>9. Automatic release mechanism inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[12].CarriedOut} data-key="12" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[12].NotCarried} data-key="12" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[12].NotApp} data-key="12" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="12" name="Comm" value={D2[12].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>10. Functions tested</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[13].CarriedOut} data-key="13" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[13].NotCarried} data-key="13" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[13].NotApp} data-key="13" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="13" name="Comm" value={D2[13].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>11. Distribution lines and nozzles inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[14].CarriedOut} data-key="14" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[14].NotCarried} data-key="14" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[14].NotApp} data-key="14" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="14" name="Comm" value={D2[14].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>12. All doors, hinges, locks inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[15].CarriedOut} data-key="15" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[15].NotCarried} data-key="15" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[15].NotApp} data-key="15" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="15" name="Comm" value={D2[15].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>13. All instruction plates on installation inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[16].CarriedOut} data-key="16" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[16].NotCarried} data-key="16" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[16].NotApp} data-key="16" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="16" name="Comm" value={D2[16].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>14. Service valve closed and confirmed in right position</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[17].CarriedOut} data-key="17" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[17].NotCarried} data-key="17" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[17].NotApp} data-key="17" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="17" name="Comm" value={D2[17].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>15. Control valve overhaul inspection</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[18].CarriedOut} data-key="18" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[18].NotCarried} data-key="18" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[18].NotApp} data-key="18" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="18" name="Comm" value={D2[18].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>16. System reconnected and putted inspection label</td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[19].CarriedOut} data-key="19" name="CarriedOut" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[19].NotCarried} data-key="19" name="NotCarried" onChange={onChangeCheckbox}/>
                </td>
                <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[19].NotApp} data-key="19" name="NotApp" onChange={onChangeCheckbox}/>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="19" name="Comm" value={D2[19].Comm} onChange={onChangeText}/>
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

export default WBottom;
