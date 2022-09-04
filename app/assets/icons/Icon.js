// @flow
import React from 'react';
import type { Node } from 'react';
import { Svg, Path } from 'react-native-svg';
import colors from '../../styles/colors';

type Props = {
  style?: Object,
};

function Icon(props: Props): Node {
  return (
    <Svg viewBox="0 0 108.71 66.5" style={props.style} fill={colors.white}>
      <Path
        d="M428.75,822.18c-.12.59-.25,1.19-.37,1.78s-.25,1.2-.37,1.79l-27.9-.17a1.79,1.79,0,0,1-1.78-1.8h0a1.79,1.79,0,0,1,1.8-1.78Z"
        transform="translate(-398.33 -790.86)"
      />
      <Path
        d="M507.05,824.44h0a1.8,1.8,0,0,1-1.8,1.78l-28.62-.17c.12-.6.25-1.2.37-1.79s.25-1.2.37-1.79l27.9.17A1.79,1.79,0,0,1,507.05,824.44Z"
        transform="translate(-398.33 -790.86)"
      />
      <Path
        d="M468.64,796c-.15.6-.27,1.2-.39,1.79s-.22,1.2-.33,1.79h0l-51.32-.31a1.79,1.79,0,0,1-1.77-1.8h0a1.78,1.78,0,0,1,1.8-1.78Z"
        transform="translate(-398.33 -790.86)"
      />
      <Path
        d="M490.55,850.73h0a1.78,1.78,0,0,1-1.8,1.78l-52-.31c.15-.6.27-1.2.39-1.79s.21-1.14.31-1.69c0,0,0-.06,0-.1l51.31.31A1.79,1.79,0,0,1,490.55,850.73Z"
        transform="translate(-398.33 -790.86)"
      />
      <Path
        d="M490.06,801.7h0a5.75,5.75,0,0,1-2.12,2.09,10.78,10.78,0,0,1-10.54.06c-.53-.3-.51.13-.57.43q-3.61,17.46-7.21,34.94c-.22,1-.44,2.1-.65,3.15h0l0,.17h0a2.37,2.37,0,0,1-4,1.08h0l0,0-.1-.12h0L440,815.35h0l-6.27,30.27c0,.23-.12.46-.18.69-.34,1.74-.6,3.5-1,5.21-.13.53-.28,1-.45,1.56a5.64,5.64,0,0,1-2.68,3c-3.76,2.18-8.77,1.43-12.11-1.17a1.34,1.34,0,0,1-.21-.2c-.41-.44-.83-.87-1.23-1.33a3,3,0,0,1-.21-.25l-.18-.33a6.08,6.08,0,0,1-.73-5l.05-.14a6.43,6.43,0,0,1,2.65-3.26h0a10.76,10.76,0,0,1,10.52,0c.17.09.28.12.36.09s.17-.31.22-.52q3.6-17.46,7.2-34.93c.24-1.11.46-2.22.69-3.34h0a.5.5,0,0,1,0-.12,2.37,2.37,0,0,1,2.31-1.79,2.34,2.34,0,0,1,1.8.84h0l24.78,28.14,6.24-30.13c.05-.23.12-.46.18-.69.39-2,.67-4,1.22-5.91.08-.29.17-.57.27-.86a.19.19,0,0,1,0-.07h0a6.14,6.14,0,0,1,1.06-1.7h0a6.93,6.93,0,0,1,1.59-1.24c3.76-2.18,8.77-1.43,12.11,1.17a1.34,1.34,0,0,1,.21.2c.41.44.83.88,1.23,1.33.09.11.14.2.26.37A6,6,0,0,1,490.06,801.7Z"
        transform="translate(-398.33 -790.86)"
      />
    </Svg>
  );
}

export default Icon;
