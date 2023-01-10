import css from './Box.module.css'

export const Box = ({ onClick, value }) => {
    return (
        <div onClick={onClick} className={css.box}>
            {value}
        </div>
    )
}
