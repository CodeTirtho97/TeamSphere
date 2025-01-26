import React, { useState } from "react";
import logo from "../assets/Logo_2.png"; // Import TeamSphere logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons"; // Import Google and Apple icons

const Login = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <div style={styles.logoContainer}>
                    <img
                        src={logo}
                        alt="TeamSphere Logo"
                        style={styles.logo}
                    />
                    <h1 style={styles.appName}>TeamSphere</h1>
                </div>
            </header>

            {/* Login Form Section */}
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Sign in to TeamSphere</h2>
                <p style={styles.subtitle}>
                    Use the email address you use for work.
                </p>

                {/* Social Login Buttons */}
                <button
                    style={styles.googleButton}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#b298dc")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#fff")
                    }
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        style={styles.socialIcon}
                    />
                    Sign In With Google
                </button>
                <button
                    style={styles.appleButton}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#b298dc")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#fff")
                    }
                >
                    <FontAwesomeIcon
                        icon={faApple}
                        style={styles.socialIcon}
                    />
                    Sign In With Apple
                </button>

                <div style={styles.orContainer}>
                    <hr style={styles.line} />
                    <span style={styles.orText}>OR</span>
                    <hr style={styles.line} />
                </div>

                {/* Email Login Form */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="you@work-email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button
                        type="submit"
                        style={styles.submitButton}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#4b00b3")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#6200ea")
                        }
                    >
                        Sign In With Email
                    </button>
                </form>

                <p style={styles.hint}>
                    We’ll email you a magic code for a password-free sign-in.
                </p>
            </div>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <a
                    href="#create-account"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Create an account
                </a>
                <a
                    href="#privacy"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Privacy & Terms
                </a>
                <a
                    href="#contact"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Contact Us
                </a>
            </footer>;
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #2b5876, #4e4376)",
    },
    header: {
        textAlign: "center",
        marginBottom: "2rem",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
    },
    logo: {
        width: "70px",
        height: "70px",
        borderRadius: "50%",
    },
    appName: {
        fontSize: "28px",
        color: "#fff",
        margin: 0,
    },
    formContainer: {
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "90%",
        maxWidth: "400px",
        textAlign: "center",
    },
    title: {
        fontSize: "20px",
        marginBottom: "1rem",
        fontWeight: "600",
    },
    subtitle: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "2rem",
    },
    googleButton: {
        width: "100%",
        padding: "0.8rem",
        marginBottom: "1rem",
        background: "#fff",
        color: "#000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        transition: "background-color 0.3s",
    },
    appleButton: {
        width: "100%",
        padding: "0.8rem",
        marginBottom: "1rem",
        background: "#fff",
        color: "#000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        transition: "background-color 0.3s",
    },
    socialIcon: {
        fontSize: "18px", // Adjust icon size
    },
    orContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1.5rem 0",
    },
    line: {
        flex: 1,
        height: "1px",
        background: "#ddd",
        margin: "0 1rem",
    },
    orText: {
        fontSize: "14px",
        color: "#555",
    },
    form: {
        marginBottom: "1.5rem",
    },
    input: {
        width: "100%",
        padding: "0.8rem",
        marginBottom: "1rem",
        borderRadius: "5px",
        border: "1px solid #ddd",
    },
    submitButton: {
        width: "100%",
        padding: "0.8rem",
        background: "#6200ea",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    hint: {
        fontSize: "12px",
        color: "#888",
    },
    footer: {
        marginTop: "2rem",
        textAlign: "center",
    },
    link: {
        margin: "0 1rem",
        fontSize: "18px",
        color: "#fff", // Default color
        textDecoration: "none",
        transition: "color 0.3s",
    },
    linkHover: {
        color: "#b298dc", // Hover color
    },
};

export default Login;
