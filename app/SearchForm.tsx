"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { topicsData } from "./topik/data";

const DEFAULT_RECOMMENDATIONS = [
  "Diabetes Melitus",
  "Hipertensi",
  "Anemia",
  "Stroke",
  "TBC (Tuberkulosis)",
  "Demam Berdarah Dengue"
];

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flatten all unique topic names from topicsData
  const allTopicNames = useRef<string[]>([]);
  useEffect(() => {
    const names = new Set<string>();
    Object.values(topicsData).forEach((list) => {
      list.forEach((item) => {
        names.add(item.name);
      });
    });
    allTopicNames.current = Array.from(names).sort();
  }, []);

  // Filter suggestions based on query input
  useEffect(() => {
    if (!query.trim()) {
      setFilteredSuggestions(DEFAULT_RECOMMENDATIONS);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matched = allTopicNames.current.filter((name) =>
      name.toLowerCase().includes(lowerQuery)
    );

    // Limit to 6 suggestions for clean display
    setFilteredSuggestions(matched.slice(0, 6));
    setActiveIndex(-1); // Reset highlight when list changes
  }, [query]);

  // Click outside listener to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string) => {
    setQuery(value);
    setIsOpen(false);
    router.push(`/topik?search=${encodeURIComponent(value)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
        handleSelect(filteredSuggestions[activeIndex]);
      } else {
        // Submit search with raw query
        setIsOpen(false);
        router.push(`/topik?search=${encodeURIComponent(query)}`);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    router.push(`/topik?search=${encodeURIComponent(query)}`);
  };

  // Helper to render matched query characters in bold
  const renderSuggestionText = (text: string, queryStr: string) => {
    if (!queryStr.trim()) return <span>{text}</span>;

    const escapedQuery = queryStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <strong key={index} className="suggestion-match">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="search-form-container" ref={containerRef}>
      <form className="search-form" onSubmit={handleSubmit} role="search">
        <div className="search-input-wrapper">
          <label className="sr-only" htmlFor="keyword">
            Kata kunci
          </label>
          <input
            id="keyword"
            name="keyword"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Ketikan kata kunci Anda di sini"
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />

          {isOpen && filteredSuggestions.length > 0 && (
            <div className="search-suggestions">
              <div className="suggestions-header">
                {!query.trim() ? "Rekomendasi Pencarian" : "Saran Pencarian"}
              </div>
              <ul className="suggestions-list" role="listbox" id="search-suggestions-list">
                {filteredSuggestions.map((suggestion, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <li
                      key={suggestion}
                      role="option"
                      aria-selected={isActive}
                      className={`suggestion-item ${isActive ? "is-active" : ""}`}
                      onClick={() => handleSelect(suggestion)}
                      onMouseEnter={() => setActiveIndex(idx)}
                    >
                      <svg
                        className="suggestion-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      {renderSuggestionText(suggestion, query)}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <button type="submit">Cari</button>
      </form>
    </div>
  );
}
