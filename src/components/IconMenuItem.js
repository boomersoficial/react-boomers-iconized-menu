import React from 'react';

function IconMenuItem ({ icon, onClick, position }) {
  var positionClass = '';

  const isPositionDefined = position !== null && position !== undefined;
  if (isPositionDefined && position === 'end') {
    positionClass = 'menuItemAtEnd'
  }
  

  return (
    <li onClick={onClick} className={positionClass}>
      <i className={icon} />
    </li>
  );
}

export default IconMenuItem;