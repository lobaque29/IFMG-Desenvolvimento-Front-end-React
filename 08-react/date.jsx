import React from 'react';

function DateView() {
  const agora = new Date();
  return <p>Hoje é {agora.toLocaleDateString()}</p>;
}

export default DateView;
