import classes from './Button.module.css'
// eslint-disable-next-line react/prop-types
export default function Button({children, onClickBtn, isActive,href}) {
    return (
        <a href={href} className={isActive ? `${classes.active}`: classes.button} onClick={onClickBtn}>{children}</a>
    )
}