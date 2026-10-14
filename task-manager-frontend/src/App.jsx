import { useEffect, useState } from "react";
import "./App.css";

// const API = "https://backend.swatishaw1.tech/api/tasks";
const API = "http://localhost:8080/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTasks = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    });

    setTitle("");
    setDescription("");

    loadTasks();
  };

  const updateStatus = async (id, status) => {
    await fetch(`${API}/${id}/status?status=${status}`, {
      method: "PUT"
    });

    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    loadTasks();
  };

  return (
    <div className="app">

      <header>
        <h1>Task Manager</h1>
        <p>Manage your tasks easily</p>
      </header>

      <main>

        <section className="add-task">
          <h2>Add New Task</h2>

          <form onSubmit={addTask}>

            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="add-btn" type="submit">
              + Add Task
            </button>

          </form>
        </section>

        <section className="task-section">

          <h2>Your Tasks</h2>

          {tasks.length === 0 ? (
            <p className="empty">No tasks yet. Add your first task.</p>
          ) : (

            <div className="task-list">

              {tasks.map((task) => (

                <div className="task-card" key={task.id}>

                  <div className="task-info">

                    <h3>{task.title}</h3>

                    <p>
                      {task.description || "No description"}
                    </p>

                    <span className={`status ${task.status}`}>
                      {task.status}
                    </span>

                  </div>

                  <div className="actions">

                    <button
                      onClick={() =>
                        updateStatus(task.id, "IN_PROGRESS")
                      }
                    >
                      In Progress
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(task.id, "DONE")
                      }
                    >
                      Done
                    </button>

                    <button
                      className="delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;