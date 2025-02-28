import React, { useState } from 'react';
import './mainPage.css'; // Подключаем стили
import ToDoAdd from "./toDoAdd";

function MainPage() {
  const [colors, setColors] = useState(Array(15).fill('gray'));
  const [responseMessage, setResponseMessage] = useState(""); // Храним ответ от сервера

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = newColors[index] === 'gray' ? 'blue' : 'gray';
    setColors(newColors);
  };

  // Функция отправки AJAX-запроса
  const handleSendRequest = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "Test Request", body: "Hello world!", userId: 1 }),
      });

      const data = await response.json(); // Читаем JSON-ответ
      setResponseMessage(`Response: ${JSON.stringify(data)}`); // Сохраняем в state
    } catch (error) {
      console.error("Error sending request:", error);
      setResponseMessage("Failed to send request.");
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>

      <div className="grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <ToDoAdd />

      {/* Кнопка отправки запроса */}
      <button className="sendButton" onClick={handleSendRequest}>
        Send Request
      </button>

      {/* Выводим ответ от сервера */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default MainPage;
