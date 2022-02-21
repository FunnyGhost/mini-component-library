/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  if (value < 0 || value > 100) value = 0;

  const style = STYLES[size];

  if (!style) throw new Error('Uknown value for size: ', size);

  return (
    <Wrapper
      style={{
        '--height': style.height + 'px',
        '--radius': style.radius + 'px',
        '--padding': style.padding + 'px',
      }}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
          }}>
          <VisuallyHidden>{value} %</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
