/* 13 ta misollar
1-misol
import { useState } from "react";
import "./App.css"
import Greeting from "./Components/Greeting"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="margin" style={{textAlign: "center", marginTop: "50px"}}>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Chiqish" : "Kirish"}
      </button>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
export default App; 

===============================
2-misol
import "./App.css"
import React from "react";
import Product from "./Components/Product";
function App() {
  const product = {
    name: "MacBook Air M2",
    price: 999
  };

  return (
    <div>
      <Product name={product.name} price={product.price} />
    </div>
  );
}
export default App;

=============================
3-misol
import React from "react";
import CitiesList from "./Components/CitiesList";
function App() {
  const cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Andijon"];
  return (
    <div>
      <CitiesList cities={cities} />
    </div>
  );
}
export default App;

=============================
4-misol
import React from "react";
import MathOperations from "./Components/MathOperations";
function App() {
  return (
    <div>
      <MathOperations a={15} b={3} />
    </div>
  );
}
export default App;

=============================
5-misol
import React from "react";
import StyledText from "./Components/StyledText";

function App() {
  return (
    <div>
      <StyledText />
    </div>
  );
}
export default App;

=============================
6-misol
import React, { useState } from "react";
function App() {
  const products = ["olma", "banan", "uzum", "shaftoli", "apelsin"];
  const [productName, setProductName] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);

  const checkProduct = () => {
    const formattedInput = productName.trim().toLowerCase(); 
    setIsAvailable(products.includes(formattedInput));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mahsulotni Tekshirish</h1>
      <input
        type="text"
        placeholder="Mahsulot nomini kiriting..."
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={checkProduct} style={{ padding: "10px", fontSize: "16px" }}>
        Tekshirish
      </button>

      {isAvailable !== null && (
        <p style={{ fontSize: "20px", marginTop: "20px", color: isAvailable ? "green" : "red" }}>
          {isAvailable ? "Mahsulot mavjud ✅" : "Mahsulot mavjud emas ❌"}
        </p>
      )}
    </div>
  );
}
export default App;

=============================
7-misol
import React, { useState } from "react";
function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Obuna Bo‘lish</h1>
      <button
        onClick={() => setIsSubscribed(!isSubscribed)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: isSubscribed ? "red" : "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {isSubscribed ? "Obunani bekor qilish" : "Obuna bo'lish"}
      </button>
    </div>
  );
}
export default App;

=============================
8-misol
import React, { useState } from "react";
function App() {
  const [lang, setLang] = useState("uz");
  const greetings = {
    uz: "Salom!",
    en: "Hello!",
    ru: "Привет!",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{greetings[lang] || "Salom!"}</h1>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginTop: "10px" }}
      >
        <option value="uz">Uzbekcha 🇺🇿</option>
        <option value="en">English 🇬🇧</option>
        <option value="ru">Русский 🇷🇺</option>
      </select>
    </div>
  );
}
export default App;

=============================
9-misol
import React, { useState } from "react";
function App() {
  const names = ["Ali", "Sardor", "Madina", "Bobur", "Zilola", "Shoxrux"];
  const [filtered, setFiltered] = useState(false);
  const filteredNames = names.filter((name) => name.length > 5);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Barcha Ismlar</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {names.map((name, index) => (
          <li key={index} style={{ fontSize: "20px", margin: "5px 0" }}>
            {name}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setFiltered(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Filtrlash
      </button>

      {filtered && (
        <>
          <h2>5 Harfdan Uzun Ismlar</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredNames.map((name, index) => (
              <li key={index} style={{ fontSize: "20px", margin: "5px 0", color: "green" }}>
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default App;


=============================
10-misol
import React, { useState } from "react";
function App() {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rasm Korsatish</h1>

      {imgUrl ? (
        <img
          src={imgUrl}
          alt="Foydalanuvchi rasmi"
          style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
        />
      ) : (
        <p style={{ fontSize: "20px", color: "red" }}>Rasm topilmadi</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Rasm URL kiriting"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "250px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={() => setImgUrl("")}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Ochirish
        </button>
      </div>
    </div>
  );
}
export default App;

=============================
11-misol
import React, { useState } from "react";
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Tugma Rangini O‘zgartirish</h1>
      <button
        onClick={() => setIsActive(!isActive)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isActive ? "green" : "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {isActive ? "Faol" : "Nofaol"}
      </button>
    </div>
  );
}
export default App;

=============================
12-misol
import React from "react";
function App() {
  const user = {
    firstName: "Ali",
    lastName: "Karimov",
    age: 25
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Foydalanuvchi Malumotlari</h1>
      <p><strong>Ism:</strong> {user.firstName}</p>
      <p><strong>Familiya:</strong> {user.lastName}</p>
      <p><strong>Yosh:</strong> {user.age} yosh</p>
    </div>
  );
}
export default App;
=============================
13-misol

import React, { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);

  const checkNumber = () => {
    if (number > 0) return "Musbat raqam ✅";
    if (number < 0) return "Manfiy raqam ❌";
    return "Bu nol ⚫";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Raqamni Tekshirish</h1>
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseFloat(e.target.value) || 0)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "200px",
          marginBottom: "10px",
        }}
      />

      <h2 style={{ color: number > 0 ? "green" : number < 0 ? "red" : "gray" }}>
        {checkNumber()}
      </h2>
    </div>
  );
}
export default App;
*/

/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Footer } from "./Components/Footer";
function App() {
  {
    let num = 20;
  }
  return (
    <>
      <h2 style={{ border: "3px solid red", padding: "10px" }}>{num}</h2>
      <Footer />
    </>
  );
}
export default App;*/

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default App;