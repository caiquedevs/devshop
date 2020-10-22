import React from 'react';
import * as colors from '../styles/colors';

export default function HomeSvg({ category }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16.5411 7.39418C16.5407 7.39379 16.5404 7.3934 16.54 7.39301L9.60532 0.458618C9.30973 0.162903 8.91674 0 8.49872 0C8.0807 0 7.68771 0.162773 7.39199 0.458488L0.46097 7.38938C0.458636 7.39172 0.456301 7.39418 0.453966 7.39651C-0.153028 8.00701 -0.151991 8.99753 0.456949 9.60647C0.735155 9.8848 1.10259 10.046 1.49545 10.0629C1.51141 10.0644 1.52749 10.0652 1.5437 10.0652H1.82009V15.1685C1.82009 16.1784 2.64174 17 3.65184 17H6.3649C6.63986 17 6.86295 16.777 6.86295 16.502V12.501C6.86295 12.0402 7.23778 11.6653 7.6986 11.6653H9.29884C9.75966 11.6653 10.1345 12.0402 10.1345 12.501V16.502C10.1345 16.777 10.3574 17 10.6325 17H13.3456C14.3557 17 15.1773 16.1784 15.1773 15.1685V10.0652H15.4336C15.8515 10.0652 16.2445 9.90244 16.5404 9.60673C17.1499 8.99675 17.1502 8.00455 16.5411 7.39418V7.39418Z"
          fill={category === '' ? `${colors.ligth}` : `${colors.dark}`}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}