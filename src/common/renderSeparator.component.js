export function renderSeparator() {
   const separatorElement = document.createElement("hr");
   separatorElement.style = "border: 2px dashed red"
   document.body.append(separatorElement)
}