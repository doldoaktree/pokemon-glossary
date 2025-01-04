import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import PrimarySearchAppBar from "../components/dashboard/search-bar";
import SearchBar from "../components/dashboard/search-bar";

export default function Dashboard() {
  return (
    <div>
      <h1 className={styles.centeredText}>Dashboard Page</h1>
      <SearchBar />
      <h1 className={styles.centeredText}>Page Under Construction</h1>
      <div className={styles.container}>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
