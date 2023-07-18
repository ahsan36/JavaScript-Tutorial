const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

console.log(headElementNode);