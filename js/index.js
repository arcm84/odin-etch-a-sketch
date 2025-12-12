/* index.js */

console.log("test can you hear me?")

const masterContainer = document.querySelector("#master-container");

for (let stepc = 1; stepc < 50; stepc++) {
  const container = document.createElement("div");

  container.setAttribute("id", `container${stepc}`);

  for (let step = 1; step < 50; step++) {
    const div = document.createElement("div");

    div.setAttribute("id", `div${stepc}_${step}`);
    div.className = "pixel-default";

    /* to get the toggle effect to work, we need to use
    the onMouseEnter property. When the mouse enters the
    div, it changes from one style to another. When the 
    event happens again, it reverts back. This means there
    needs to be a `blank` and `filled` div style to switch
    between in the .css file.*/

    div.onmouseenter = function() {
      if (div.className == "pixel-default") {
        div.className = "pixel-highlight";
      } else {
        div.className = "pixel-default";
      };
    };

    container.appendChild(div);
  };
  masterContainer.appendChild(container);
};
