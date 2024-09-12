import Image from "next/image";
import styles from "./page.module.css";
import Message from "@/components/Message";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className={styles.main}>
        <h2>Hello Next.js</h2>

        <Message text="Hello Nextjs" color="blue"/>
        <Message text="Hello Nextjs" color="green"/>
        <Counter initialValue={5}/>
        <Counter initialValue={20}/>

    </main>
  );
}
