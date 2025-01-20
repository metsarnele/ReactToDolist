import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // Hoidla ülesannete jaoks
  const [newTask, setNewTask] = useState(""); // Hoidla uue ülesande teksti jaoks

  // Funktsioon uue ülesande lisamiseks
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); // Tühjenda sisendväli pärast lisamist
    }
  };

  // Funktsioon ülesande kustutamiseks
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Funktsioon ülesande tehtuks märkimiseks
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>To-Do List</h1>

        {/* Uue ülesande sisestamise väli */}
        <input
            type="text"
            placeholder="Lisa uus ülesanne..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={addTask} style={{ padding: "10px 20px" }}>
          Lisa
        </button>

        {/* Ülesannete loetelu */}
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
          {tasks.map((task, index) => (
              <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
              >
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    style={{ marginRight: "10px" }}
                />
                <span style={{ flex: 1 }}>{task.text}</span>
                <button
                    onClick={() => deleteTask(index)}
                    style={{ marginLeft: "10px", padding: "5px 10px", color: "white", backgroundColor: "red", border: "none", cursor: "pointer" }}
                >
                  Kustuta
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
