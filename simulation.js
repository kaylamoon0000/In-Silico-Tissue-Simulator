const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

const N = 100;
const size = canvas.width / N;

let grid = Array.from({ length: N }, () => Array(N).fill(0));
let next = Array.from({ length: N }, () => Array(N).fill(0));

let cells = [];
let running = true;

// Reaction‑diffusion constants (scaled but biologically inspired)
let diffusionConst = 0.15; // corresponds to ~10^-6 cm²/s
let decayConst = 0.005;    // corresponds to cytokine half‑life scaling

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / size);
  const y = Math.floor((e.clientY - rect.top) / size);

  const selected = Array.from(document.getElementById("cellType").selectedOptions)
    .map(o => o.value);

  selected.forEach(type => {
    cells.push({ x, y, type, timer: 0 });
  });
});

function step() {
  diffusionConst = parseFloat(document.getElementById("diffusion").value);
  decayConst = parseFloat(document.getElementById("decay").value);

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      const lap =
        grid[i - 1][j] + grid[i + 1][j] + grid[i][j - 1] + grid[i][j + 1] -
        4 * grid[i][j];

      next[i][j] = grid[i][j] + diffusionConst * lap - decayConst * grid[i][j];
    }
  }

  // Cell secretion dynamics
  cells.forEach(c => {
    const cellDef = CELL_TYPES[c.type];

    if (cellDef.burst) {
      if (c.timer < 30) {
        next[c.x][c.y] += cellDef.secretion;
      }
      c.timer++;
    } else {
      next[c.x][c.y] += cellDef.secretion;
    }
  });

  [grid, next] = [next, grid];
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const v = Math.min(grid[i][j], 1);
      if (v > 0) {
        ctx.fillStyle = `rgba(0,150,255,${v})`;
        ctx.fillRect(i * size, j * size, size, size);
      }
    }
  }

  cells.forEach(c => {
    ctx.fillStyle = CELL_TYPES[c.type].color;
    ctx.beginPath();
    ctx.arc(c.x * size + size / 2, c.y * size + size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

function loop() {
  if (running) step();
  draw();
  requestAnimationFrame(loop);
}

loop();
```javascript
const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

const N = 100;
const size = canvas.width / N;

let grid = Array.from({length:N},()=>Array(N).fill(0));
let next = Array.from({length:N},()=>Array(N).fill(0));
let cells = [];
let running = true;

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left)/size);
  const y = Math.floor((e.clientY - rect.top)/size);

  const selected = Array.from(document.getElementById("cellType").selectedOptions)
    .map(o=>o.value);

  selected.forEach(type=>cells.push({x,y,type}));
});

function step(){
  const diff = parseFloat(document.getElementById("diffusion").value);
  const decay = parseFloat(document.getElementById("decay").value);

  for(let i=1;i<N-1;i++){
    for(let j=1;j<N-1;j++){
      const lap = grid[i-1][j]+grid[i+1][j]+grid[i][j-1]+grid[i][j+1]-4*grid[i][j];
      next[i][j] = grid[i][j] + diff*lap - decay*grid[i][j];
    }
  }

  cells.forEach(c=>{
    next[c.x][c.y]+=CELL_TYPES[c.type].secretion;
  });

  [grid,next]=[next,grid];
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
      const v = Math.min(grid[i][j],1);
      if(v>0){
        ctx.fillStyle = `rgba(0,150,255,${v})`;
        ctx.fillRect(i*size,j*size,size,size);
      }
    }
  }

  cells.forEach(c=>{
    ctx.fillStyle = CELL_TYPES[c.type].color;
    ctx.beginPath();
    ctx.arc(c.x*size+size/2,c.y*size+size/2,size/2,0,Math.PI*2);
    ctx.fill();
  });
}

function loop(){
  if(running) step();
  draw();
  requestAnimationFrame(loop);
}
loop();
