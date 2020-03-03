import React from 'react';

export default ({ fillColor = 'white' }) => (
  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M22.8170077,21.0373853 L17.1247024,15.3029914 C16.9109895,15.0880223 16.8896183,14.7567688 17.0549315,14.5028288 C19.3888017,10.9231539 18.8444625,6.00023681 15.4011709,3.0598121 C12.0879928,0.231271866 7.04499758,0.328070799 3.83490451,3.27478116 C0.150243135,6.65708671 0.0572151779,12.4141089 3.55707777,15.9164703 C6.5415152,18.9034088 11.1608561,19.2660905 14.5532337,17.0221153 C14.8078034,16.85366 15.1415727,16.8756597 15.3565427,17.0918859 L21.0362766,22.8143371 C21.2820464,23.0613629 21.680558,23.0619915 21.9269564,22.8155942 L22.8157505,21.9261755 C23.0608918,21.6810353 23.0615203,21.2837825 22.8170077,21.0373853 L22.8170077,21.0373853 Z M5.33466603,14.1370042 C2.90588207,11.7063453 2.90588207,7.7514175 5.33466603,5.32075859 C7.76344998,2.89009969 11.7152524,2.88947112 14.1440364,5.32075859 C16.5728204,7.7514175 16.5728204,11.7063453 14.1440364,14.1370042 C11.7152524,16.5676631 7.76344998,16.5676631 5.33466603,14.1370042 L5.33466603,14.1370042 Z" id="path-1" />
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <g id="Icon-/-Search" transform="translate(-1.000000, -1.000000)">
        <mask id="mask-2" fill={fillColor}>
          <use xlinkHref="#path-1" />
        </mask>
        <use id="↳Color" fill={fillColor} xlinkHref="#path-1" />
      </g>
    </g>
  </svg>
);
