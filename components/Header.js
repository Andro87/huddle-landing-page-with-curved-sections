import styles from "./Header.module.scss";

export default function Header(props) {
    const { children, type } = props;
    return <p className={`${styles.header} ${styles[type]}`}>{children}</p>;
}
