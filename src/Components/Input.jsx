import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

export const Input = ({ label, onChange, name, ...input }) => (
  <Fragment>
    {label && <label htmlFor={name} className="input-label">{label}</label>}
    <input id={name} onChange={onChange} {...input} className="widget-input" />
  </Fragment>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
