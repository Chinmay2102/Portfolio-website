import { useState } from "react";
import React from 'react'

const AddProject = () => {
    const [title, setTitle] = useState("");
    const [discription, setdiscription] = useState("");
    const [techStack, setTechStack] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("discription", discription); // ✅ FIXED spelling
    formData.append(
        "tech_stack",
        JSON.stringify(techStack.split(",").map(t => t.trim()))
    );

    if (image) {
        formData.append("image", image);
    }

    const response = await fetch("http://127.0.0.1:8000/api/projects/", {
        method: "POST",
        headers: {
        "Authorization": `Bearer ${token}`,
        },
        body: formData,
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
    setImage(null);
    setPreview(null);
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

            <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
            />
            <img src={preview} style={{maxWidth: "100%", maxHeight: "200px", border: "2px solid #ccc",borderRadius: "10px"}} />

            <button type="submit">Create Project</button>
        </form>
    </>
  )
}

export default AddProject

