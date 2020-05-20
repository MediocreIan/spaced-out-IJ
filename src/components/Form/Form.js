import React from 'react';
import cx from 'classnames';
import './Form.css';

export function Label({ className, ...props }) {
  return <label className={cx('Label', className)} {...props} />;
}

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cx('Input', className)}
      type="text"
      placeholder=" "
      ref={ref}
      {...props}
    />
  );
});

export function InputCombo({ className, ...props }) {
  return <div className={cx('field', className)}>{props.children}</div>;
}

export function Required({ className, ...props }) {
  return (
    <span className={cx('Required', className)} {...props}>
      {' '}
      &#42;
    </span>
  );
}

export function Textarea({ className, ...props }) {
  return <textarea className={cx('Textarea', className)} {...props} />;
}
