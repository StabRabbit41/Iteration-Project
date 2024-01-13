/**
 * ************************************
 *
 * @module  LabeledText
 * @author
 * @date
 * @description Simple presentation component that shows a bold label next to plain text
 *
 * ************************************
 */

import React from 'react';
import '../stylesheets/application.scss';

const LabeledText = ({ label, text }) => (
  <p>
    <strong>{`${label}: `}</strong>
    {text}
  </p>
);

export default LabeledText;
