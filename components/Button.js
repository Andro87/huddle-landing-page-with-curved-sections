import styles from "./Button.module.scss";

export default function Button(props) {
    const { type, color, children } = props;
    return (
        <button className={`${styles.button} ${styles[type]} ${styles[color]}`}>
            {children}
        </button>
    );
}
