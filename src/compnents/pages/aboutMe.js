import React from "react";

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
        background: "#b6e1ff",
        padding: "20px",
        borderRadius: "5px",
    },

    skillHeader: {
        fontSize: "2rem",
        color: "#4b0082",
        textAlign: "center",
        marginTop: "2rem",
    },

    skills: {
        fontSize: "1.2rem",
        color: "#4b0082",
        lineHeight: "1.6",
        background: "#b6e1ff",
        padding: "20px",
        borderRadius: "5px",
    }
};

function AboutMe() {
    return (
        <div style={styles.card}> 
            <h1 style={styles.header}> About Me</h1>
            <p style={styles.content}>Hello there! I'm a student at the Carlton Full Stack Web Development Bootcamp. I have a deep passion for web development and I'm excited about the opportunities it brings to solve real-world problems. In my free time, I enjoy spending time with pets, especially cats - their curiosity and independence never cease to amaze me.

One of my dreams is to travel the world and experience diverse cultures. I believe it widens one's perspective and enriches the mind. I look forward to bringing this diversity into my coding projects, creating applications that are usable by, and useful to, people from all walks of life.
            </p>

            <h2 style={styles.skillHeader}>My Skills</h2>
            <p style={styles.skills}>As a web developer, I am skilled in HTML, CSS, JavaScript, and various modern frameworks and libraries.</p>
        </div>
    );
}

export default AboutMe;
