const LinkContainer = ({ link, copied, index, copyLink }) => {
  return (
    <div className="link-container">
      <p className="original-link">{link.original}</p>
      <div className="short-link-wrapper ms-auto">
        <p className="short-link">{link.short}</p>
        <button
          className="btn btn-copy"
          onClick={() => copyLink(link.short, index)}
          style={{
            backgroundColor: copied == index && "var(--clr-primary-500)",
          }}
        >
          {copied == index ? "copied!" : "copy"}
        </button>
      </div>
    </div>
  );
};

export default LinkContainer;
