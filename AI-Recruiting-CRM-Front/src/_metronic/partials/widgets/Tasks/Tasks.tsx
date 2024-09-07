import axios from "axios";
import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  friendly_name: string;
  no_of_leads: number;
  status: string;
  navigator_link: string;
  completed?: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [friendlyName, setFriendlyName] = useState("");
  const [navigatorLink, setNavigatorLink] = useState("");
  const [leads, setLeads] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://127.0.0.1:8000/api/task/")
      .then((response) => {
        console.log("Data fetched:", response.data.tasks);
        setTasks(response.data.tasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const handleAddTask = () => {
    if (friendlyName && navigatorLink && leads) {
      const taskExists = tasks.some(
        (task) => task.navigator_link === navigatorLink
      );
      if (taskExists) {
        alert("Task with this navigator link already exists.");
        return;
      }

      setLoading(true);
      axios
        .post(
          "http://127.0.0.1:8000/api/task/",
          {
            friendly_name: friendlyName,
            navigator_link: navigatorLink,
            no_of_leads: leads,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const newTask = response.data.task;
          setTasks([...tasks, newTask]);
          setFriendlyName("");
          setNavigatorLink("");
          setLeads("");
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error adding task:", error);
          setLoading(false);
        });
    } else {
      alert("All fields are required.");
    }
  };

  const handleDeleteSelected = () => {
    const selectedTaskIds = tasks
      .filter((task) => task.completed)
      .map((task) => task.id);
    axios
      .delete("http://127.0.0.1:8000/api/task/", {
        data: { task_ids: selectedTaskIds },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTasks(tasks.filter((task) => !task.completed));
      })
      .catch((error) => {
        console.error("Error deleting tasks:", error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row mb-10">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Friendly Name"
            value={friendlyName}
            onChange={(e) => setFriendlyName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Navigator Link"
            value={navigatorLink}
            onChange={(e) => setNavigatorLink(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="No. Of Leads"
            value={leads}
            onChange={(e) => setLeads(parseInt(e.target.value))}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={handleAddTask}
            disabled={loading}
          >
            {loading ? "Searching..." : "Add"}
          </button>
        </div>
      </div>

      <h5 className="text-center mb-3">PENDING TASKS</h5>

      <div className="table-responsive">
        <table
          className="table table-bordered table-hover"
          style={{ width: "100%" }}
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  onClick={(e) => {
                    const checked = e.target.checked;
                    setTasks(
                      tasks.map((task) => ({ ...task, completed: checked }))
                    );
                  }}
                />
              </th>
              <th scope="col">Friendly Name</th>
              <th scope="col" className="text-nowrap">
                Number of Leads
              </th>
              <th scope="col">Status</th>
              <th scope="col">Sales Navigator Link</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed || false}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id ? { ...t, completed: checked } : t
                        )
                      );
                    }}
                  />
                </td>
                <td>{task.friendly_name}</td>
                <td>{task.no_of_leads}</td>
                <td>{task.status === "completed" ? "Completed" : "Pending"}</td>
                <td>
                  <a
                    href={task.navigator_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {task.navigator_link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-3">
        <button className="btn btn-danger" onClick={handleDeleteSelected}>
          Delete Selected
        </button>
      </div>
    </div>
  );
};

export default Tasks;
