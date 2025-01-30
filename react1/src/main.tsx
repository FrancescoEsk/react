import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'
import HomePage from './pages/home/HomePage';
import ContactsPage from './pages/contacts/ContactsPage';
import ProjectsPage from './pages/projects/ProjectsPage';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
