import React, { useState } from 'react';
import NavTabs from './navTabs';
import About from './pages/aboutMe';
import Project from './pages/projects';
import Contact from './pages/footer';
//import Email from "./pages/contactMe";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('aboutMe');
  
    
    const renderPage = () => {
      
      if (currentPage === 'aboutMe') {
        return <About />;
      }
      if (currentPage === 'displayProjects') {
        return <Project />;
      }
      return <Contact />;
    };
  
  
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}

export default PortfolioContainer;