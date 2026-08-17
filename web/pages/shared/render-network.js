/* ============================= KNOWLEDGE GRAPH ============================= */
function renderNetwork(svgId, DATA, nodeColorFn, legendDefs){
  const sirtColor = {sirt1:'#E8A33D',sirt2:'#9D8DF1',sirt3:'#58D68D',sirt4:'#3EC9A7',sirt5:'#F5A65B',sirt6:'#5DA8FF',sirt7:'#F283B2'};
  if(!nodeColorFn){
    nodeColorFn = function(id){
      if (sirtColor[id]) return sirtColor[id];
      return '#8b8bb0';
    };
  }

  const svg = document.getElementById(svgId);
  const ns = 'http://www.w3.org/2000/svg';
  const W = 1100, H = 560;

  const byId = {}; DATA.nodes.forEach(n=>byId[n.id]=n);
  const adj = {}; DATA.nodes.forEach(n=>adj[n.id]=new Set());
  DATA.edges.forEach(e=>{ if(adj[e.from])adj[e.from].add(e.to); if(adj[e.to])adj[e.to].add(e.from); });

  DATA.nodes.forEach((n,i)=>{
    n.x = W/2 + (Math.random()-0.5)*360;
    n.y = H/2 + (Math.random()-0.5)*260;
    n.vx=0; n.vy=0;
  });

  function step(){
    const k = 0.02, rep = 1400, spring = 0.08;
    DATA.nodes.forEach(a=>{
      DATA.nodes.forEach(b=>{
        if(a===b) return;
        let dx = a.x-b.x, dy = a.y-b.y;
        let d2 = dx*dx+dy*dy+0.01, d = Math.sqrt(d2);
        let f = rep/d2;
        a.vx += (dx/d)*f; a.vy += (dy/d)*f;
      });
      a.vx += (W/2 - a.x)*k*1.2; a.vy += (H/2 - a.y)*k*1.2;
      a.vx *= 0.6; a.vy *= 0.6;
    });
    DATA.edges.forEach(e=>{
      const a = byId[e.from], b = byId[e.to];
      let dx = b.x-a.x, dy = b.y-a.y, d = Math.sqrt(dx*dx+dy*dy)+0.001;
      let f = (d-70)*spring;
      a.vx += (dx/d)*f; a.vy += (dy/d)*f;
      b.vx -= (dx/d)*f; b.vy -= (dy/d)*f;
    });
    DATA.nodes.forEach(n=>{ n.x += n.vx; n.y += n.vy; n.x=Math.max(30,Math.min(W-30,n.x)); n.y=Math.max(30,Math.min(H-30,n.y)); });
  }
  for(let i=0;i<220;i++) step();

  function render(){
    const byId2 = {}; DATA.nodes.forEach(n=>byId2[n.id]=n);
    let edgeMarkup = '';
    DATA.edges.forEach(e=>{
      const a=byId2[e.from], b=byId2[e.to];
      edgeMarkup += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#2a2a4e" stroke-width="1" data-f="${e.from}" data-t="${e.to}"/>`;
    });
    svg.innerHTML = edgeMarkup;

    DATA.nodes.forEach(n=>{
      const r = 5 + Math.sqrt(n.degree)*3.2;
      const c = nodeColorFn(n.id);
      const g = document.createElementNS(ns,'g');
      g.setAttribute('data-id', n.id);
      g.setAttribute('class','n');
      g.style.cursor='grab';
      const circle = document.createElementNS(ns,'circle');
      circle.setAttribute('cx', n.x); circle.setAttribute('cy', n.y); circle.setAttribute('r', r);
      circle.setAttribute('fill', c); circle.setAttribute('fill-opacity', n.id.startsWith('sirt')?0.95:0.5);
      circle.setAttribute('stroke', c); circle.setAttribute('stroke-width', n.id.startsWith('sirt')?2:0.8);
      g.appendChild(circle);
      if (n.id.startsWith('sirt') || n.degree>=4){
        const t = document.createElementNS(ns,'text');
        t.setAttribute('x', n.x); t.setAttribute('y', n.y - r - 4); t.setAttribute('text-anchor','middle');
        t.setAttribute('font-size', n.id.startsWith('sirt')?'13':'10'); t.setAttribute('font-weight', n.id.startsWith('sirt')?'700':'400');
        t.setAttribute('fill', n.id.startsWith('sirt')?c:'#c9c9dd');
        t.textContent = n.label;
        g.appendChild(t);
      }
      g.addEventListener('mousedown', ev=>{
        ev.preventDefault();
        const svgRect = svg.getBoundingClientRect();
        const sx = (ev.clientX-svgRect.left)/svgRect.width*W, sy=(ev.clientY-svgRect.top)/svgRect.height*H;
        function m(ev2){
          const rect = svg.getBoundingClientRect();
          n.x = (ev2.clientX-rect.left)/rect.width*W; n.y=(ev2.clientY-rect.top)/rect.height*H;
          render();
        }
        function u(){ window.removeEventListener('mousemove',m); window.removeEventListener('mouseup',u); }
        window.addEventListener('mousemove',m); window.addEventListener('mouseup',u);
      });
      g.addEventListener('mouseenter', ev=>{
        svg.querySelectorAll('.n').forEach(x=>{ x.style.opacity=0.15; });
        g.style.opacity=1;
        const nb = adj[n.id]||new Set();
        svg.querySelectorAll('line').forEach(l=>{
          if (l.getAttribute('data-f')===n.id || l.getAttribute('data-t')===n.id){ l.setAttribute('stroke','#5a5a8a'); l.setAttribute('stroke-width','2'); }
        });
        svg.querySelectorAll('.n').forEach(x=>{ if(nb.has(x.getAttribute('data-id')) || x===g) x.style.opacity=1; });
        const neighbors = [...nb].map(id=>byId[id]?.label||id);
        showTip(`<b style="color:${c}">${n.label}</b><br>degree ${n.degree}<br><span style="color:var(--dim)">${neighbors.length?'connects to: '+neighbors.slice(0,14).join(', ')+(neighbors.length>14?', …':''):'no graph edges in subgraph'}</span>`);
      });
      g.addEventListener('touchstart', ev=>{
        const neighbors = [...(adj[n.id]||[])].map(id=>byId[id]?.label||id);
        tipTap(ev, `<b style="color:${c}">${n.label}</b><br>degree ${n.degree}<br><span style="color:var(--dim)">${neighbors.length?'connects to: '+neighbors.slice(0,14).join(', ')+(neighbors.length>14?', …':''):'no graph edges in subgraph'}</span>`);
      });
      g.addEventListener('mousemove', moveTip);
      g.addEventListener('mouseleave', ev=>{
        svg.querySelectorAll('.n').forEach(x=>{ x.style.opacity=1; });
        svg.querySelectorAll('line').forEach(l=>{ l.setAttribute('stroke','#2a2a4e'); l.setAttribute('stroke-width','1'); });
        hideTip();
      });
      g.addEventListener('click', ev=>{
        if(ev.detail>1) return;
        const nb = adj[n.id]||new Set();
        svg.querySelectorAll('.n').forEach(x=>{
          const id=x.getAttribute('data-id');
          x.style.opacity = (id===n.id||nb.has(id))?1:0.06;
        });
        svg.querySelectorAll('line').forEach(l=>{
          const on = l.getAttribute('data-f')===n.id||l.getAttribute('data-t')===n.id;
          l.setAttribute('stroke', on? '#5a5a8a':'#1a1a30'); l.setAttribute('stroke-width', on?'2':'0.6');
        });
      });
      svg.appendChild(g);
    });
    scaleDiagramText(svg);
  }
  render();

  document.getElementById('netStats').textContent = DATA.nodes.length + ' nodes · ' + DATA.edges.length + ' edges (web/data/graph.json)';
  const lg = document.getElementById('netLegend');
  lg.innerHTML = legendDefs.map(([c,l])=>`<span><span class="sw" style="background:${c}"></span> ${l}</span>`).join('');

  document.getElementById('netReset').addEventListener('click', ()=>{
    DATA.nodes.forEach(n=>{ n.x=W/2+(Math.random()-0.5)*360; n.y=H/2+(Math.random()-0.5)*260; n.vx=0; n.vy=0; });
    for(let i=0;i<220;i++) step();
    render();
  });
}
