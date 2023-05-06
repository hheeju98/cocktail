import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SearchHeader.css";

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
    <header className="search_header">
      <div className="header_upper">
        <h1 className="header">Search Your Favorite Cocktail</h1>

        <div className="search_upper">
          <form onSubmit={handleSubmit} className="search_form">
            <input
              className="search_input"
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  );
}
