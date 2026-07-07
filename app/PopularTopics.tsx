"use client";

import { useState } from "react";

export default function PopularTopics({ topics }: { topics: string[] }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <>
      {topics.map((topic) => (
        <a
          className={activeTopic === topic ? "active" : ""}
          href="#topik"
          key={topic}
          onClick={() => setActiveTopic(topic)}
        >
          {topic}
        </a>
      ))}
    </>
  );
}
