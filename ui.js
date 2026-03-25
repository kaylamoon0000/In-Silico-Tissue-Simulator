const select = document.getElementById("cellType");
const desc = document.getElementById("desc");

Object.keys(CELL_TYPES).forEach(key=>{
  const opt=document.createElement("option");
  opt.value=key;
  opt.textContent=key;
  opt.onmouseover=()=>desc.textContent=CELL_TYPES[key].description;
  select.appendChild(opt);
});

document.getElementById("toggle").onclick=()=>{
  running=!running;
};

document.getElementById("reset").onclick=()=>{
  cells.length=0;
  grid.forEach(r=>r.fill(0));
};
