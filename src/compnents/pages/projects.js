import React from "react";

const projects = [
    {
        id: 1,
        name: 'Giphy Travel Guide',
        text: 'Giphy travel guide allow user to see different travel destination and be presented with gif',
        technologies: 'JavaScript, html, css',
        deployed: true,
        github: 'https://github.com/mdeluca13/giphy-travel-guide',
        description: 'Giphy Travel Guide allows you to search different travel destinations and be presented with gifs related to your searched destination.'
    },
    {
        id: 2,
        name: 'SocialApp',
        text: 'A site for user to interact with different communities',
        technologies: 'JavaScript, html, css, react',
        deployed: true,
        github: 'https://github.com/Walsh-Vaz/Social-App',
        description: 'SocialApp a social media application that allows users to connect, share, and interact with each other through posts, likes, and comments. '
    }
];

const styles = {
    card : {
        margin: 40,
        background: "#d8b6ff",
        padding: 60,
        borderRadius: "20px"
    },
    projectContainer: {
        background: "#b6e1ff",
        margin: 20,
        padding: 20,
        borderRadius: "15px"
    },
    header: {
        color: "#4b0082",
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: 20
    },
    content: {
        color: "#4b0082",
        fontSize: "1.2rem",
        marginBottom: 10
    },
    link: {
        color: "#4b0082",
        fontSize: "1rem",
        textDecoration: "none",
    },
};

function DisplayProjects() {
    return (
        <div style={styles.card}>
            <h1 style={styles.header}>My Projects</h1>
            {projects.map((project) => {
                return (
                    <div style={styles.projectContainer} key={project.id}>
                        <h2>{project.name}</h2>
                        <p style={styles.content}>{project.description}</p>
                        <a href={project.github} style={styles.link}>View on GitHub</a>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayProjects;
