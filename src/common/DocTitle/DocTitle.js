import ReactDOMServer from "react-dom/server";

const DocTitle = ({ children }) => {
  document.title = ReactDOMServer.renderToStaticMarkup(children);
  return null;
};

export default DocTitle;
