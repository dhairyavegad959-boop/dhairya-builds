/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { NotionTemplatesSection } from './components/NotionTemplatesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PortfolioProject, ProjectCategory } from './data/portfolioData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#171717]">
      <Navbar />

      <main className="flex-1">
        <Hero onSelectProject={(project) => setActiveProject(project)} />

        <SelectedWork
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
          onSelectProject={(project) => setActiveProject(project)}
        />

        <Services
          onFilterCategory={(category) => setSelectedCategory(category)}
        />

        <NotionTemplatesSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <Analytics />
    </div>
  );
}
