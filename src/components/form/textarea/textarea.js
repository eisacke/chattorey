import React from "react";
import textareaStyles from "./textarea.module.styl";
import classNames from "classnames";

export default ({ label, hint, handleChange, error, ...rest }) => {
  const textareaClassNames = classNames({
    [textareaStyles.textarea]: true,
    [textareaStyles.error]: error
  });

  return (
    <div className={textareaStyles.wrapper}>
      <label className={textareaStyles.label}>{label}</label>
      <textarea
        {...rest}
        onChange={handleChange}
        className={textareaClassNames}
      />
      {error && <p className={textareaStyles.errorMessage}>Required field</p>}
    </div>
  );
};
