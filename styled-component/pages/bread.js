import { useSelector } from "react-redux";

import Link from "next/link";

export default function Hm() {
  const product = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Количество хлеба: {product}</h1>
      <Link href="/">
        <a>Перейти на главную страницу</a>
      </Link>
    </div>
  );
}
