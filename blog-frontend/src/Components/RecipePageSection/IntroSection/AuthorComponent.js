const AuthorComponent = ({author, datePublished}) => {
  return (
    <div className="AuthorComponent">
      <span className="border-end pe-1 me-1">By {author}</span>
      <span className="ms-1">updated on {datePublished}</span>
    </div>
  );
}
export default AuthorComponent;