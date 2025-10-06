import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './Todo.css';

export default function Todo() {
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");
const [completedMessage, setCompletedMessage] = useState("");

const { transcript, resetTranscript } = useSpeechRecognition();

useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("Your browser doesn't support voice recognition.");
    }
}, []);

useEffect(() => {
    if (transcript.trim() !== "") {
    addTask(transcript.trim());
    resetTranscript();
    }
}, [transcript]);

const addTask = (text) => {
    if (text.trim() !== "") {
    setTasks([...tasks, { id: Date.now(), text }]);
    }
};

const handleAdd = () => {
    addTask(input);
    setInput("");
};

const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
};

const handleDone = (id) => {
    const completedTask = tasks.find(task => task.id === id);
    if (completedTask) {
    setCompletedMessage(`✅ Task "${completedTask.text}" completed!`);
    setTasks(tasks.filter(task => task.id !== id));

    setTimeout(() => {
        setCompletedMessage("");
    }, 3000);
    }
};

const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
};

return (
    <div className="todo-container">
    <h1>GET THINGS DONE.!</h1>

    <div className="input-box">
        <input
        type="text"
        value={input}
        placeholder="What is The Task Today?"
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd} className="add-btn">Add Task</button>
    </div>

    <div className="voice-wrapper">
        <button onClick={startListening} className="voice-btn">🎙 Start Voice</button>
    </div>

    {transcript && (
        <p className="transcript">Heard: "{transcript}"</p>
    )}

    {completedMessage && (
        <div className="completed-message">{completedMessage}</div>
    )}

    <ul className="task-list">
        {tasks.map((task) => (
        <li key={task.id} className="task">
            <span>{task.text}</span>
            <div className="task-buttons">
            <button
                className="icon-btn"
                onClick={() => handleDone(task.id)}
                title="Done"
            >
                ✅
            </button>
            <button
                className="icon-btn"
                onClick={() => handleRemove(task.id)}
                title="Remove"
            >
                🗑️
            </button>
            </div>
        </li>
        ))}
    </ul>
    </div>
);
}
