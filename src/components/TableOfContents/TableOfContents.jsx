"use client";

import React, { useState, useEffect } from "react";
import styles from "./tableofcontents.module.css";

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Group sections by main topics (h2) and their subtopics (h3)
  const groupedSections = sections.reduce((acc, section) => {
    if (section.level === 2) {
      acc.push({
        main: section,
        subtopics: [],
      });
    } else if (section.level === 3 && acc.length > 0) {
      acc[acc.length - 1].subtopics.push(section);
    }
    return acc;
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all h2 and h3 elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <span className={styles.toggleIcon}>
          {isOpen ? "✕" : "☰"}
        </span>
        <span className={styles.toggleText}>Table of Contents</span>
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <h3 className={styles.sidebarTitle}>On This Page</h3>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {groupedSections.map((group, index) => {
                const mainSection = group.main;
                const hasSubtopics = group.subtopics.length > 0;
                const isExpanded = expandedSections[mainSection.id];
                const isMainActive = activeSection === mainSection.id;
                const isSubtopicActive = group.subtopics.some(
                  (sub) => sub.id === activeSection
                );

                return (
                  <li key={mainSection.id} className={styles.mainItem}>
                    <div className={styles.mainItemWrapper}>
                      <button
                        onClick={() => scrollToSection(mainSection.id)}
                        className={`${styles.link} ${styles.mainLink} ${
                          isMainActive || isSubtopicActive ? styles.active : ""
                        }`}
                      >
                        <span className={styles.number}>{index + 1}.</span>
                        <span className={styles.linkText}>{mainSection.title}</span>
                      </button>
                      {hasSubtopics && (
                        <button
                          onClick={() => toggleSection(mainSection.id)}
                          className={styles.expandButton}
                          aria-label={
                            isExpanded ? "Collapse section" : "Expand section"
                          }
                        >
                          <span
                            className={`${styles.expandIcon} ${
                              isExpanded ? styles.expanded : ""
                            }`}
                          >
                            ▶
                          </span>
                        </button>
                      )}
                    </div>
                    {hasSubtopics && isExpanded && (
                      <ul className={styles.subList}>
                        {group.subtopics.map((subtopic, subIndex) => (
                          <li key={subtopic.id} className={styles.subItem}>
                            <button
                              onClick={() => scrollToSection(subtopic.id)}
                              className={`${styles.link} ${styles.subLink} ${
                                activeSection === subtopic.id
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              <span className={styles.number}>
                                {index + 1}.{subIndex + 1}
                              </span>
                              <span className={styles.linkText}>{subtopic.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;
