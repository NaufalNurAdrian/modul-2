interface RichTextNode {
    nodeType: number;
    value?: string;
    content?: RichTextNode[];
  }
  
  const extractPlainText = (document: RichTextNode): string => {
    let text = "";
  
    const traverseNode = (node: RichTextNode) => {
      if (node.nodeType === 3) {
        text += node.value;
      } else if (node.content) {
        node.content.forEach(traverseNode);
      }
    };
  
    traverseNode(document);
    return text.trim();
  };
  