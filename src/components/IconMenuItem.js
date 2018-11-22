import React from 'react';

function IconMenuItem ({ icon, onClick, itemKey }) {
  return (
    <li onClick={onClick} >
      <i className={icon} />
    </li>
  );
}

export default IconMenuItem;