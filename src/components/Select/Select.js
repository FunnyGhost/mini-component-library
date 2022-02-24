import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const HiddenSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  white-space: nowrap;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: solid 1px ${COLORS.primary};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue}
      <Icon id={'chevron-down'}></Icon>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </Wrapper>
  );
};

export default Select;
