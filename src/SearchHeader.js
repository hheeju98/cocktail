import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResult/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  );
}
