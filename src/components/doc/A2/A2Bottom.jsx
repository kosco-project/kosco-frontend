import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  > .bottom-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .bottom-description {
    padding: 10px;

    input {
      margin-right: 10px;
      width: 15px;
      height: 15px;
    }

    > div {
      display: flex;
      margin-bottom: 10px;
    }
  }
`;

const A2Bottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);
  
  const onChangeCheckbox = useChangeCheckbox();

  return (
    <>
      {D2 && (
        <BottomBox>
        <p className='bottom-title'>Description of Inspection;</p>
        <div className='bottom-description'>
          <div>
            <div>
            <input type='checkbox' data-name="0" data-form="D2" id='bottom1' checked={!!D2[0]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom1'>1. Before starting the inspection, made sure that all distributing valves were closed.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="1" data-form="D2" id='bottom2' checked={!!D2[1]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom2'>2. All CO2 cylinders checked for weight of contents. (By liquid level indicator.)</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="2" data-form="D2" id='bottom3' checked={!!D2[2]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom3'>3. Cylinders checked for weight/capacity of contents.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="3" data-form="D2" id='bottom4' checked={!!D2[3]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom4'>4. All discharge valves and/or heads on CO2 cylinders visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="4" data-form="D2" id='bottom5' checked={!!D2[4]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom5'>5. Connecting lines from discharge valves and/or heads visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="5" data-form="D2" id='bottom6' checked={!!D2[5]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom6'>6. All cylinder clamps and connections checked for tightness.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="6" data-form="D2" id='bottom7' checked={!!D2[6]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom7'>7. Manifold tested for leakage, by applying dry working air.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="7" data-form="D2" id='bottom8' checked={!!D2[7]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom8'>8. Main valve and distribution valve visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="8" data-form="D2" id='bottom9' checked={!!D2[8]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom9'>9. Time delay devices tested for correct setting.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="9" data-form="D2" id='bottom10' checked={!!D2[9]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom10'>10. Remote release system visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="10" data-form="D2" id='bottom11' checked={!!D2[10]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom11'>
              11. Servo tubing/pilot line pressure tested at maximum working pressure and checked for leakages and blockage.
            </label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="11" data-form="D2" id='bottom12' checked={!!D2[11]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom12'>12. Manual pull cables, pulleys, gang releases tested, serviced and tightened/adjusted as necessary.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="12" data-form="D2" id='bottom13' checked={!!D2[12]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom13'>13. Release station visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="13" data-form="D2" id='bottom14' checked={!!D2[13]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom14'>14. Warning alarms & fan stop tested.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="14" data-form="D2" id='bottom15' checked={!!D2[14]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom15'>15. 10% of cylinders and pilot cylinder/s pressure tested every 10 years.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="15" data-form="D2" id='bottom16' checked={!!D2[15]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom16'>16. Distribution lines and nozzle blown through, by applying dry working air.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="16" data-form="D2" id='bottom17' checked={!!D2[16]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom17'>17. All door, hinges and locks inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="17" data-form="D2" id='bottom18' checked={!!D2[17]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom18'>18. All flexible hose renewed and check valve in manifold visually inspected every 10 years.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="18" data-form="D2" id='bottom19' checked={!!D2[18]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom19'>19. Release controls and distribution valve reconnected and system put back in service.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="19" data-form="D2" id='bottom20' checked={!!D2[19]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom20'>20. Inspection date tags attached.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="20" data-form="D2" id='bottom21' checked={!!D2[20]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom21'>21. Activating heads of cylinder valve operating tested, pilot line function tested, visually inspected.</label>
          </div>
          <div>
            <div>
            <input type='checkbox' data-name="21" data-form="D2" id='bottom22' checked={!!D2[21]} onChange={e => onChangeCheckbox(e)}/>
            </div>
            <label htmlFor='bottom22'>22. Control valve overhaul inspection.</label>
          </div>
        </div>
      </BottomBox>
    )}
    </>
  );
};

export default A2Bottom;
