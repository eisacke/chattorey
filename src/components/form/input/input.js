import React from "react";
import inputStyles from "./input.module.styl";
import classNames from "classnames";

export default ({ label, hint, handleChange, error, ...rest }) => {
  const inputClassNames = classNames({
    [inputStyles.input]: true,
    [inputStyles.error]: error
  });

  return (
    <div className={inputStyles.wrapper}>
      <label className={inputStyles.label}>{label}</label>
      <p className={inputStyles.hint}>{hint}</p>
      <input {...rest} onChange={handleChange} className={inputClassNames} />
      {error && <p className={inputStyles.errorMessage}>Required field</p>}
    </div>
  );
};
