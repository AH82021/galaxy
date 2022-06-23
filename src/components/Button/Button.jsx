

import './Button-styles.scss'

const Button_Type_Classes= {
  google:'google-sign-in',
  inverted:'inverted'
}

function Button({children,buttonType, ...otherProps }) {
  return (
    <button className={`btn ${Button_Type_Classes[buttonType]}`} {...otherProps} >{children}</button>
  )
}

export default Button