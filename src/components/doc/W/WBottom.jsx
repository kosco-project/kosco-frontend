import React from 'react';
import styled from 'styled-components';

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

const WBottom = ({ checkState, onWorkingSystem, state }) => {
  const { D2 } = state;

  return (
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
                <input type='checkbox' data-form="D2" checked={!!D2[0].CarriedOut} data-name="0" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[0].NotCarried} data-name="0" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[0].NotApp} data-name="0" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="0" data-key="Comm" value={D2[0].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>2. Check that all distribution valves</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[1].CarriedOut} data-name="1" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[1].NotCarried} data-name="1" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[1].NotApp} data-name="1" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="1" data-key="Comm" value={D2[1].Comm} onChange={onWorkingSystem}/>
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
                <input type='checkbox' data-form="D2" checked={!!D2[2].CarriedOut} data-name="2" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[2].NotCarried} data-name="2" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[2].NotApp} data-name="2" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="2" data-key="Comm" value={D2[2].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>b. Pre warning alarm</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[3].CarriedOut} data-name="3" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[3].NotCarried} data-name="3" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[3].NotApp} data-name="3" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="3" data-key="Comm" value={D2[3].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>c. Function test</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[4].CarriedOut} data-name="4" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[4].NotCarried} data-name="4" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[4].NotApp} data-name="4" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="4" data-key="Comm" value={D2[4].Comm} onChange={onWorkingSystem}/>
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
                <input type='checkbox' data-form="D2" checked={!!D2[5].CarriedOut} data-name="5" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[5].NotCarried} data-name="5" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[5].NotApp} data-name="5" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="5" data-key="Comm" value={D2[5].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>6. Test alarm central as per make’s specification for the following :</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[6].CarriedOut} data-name="6" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[6].NotCarried} data-name="6" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[6].NotApp} data-name="6" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '6 5px' }}>
                <input type='text' data-form="D2" data-name="6" data-key="Comm" value={D2[6].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>a. Pump running</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[7].CarriedOut} data-name="7" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[7].NotCarried} data-name="7" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[7].NotApp} data-name="7" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="7" data-key="Comm" value={D2[7].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>b. Discharge alarm</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[8].CarriedOut} data-name="8" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[8].NotCarried} data-name="8" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[8].NotApp} data-name="8" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="8" data-key="Comm" value={D2[8].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>c. Automatic valve open</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[9].CarriedOut} data-name="9" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[9].NotCarried} data-name="9" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[9].NotApp} data-name="9" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="9" data-key="Comm" value={D2[9].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>7. Distribution valve inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[10].CarriedOut} data-name="10" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[10].NotCarried} data-name="10" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[10].NotApp} data-name="10" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="10" data-key="Comm" value={D2[10].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>8. Release stations inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[11].CarriedOut} data-name="11" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[11].NotCarried} data-name="11" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[11].NotApp} data-name="11" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="11" data-key="Comm" value={D2[11].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>9. Automatic release mechanism inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[12].CarriedOut} data-name="12" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[12].NotCarried} data-name="12" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[12].NotApp} data-name="12" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="12" data-key="Comm" value={D2[12].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>10. Functions tested</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[13].CarriedOut} data-name="13" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[13].NotCarried} data-name="13" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[13].NotApp} data-name="13" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="13" data-key="Comm" value={D2[13].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>11. Distribution lines and nozzles inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[14].CarriedOut} data-name="14" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[14].NotCarried} data-name="14" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[14].NotApp} data-name="14" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="14" data-key="Comm" value={D2[14].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>12. All doors, hinges, locks inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[15].CarriedOut} data-name="15" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[15].NotCarried} data-name="15" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[15].NotApp} data-name="15" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="15" data-key="Comm" value={D2[15].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>13. All instruction plates on installation inspected</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[16].CarriedOut} data-name="16" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[16].NotCarried} data-name="16" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[16].NotApp} data-name="16" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="16" data-key="Comm" value={D2[16].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>14. Service valve closed and confirmed in right position</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[17].CarriedOut} data-name="17" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[17].NotCarried} data-name="17" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[17].NotApp} data-name="17" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="17" data-key="Comm" value={D2[17].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>15. Control valve overhaul inspection</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[18].CarriedOut} data-name="18" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[18].NotCarried} data-name="18" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[18].NotApp} data-name="18" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="18" data-key="Comm" value={D2[18].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>

            <tr>
              <td>16. System reconnected and putted inspection label</td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[19].CarriedOut} data-name="19" data-key="CarriedOut" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[19].NotCarried} data-name="19" data-key="NotCarried" onChange={checkState}/>
              </td>
              <td>
                <input type='checkbox' data-form="D2" checked={!!D2[19].NotApp} data-name="19" data-key="NotApp" onChange={checkState}/>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="19" data-key="Comm" value={D2[19].Comm} onChange={onWorkingSystem}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BottomBox>
  );
};

export default WBottom;
