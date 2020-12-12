import styles from "./Background.module.scss";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

export default function Background(props) {
    const { background, intro, info, image, order, ord } = props;
    return (
        <section className={styles[background]}>
            <div className={styles.container}>
                <div className={`${styles.container_info} ${styles[ord]}`}>
                    <Header type="secondary">{intro}</Header>
                    <Paragraph type="secondary">{info}</Paragraph>
                </div>
                <div className={`${styles.container_picture} ${styles[order]}`}>
                    {image}
                </div>
            </div>
        </section>
    );
}
