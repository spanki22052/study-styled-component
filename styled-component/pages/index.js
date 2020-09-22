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
  border: 1.5px solid #${(props) => (props.increase ? "132743" : "f56a79")};
  border-radius: 10px;
  color: #${(props) => (props.increase ? "132743" : "f56a79")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.2em;

  &:hover {
    background-color: #${(props) => (props.increase ? "132743" : "f56a79")};
    color: white;
  }

  &:active {
    background: #${(props) => (props.increase ? "293D58" : "rgba(245, 106, 121, 0.9)")};
    color: white;
  }
`;

const ProductsAd = styled.h1`
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;
export default function Home() {
  const product = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <ProductsAd>List of items</ProductsAd>
      {product.map((el, index) => {
        return (
          <div
            key={index}
            style={{
              width: "700px",
              height: "80px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <h1
              style={{ fontSize: "1.5em", width: "250px", textAlign: "right" }}
            >
              {el.title} - {el.amount}
            </h1>
            <Btn
              onClick={() =>
                dispatch({
                  type: "INCREASE_PRODUCT",
                  amount: 1,
                  index: index,
                })
              }
              increase
            >
              increase
            </Btn>
            <Btn
              onClick={() =>
                dispatch({
                  type: "INCREASE_PRODUCT",
                  amount: -1,
                  index: index,
                })
              }
              increase
            >
              decrease
            </Btn>
            <Btn
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  index: index,
                })
              }
            >
              remove
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
