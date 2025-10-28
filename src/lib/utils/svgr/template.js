const template = (variables, { tpl }) => {
  const updatedComponentName = variables.componentName.replace(/^Svg/, "")

  const traverseJSX = (node) => {
    if (node.type === "JSXElement" && node.openingElement.name.name === "path") {
      node.openingElement.attributes = [
        ...node.openingElement.attributes.filter((attr) => attr.name.name !== "fill"),
        {
          type: "JSXAttribute",
          name: { type: "JSXIdentifier", name: "fill" },
          value: { type: "JSXExpressionContainer", expression: { type: "Identifier", name: "fill" } },
        },
      ]
    }

    // Recursively process children
    if (node.children) {
      node.children.forEach(traverseJSX)
    }
  }

  // Traverse and update the JSX AST
  traverseJSX(variables.jsx)

  return tpl`
${variables.imports};

${variables.interfaces};

export default function ${updatedComponentName}({ fill = "currentColor", ...props }: SVGProps<SVGSVGElement>) {
  return (
    ${variables.jsx}
  );
}
`
}

export default template
