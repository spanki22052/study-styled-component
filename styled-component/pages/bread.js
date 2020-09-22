import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { Btn } from "./index.js";
import styles from "../styles/Home.module.css";

const InputPink = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px;

  border: 1.5px solid #f56a79;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #f56a79;
`;


import Link from "next/link";

export default function Hm() {
  const product = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [productInput, setProductInput] = useState("");

  return (
    <div className={styles.container}>
      <div className="input-holder">
        <form
          onSubmit={(e) => {
            dispatch({ type: "ADD_PRODUCT", title: productInput });
            setProductInput("");
            e.preventDefault();
          }}
        >
          <InputPink
            placeholder="Введите название продукта"
            value={productInput}
            onChange={(e) => setProductInput(e.target.value)}
          />
          <Btn
            type="submit"
            style={{ width: "50px", height: "40px", marginLeft: "5px" }}
          >
            add
          </Btn>
        </form>
      </div>
      <Link href="/">
        <a>Перейти на главную страницу</a>
      </Link>
    </div>
  );
}
