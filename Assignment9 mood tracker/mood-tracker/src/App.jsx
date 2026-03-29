import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div style={{
      textAlign: "center",
      marginTop: "80px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "40px" }}>Mood Tracker 😊</h1>

      <div style={{ margin: "20px" }}>
        <button onClick={() => setMood("Happy")} style={{ margin: "5px" }}>😊 Happy</button>
        <button onClick={() => setMood("Sad")} style={{ margin: "5px" }}>😢 Sad</button>
        <button onClick={() => setMood("Excited")} style={{ margin: "5px" }}>🤩 Excited</button>
        <button onClick={() => setMood("Angry")} style={{ margin: "5px" }}>😡 Angry</button>
        <button onClick={() => setMood("")} style={{ marginTop: "10px" }}>
          Reset 🔄
        </button>
      </div>

      <h2>Current Mood: {mood}</h2>

      <p>
        {mood === "Happy" && "Keep smiling! 😊"}
        {mood === "Sad" && "Stay strong 💙"}
        {mood === "Excited" && "Enjoy the moment 🎉"}
        {mood === "Angry" && "Take a deep breath 😌"}
      </p>
    </div>
  );
}

export default App;