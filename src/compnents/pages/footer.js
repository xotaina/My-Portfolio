import React, {useState} from "react"

const styles = {
    card : {
        margin: "2rem auto",
        width: "80%",
        background: "#d8b6ff",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        padding: "40px",
    },

    header: {
        fontSize: "2.5rem",
        color: "#4b0082",
        textAlign: "center",
        marginBottom: "1rem",
    },

    content: {
        fontSize: "1.2rem",
        color: "#4b0082",
        marginBottom: "1.5rem",
        lineHeight: "1.6",
    },

    label: {
        display: "block",
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },

    textBox: {
        width: "100%",
        padding: "10px",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "1px solid #ddd",
        marginBottom: "1rem",
    },

    button: {
        background: "#4b0082",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "1rem",
        cursor: "pointer",
    },

    link: {
        color: "#4b0082",
        textDecoration: "none",
        marginTop: "1rem",
        display: "inline-block",
    },
};

function ContactInfo() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div style={styles.card}>
            <h1 style={styles.header}> Contact Me</h1>
            <p style={styles.content}>You can reach me at tanisha.barreau101@gmail.com or you can send me a direct message using the form below:</p>
            
            <label style={styles.label}>Your Email</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={styles.textBox} 
                placeholder="Enter your email"
            />

            <label style={styles.label}>Your Message</label>
            <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                style={styles.textBox} 
                placeholder="Enter your questions or inquiries"
            />

            <button style={styles.button}>Submit</button>

            <p>Visit my GitHub:</p>
            <a href="https://github.com/xotaina" style={styles.link}> {"https://github.com/xotaina"}</a>
        </div>
    );
}

export default ContactInfo;
