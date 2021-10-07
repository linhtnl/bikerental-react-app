import React from 'react'
import classNames from 'classnames'
import styles from './index.scss'
export const InputFieldType = {
  Text: 'text',
  Email: 'email',
  Password: 'password',
  Search: 'search',
}
class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { uncontrolledValue: '' }
  }

  onSubmit(e) {
    e.preventDefault()

    const { onSubmit } = this.props
    if (onSubmit) onSubmit()
  }

  render() {
    const { uncontrolledValue } = this.state
    const {
      value,
      onChange,
      onClick,
      type,
      placeholder,
      subtitle,
      icon,
      className,
      onSubmit,
      autocomplete,
      id,
      readonly,
      onBlur,
      ...rest
    } = this.props

    const cn = classNames(styles.InputField, {
      [className]: className,
      [styles.withIcon]: icon,
    })

    return (
      <form className={cn} onClick={onClick} onSubmit={(e) => this.onSubmit(e)}>
        <input
          {...rest}
          type={type || 'text'}
          value={value || uncontrolledValue}
          placeholder={placeholder}
          onChange={({ currentTarget: { value } }) => {
            if (onChange) return onChange(value)
            this.setState({ uncontrolledValue: value })
          }}
          className={styles.Input}
          autoComplete={autocomplete}
          id={id}
          readOnly={readonly}
          onBlur={onBlur ? () => onBlur() : null}
        />
      </form>
    )
  }
}
//------------------------------------------------------------------------------
// Export ----------------------------------------------------------------------
export default InputField
