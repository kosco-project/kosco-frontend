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

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
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

const B3Bottom = () => {
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
                <td colSpan='2'>Description of Inspection / Tests</td>
                <td>Carried out</td>
                <td>Not carried</td>
                <td>Not applicable</td>
                <td>Comment</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>System secured</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="0" name="CarriedOut" checked={!!D2[0].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="0" name="NotCarried" checked={!!D2[0].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="0" name="NotApp" checked={!!D2[0].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="0" name="Comm" value={D2[0].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>2</td>
                <td>Foam liquid tank visually inspected and breather valve checked</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="1" name="CarriedOut" checked={!!D2[1].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="1" name="NotCarried" checked={!!D2[1].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="1" name="NotApp" checked={!!D2[1].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="1" name="Comm" value={D2[1].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>3</td>
                <td>Foam concentrate content and liquid level indicator inspected / checked</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="2" name="CarriedOut" checked={!!D2[2].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="2" name="NotCarried" checked={!!D2[2].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="2" name="NotApp" checked={!!D2[2].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="2" name="Comm" value={D2[2].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>4</td>
                <td>Distribution lines and nozzles/monitors visually inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="3" name="CarriedOut" checked={!!D2[3].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="3" name="NotCarried" checked={!!D2[3].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="3" name="NotApp" checked={!!D2[3].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="3" name="Comm" value={D2[3].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>5</td>
                <td>All cabinet doors, hinges, locks and instruction on installation visually inspected</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="4" name="CarriedOut" checked={!!D2[4].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="4" name="NotCarried" checked={!!D2[4].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="4" name="NotApp" checked={!!D2[4].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="4" name="Comm" value={D2[4].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>6</td>
                <td>Foam mixing units inspect and correct setting of foam mix ratio checked</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="5" name="CarriedOut" checked={!!D2[5].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="5" name="NotCarried" checked={!!D2[5].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="5" name="NotApp" checked={!!D2[5].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="5" name="Comm" value={D2[5].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>7</td>
                <td>Control cabinet(s)/release stations inspected / function tested</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="6" name="CarriedOut" checked={!!D2[6].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="6" name="NotCarried" checked={!!D2[6].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="6" name="NotApp" checked={!!D2[6].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="6" name="Comm" value={D2[6].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>8</td>
                <td>Fan stop/fire dampers (if part of the system) inspected / tested</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="7" name="CarriedOut" checked={!!D2[7].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="7" name="NotCarried" checked={!!D2[7].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="7" name="NotApp" checked={!!D2[7].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="7" name="Comm" value={D2[7].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>9</td>
                <td>Foam tank valve(s) inspected / function tested</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="8" name="CarriedOut" checked={!!D2[8].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="8" name="NotCarried" checked={!!D2[8].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="8" name="NotApp" checked={!!D2[8].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="8" name="Comm" value={D2[8].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>10</td>
                <td>Warning alarms (Audio/visual) tested</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="9" name="CarriedOut" checked={!!D2[9].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="9" name="NotCarried" checked={!!D2[9].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="9" name="NotApp" checked={!!D2[9].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="9" name="Comm" value={D2[9].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>11</td>
                <td>Pressure switches and gauges visually inspected / function tested</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="10" name="CarriedOut" checked={!!D2[10].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="10" name="NotCarried" checked={!!D2[10].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="10" name="NotApp" checked={!!D2[10].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="10" name="Comm" value={D2[10].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>12</td>
                <td>Foam pump(s) – tested for correct rotation and pressure</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="11" name="CarriedOut" checked={!!D2[11].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="11" name="NotCarried" checked={!!D2[11].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="11" name="NotApp" checked={!!D2[11].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="11" name="Comm" value={D2[11].Comm} onChange={onChangeText}/>
                </td>
              </tr>
  
              <tr>
                <td>13</td>
                <td>System ran through test line. Flushed and re-set</td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="12" name="CarriedOut" checked={!!D2[12].CarriedOut} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="12" name="NotCarried" checked={!!D2[12].NotCarried} onChange={onChangeCheckbox} />
                </td>
                <td>
                  <input type='checkbox' data-form="D2" data-key="12" name="NotApp" checked={!!D2[12].NotApp} onChange={onChangeCheckbox} />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-key="12" name="Comm" value={D2[12].Comm} onChange={onChangeText}/>
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

export default B3Bottom;