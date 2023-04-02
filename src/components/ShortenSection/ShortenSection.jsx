import "./ShortenSection.css";
import LinkInput from "./LinkInput";
import LinkContainer from "./LinkContainer";
import { useEffect, useState } from "react";
import axios from "axios";
const ShortenSection = () => {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const [links, setLinks] = useState([]);

  // Retrieving the links from local storage
  useEffect(() => {
    const localLinks = JSON.parse(localStorage.getItem("links"));
    if (localLinks) {
      setLinks(localLinks);
    }
  }, []);

  const saveLinks = (linksArr) => {
    const linksStr = JSON.stringify(linksArr);
    localStorage.setItem("links", linksStr);
  };

  const [copied, setCopied] = useState(-1);

  const copyLink = (shortink, index) => {
    navigator.clipboard.writeText(shortink);
    setCopied(index);
    setTimeout(() => setCopied(-1), 3000);
  };

  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";

  const handleClick = (e) => {
    if (inputText === "") {
      setMessage("Please enter a url!");
      e.preventDefault();
      return;
    }
    axios
      .get(baseUrl + inputText)
      .then((response) => {
        console.log(response);
        if (response.data.ok === true) {
          const result = response.data.result;
          const link = result.full_short_link;
          setLinks([{ original: inputText, short: link }, ...links]);

          // Save the new links array to the local storage
          saveLinks(links);
          // This works but doesn't save the most recent link because the
          // damn states aren't quick enough to update
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setInputText("");
    e.preventDefault();
  };

  return (
    <div className="container flow pad-block-700">
      <form
        onBlur={() => {
          saveLinks(links);
          // this is a safety measure so the most recent link also gets saved
          setMessage("");
        }}
      >
        <LinkInput
          inputText={inputText}
          setInputText={setInputText}
          message={message}
        />
        {message && (
          <em
            style={{
              color: "var(--clr-secondary-400)",
              textAlign: "left",
              fontSize: "1rem",
            }}
          >
            {message}
          </em>
        )}
        <button
          className="btn btn-shorten fw-bold"
          type="submit"
          onClick={handleClick}
        >
          Shorten it!
        </button>
      </form>
      {links.map((link, i) => (
        <LinkContainer
          link={link}
          copied={copied}
          copyLink={copyLink}
          index={i}
          key={link.short}
        />
      ))}
    </div>
  );
};

export default ShortenSection;
