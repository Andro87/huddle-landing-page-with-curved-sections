import styles from "./Box.module.scss";

export default function Box(props) {
    const { icon, number, text } = props;
    return (
        <div className={styles.box}>
            {icon}
            <p className={styles.number}> {number}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
