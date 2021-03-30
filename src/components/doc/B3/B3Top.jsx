import React from 'react';
import styled from 'styled-components';

const TopBox = styled.div`
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

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 5px 0;
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

const B3Top = ({ units, onChange }) => {
  return (
    <TopBox>
      <p className='top-title'>Description of Working System</p>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Value</td>
              <td>Unit</td>
              <td>Remarks</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Manufacturer</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="0" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="0" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="0" data-key="remarks" onChange={onChange} />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Model</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="1" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="1" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="1" data-key="remarks" onChange={onChange} />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Serial no.</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="2" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="2" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="2" data-key="remarks" onChange={onChange} />
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Maximum Charging pressure</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="3" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="3" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="3" data-key="remarks" onChange={onChange} />
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Revolution</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="4" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="4" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="4" data-key="remarks" onChange={onChange} />
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>Location of compressor</td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="5" data-key="value" onChange={onChange}/>
              </td>
              <td>
              <select name='' id='' data-form="D1" data-name="5" data-key="unit" onChange={onChange}>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
              <input type='text' data-form="D1" data-name="5" data-key="remarks" onChange={onChange} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TopBox>
  );
};

export default B3Top;
