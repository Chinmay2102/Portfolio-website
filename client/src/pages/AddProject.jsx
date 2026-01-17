import { useState } from "react";
import React from 'react'

const AddProject = () => {
    const [title, setTitle] = useState("");
    const [discription, setdiscription] = useState("");
    const [techStack, setTechStack] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem("accessToken");

    if (!token) {
        setError("You must be logged in");
        return;
    }

    const response = await fetch("http://127.0.0.1:8000/api/projects/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
        title,
        discription,
        tech_stack: techStack.split(",").map(t => t.trim()),
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        setError("Failed to create project");
        return;
    }

    setSuccess("Project created successfully");
    setTitle("");
    setdiscription("");
    setTechStack("");
    };


  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>Add Project</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <input
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
            placeholder="Project discription"
            value={discription}
            onChange={(e) => setdiscription(e.target.value)}
            />

            <input
            placeholder="Tech Stack (comma separated)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            />

            <button type="submit">Create Project</button>
        </form>
    </>
  )
}

export default AddProject

