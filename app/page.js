import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Africa Web</h1>
      <h4>A project by Joshua Roberts</h4>
      <div>
        <button>kiSwahili</button>
        <button>isiZulu</button>
      </div>
    </main>
  );
}
