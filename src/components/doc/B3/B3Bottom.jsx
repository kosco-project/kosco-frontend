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

const B3Bottom = ({ onChecked, onChange }) => {
  return (
    <BottomBox>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td colSpan='2'>Description of Inspection / Tests</td>
              <td>Carried out</td>
              <td>Not carried</td>
              <td>Not applicable</td>
              <td>Comm.</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>System secured</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="0" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="0" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="0" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="0" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Foam liquid tank visually inspected and breather valve checked</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="1" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="1" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="1" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="1" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Foam concentrate content and liquid level indicator inspected / checked</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="2" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="2" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="2" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="2" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Distribution lines and nozzles/monitors visually inspected</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="3" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="3" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="3" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="3" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>All cabinet doors, hinges, locks and instruction on installation visually inspected</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="4" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="4" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="4" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="4" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>Foam mixing units inspect and correct setting of foam mix ratio checked</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="5" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="5" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="5" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="5" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>Control cabinet(s)/release stations inspected / function tested</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="6" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="6" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="6" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="6" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>Fan stop/fire dampers (if part of the system) inspected / tested</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="7" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="7" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="7" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="7" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>Foam tank valve(s) inspected / function tested</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="8" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="8" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="8" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="8" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>10</td>
              <td>Warning alarms (Audio/visual) tested</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="9" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="9" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="9" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="9" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>11</td>
              <td>Pressure switches and gauges visually inspected / function tested</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="10" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="10" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="10" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="10" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>12</td>
              <td>Foam pump(s) – tested for correct rotation and pressure</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="11" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="11" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="11" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="11" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>

            <tr>
              <td>13</td>
              <td>System ran through test line. Flushed and re-set</td>
              <td>
                <input type='checkbox' data-form="D2" data-name="12" data-key="carriedOut" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="12" data-key="notCarried" onChange={onChecked} />
              </td>
              <td>
                <input type='checkbox' data-form="D2" data-name="12" data-key="notApplicable" onChange={onChecked} />
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D2" data-name="12" data-key="Comm" onChange={onChange}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BottomBox>
  );
};

export default B3Bottom;
