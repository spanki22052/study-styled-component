import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const product = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1>Bread: {product}</h1>
      <button
        onClick={() => {
          dispatch({ type: "ADD_COUNTER", addNumber: 5 });
        }}
      >
        +
      </button>
      <Link href="/bread">
        <a>Перейти на страницу хлеба</a>
      </Link>
    </div>
  );
}
