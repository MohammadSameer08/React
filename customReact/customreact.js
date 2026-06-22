function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    children: "Google",
  },
  children: "Click here to go to Google",
};

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
