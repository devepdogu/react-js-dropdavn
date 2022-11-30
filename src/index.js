import React from 'react'
import { Wrapper } from './components';
import { useCreateContext } from './context';
export const SimpleDropdown = ({ ...props }) => {
  const INIT_STATE = { visibility: false, selected: null, search: null };
  const { Provider } = useCreateContext(INIT_STATE);
  return <Provider><Wrapper {...props} /></Provider>
}
