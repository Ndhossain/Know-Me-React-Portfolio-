import classes from "./styles/Title.module.css"

export default function Title({text}) {
    return (
        <div>
            <h1 className={`${classes.title} m-2`}>{text}</h1>
            <div className={`${classes.border} m-2`}></div>
        </div>
    )
}