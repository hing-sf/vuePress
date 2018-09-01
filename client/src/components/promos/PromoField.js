// SurveyField contains logic to render a single
// label and text input
import React from 'react';
// import { Link } from 'react-router-dom';

export default ({ input, label, meta: { error, touched } }) => {
  // function ActionLink() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     console.log('The link was clicked.');
  //   }

  //   return (
  //     <a href="#" onClick={handleClick}>
  //       Click me
  //     </a>
  //   );
  // }

  return (
    <div style={{ position: 'relative'}}>
      <label>{label}</label>
      <input className="zf-input" {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>

    </div>
  );
};
