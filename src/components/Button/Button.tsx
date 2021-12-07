import styles from "./Button.module.scss";

const Button = ({ Children }: any) => {
    return <button className={styles.button}>{Children}</button>;
};

export default Button;
