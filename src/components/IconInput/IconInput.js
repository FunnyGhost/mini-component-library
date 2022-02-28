import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: var(--width);
  position: relative;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: var(--font-size);
  color: ${COLORS.gray700};

  &:focus-within {
    outline: solid 1px ${COLORS.primary};
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 4px;
  font-size: inherit;
  color: inherit;
`;

const Input = styled.input`
  margin-left: var(--icon-spacing);
  border: none;
  color: inherit;
  font-weight: 700;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

const STYLES = {
  large: {
    '--font-size': '18px',
    '--border-width': '2px',
    '--icon-spacing': '24px',
  },
  small: {
    '--font-size': '14px',
    '--border-width': '1px',
    '--icon-spacing': '20px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ '--width': width + 'px', ...STYLES[size] }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon
        id={icon}
        size={size === 'small' ? 16 : 20}
        strokeWidth={size === 'small' ? 1 : 2}
      />
      <Input type='text' placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
