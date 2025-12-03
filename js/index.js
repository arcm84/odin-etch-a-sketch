/* index.js */

console.log("test can you hear me?")

const container1 = document.querySelector("#container1");

for (let step = 1; step < 5; step++) {
  const div = document.createElement("div");

  div.setAttribute("style", "color: blue; background: grey;");
  div.setAttribute("id", `div${step}`);
  div.textContent = `This is div${step}`;

  container1.appendChild(div);
};
