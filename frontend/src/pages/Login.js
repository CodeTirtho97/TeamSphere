import React, { useState } from "react";

const Login = () => {
    // State for form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Later, we'll send these details to the backend API
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
            <form onSubmit={handleSubmit} style={{ padding: "2rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h2 style={{ marginBottom: "1rem", textAlign: "center", color: "#333" }}>Login to TeamSphere</h2>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "4px", border: "1px solid #ddd" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "4px", border: "1px solid #ddd" }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: "100%", padding: "0.8rem", border: "none", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
