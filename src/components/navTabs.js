import React from 'react';

const styles = {
  ul : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "3px, 10px",
    listStyleType: "none",
  },

  li: {
    display: "block",
    fontSize: "1.5rem",
    marginLeft: 30,
    marginRight: 40,
  },

  a: {
    color: "#4b0082",
    textDecoration: "none",
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style = {styles.ul}>
      <li style={styles.li}>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          style={styles.a}
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          Taina Barreau
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          style={styles.a}
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#projects"
          onClick={() => handlePageChange('displayProjects')}
          style={styles.a}
          className={currentPage === 'displayProjects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#footer"
          onClick={() => handlePageChange('contactInfo')}
          style={styles.a}
          className={currentPage === 'contactInfo' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="https://drive.google.com/file/d/1EDhu4EbiGgZA9AVDTS33O5KmIuGpHVKv/view?usp=drive_link"
          style={styles.a}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
