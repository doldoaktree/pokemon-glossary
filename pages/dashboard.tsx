import Image from "next/image";
import styles from "./styles.module.css";

export default function Dashboard() {
  return (
    <div >
      <h1 className={styles.centeredText}>Dashboard Page</h1>
      <div className={styles.container}>
        <Image
          
          src="/construction-worker.jpg" // Replace with the path to your image file
          alt="Under construction" // Replace with a description of the image>
          width={300} // Specify the width of the image
          height={520} // Specify the height of the image
        />
      </div>

      <h1 className={styles.centeredText}>Page Under Construction</h1>
    </div>
  );
}
