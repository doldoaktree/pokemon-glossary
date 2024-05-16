import styles from "./layout.module.css";

type MyReactNode = {
  children: React.ReactNode;
};

const Layout = ({ children }: MyReactNode) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
