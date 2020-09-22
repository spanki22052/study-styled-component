import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";

export const Btn = styled.button`
  width: 100px;
  height: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  border: 1.5px solid #f56a79;
  border-radius: 10px;
  color: #f56a79;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.2em;

  &:hover {
    background-color: #f56a79;
    color: white;
  }

  &:active {
    background: rgba(245, 106, 121, 0.9);
    color: white;
  }
`;

export default function Home() {
  const product = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      {product.map((el, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>
              {el.title} - {el.amount}
            </h1>
            <Btn
              style={{ marginLeft: "15px" }}
              onClick={() =>
                dispatch({
                  type: "INCREASE_PRODUCT",
                  amount: 1,
                  index: index,
                })
              }
            >
              increase
            </Btn>
          </div>
        );
      })}
      <Link href="/bread">
        <a>Перейти на страницу добавления товара</a>
      </Link>
    </div>
  );
}
