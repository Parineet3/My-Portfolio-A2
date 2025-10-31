// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './src/about'
// import Contact from './src/contact'
// import Education from './src/education'
// import Project from './src/project'
// import Counter from './src/counter'
// import Layout from './components/Layout'
// const MainRouter = () => {
// return (<div>
// <Layout/>
// <Routes>
// <Route exact path="/" element={<Home />} />
// <Route exact path="/about" element={<About />} />
// <Route exact path="/education" element={<Education />} />
// <Route exact path="/project" element={<Project />} />
// <Route exact path="/contact" element={<Contact />} />
// <Route exact path="/counter" element={<Counter />} />
// </Routes>
// </div>
// )
// }
// export default MainRouter;


import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './src/pages/Home.jsx';  
import Layout from './src/components/Layout.jsx'; 
import About from './src/pages/About.jsx'
import Contact from './src/pages/Contact.jsx'
import Education from './src/pages/Education.jsx'
import Project from './src/pages/Project.jsx'
import Services from './src/pages/Services.jsx'


const MainRouter = () => {
  return (  
    <Routes>
      {/* Wrap everything in Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="project" element={<Project />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;