import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';
import useGetUnits from '../../../hooks/useGetUnits';

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

const A3Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);
  const { units } = useGetUnits();

  const onChangeD1 = useChangeD1();

  return (
    <>
      {D1 && (
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
                <td>Remark</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Manufacturer</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="0" data-key="Value" value={D1[0].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="0" data-key="Unit" value={D1[0].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="0" data-key="Remark" value={D1[0].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>2</td>
                <td>Location of foam tank</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="1" data-key="Value" value={D1[1].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="1" data-key="Unit" value={D1[1].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="1" data-key="Remark" value={D1[1].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>3</td>
                <td>Consisting of tank</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="2" data-key="Value" value={D1[2].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="2" data-key="Unit" value={D1[2].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="2" data-key="Remark" value={D1[2].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>4</td>
                <td>Liquid capacity</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="3" data-key="Value" value={D1[3].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="3" data-key="Unit" value={D1[3].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="3" data-key="Remark" value={D1[3].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>5</td>
                <td>Foam concentrate manufacturer / type</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="4" data-key="Value" value={D1[4].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="4" data-key="Unit" value={D1[4].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="4" data-key="Remark" value={D1[4].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>6</td>
                <td>Foam mixing rate (%)</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="5" data-key="Value" value={D1[5].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="5" data-key="Unit" value={D1[5].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="5" data-key="Remark" value={D1[5].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>7</td>
                <td>System Installation date</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="6" data-key="Value" value={D1[6].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="6" data-key="Unit" value={D1[6].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="6" data-key="Remark" value={D1[6].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
  
              <tr>
                <td>8</td>
                <td>Distribution line</td>
                <td style={{ padding: '0 5px' }}>
                <input type='text' data-form="D1" data-name="7" data-key="Value" value={D1[7].Value} onChange={e => onChangeD1(e)}/>
                </td>
                <td>
                  <select name='' id='' data-form="D1" data-name="7" data-key="Unit" value={D1[7].Unit} onChange={e => onChangeD1(e)}>
                    {units.map(({CdNm}) => (
                      <option key={CdNm} value={CdNm}>
                        {CdNm}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D1" data-name="7" data-key="Remark" value={D1[7].Remark} onChange={e => onChangeD1(e)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </TopBox>
      )}
    </>
  );
};

export default A3Top;
