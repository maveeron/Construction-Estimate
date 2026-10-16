/* ---------- data ---------- */
const FIN=[
 {k:'Standard Finish',c:'var(--std)',lvl:'Practical and economical',d:'Practical, durable, economical finishes for budget-conscious residential construction.'},
 {k:'Elegant Finish',c:'var(--ele)',lvl:'Enhanced and refined',d:'Enhanced materials, refined detailing and upgraded finishes for premium residential projects.'},
 {k:'Luxury Finish',c:'var(--lux)',lvl:'High-end and detailed',d:'High-end architectural materials, premium specifications and detailed workmanship.'}];
const TR=["General requirements and site preparation","Earthworks and excavation","Concrete works","Reinforcing steel","Formworks and scaffolding","Masonry and CHB works","Structural steel and metal works","Roofing and waterproofing","Architectural finishes","Doors, windows, and glazing","Ceiling and partition works","Painting and protective coatings","Plumbing and sanitary works","Electrical works","Lighting, power, and data","Fire protection and detection systems","Mechanical and ventilation works","Site development and external works","Fixed architectural fixtures and built-in cabinetry","Testing, commissioning, and turnover"];
const a3=x=>Array.isArray(x)?x:[x,x,x];
const r=(t,n,spec,u,q,w,m,l,e,c)=>({t,n,spec:a3(spec),u,q:a3(q),w,m:a3(m),l:a3(l),e:a3(e),c:c||'',sup:'',rem:''});
const DEF=()=>[
r(1,'Mobilization and temporary facilities','Mobilization, temporary water and power, bunkhouse, signage, safety provisions','sqm','A',0,220,120,60),
r(1,'Site clearing','Clearing and grubbing, layout and staking','sqm','fp*1.5',0,0,90,25),
r(2,'Excavation','Footing and trench excavation, hauling of spoils','m3','fp*0.9',0,0,320,280),
r(2,'Backfill and compaction','Selected fill, compaction to specified density','m3','fp*0.5',0,0,180,120),
r(3,'Structural concrete','Ready-mix concrete, 3000 psi per approved structural design','m3','A*0.19',3,8200,2400,650),
r(4,'Reinforcing steel','Deformed bars, Grade 40/60, tie wire, per structural plan','kg','A*21',5,58,12,2),
r(5,'Formworks and scaffolding','Phenolic/coco lumber forms, falsework and scaffolding','sqm','A*1.8',10,380,260,40),
r(6,'CHB wall','CHB 4in/6in with mortar and vertical/horizontal reinforcement','sqm','net',5,390,260,20),
r(6,'Cement plaster','Both faces, cement plaster finish, scratch and final coat','sqm','net*2',5,140,170,15),
r(7,'Structural steel','Trusses, purlins, girts, fabricated and painted','kg','A*6',3,95,28,10),
r(7,'Railings and metal works','Stair and balcony railings, grills','lm','(F-1)*8+6',3,[3200,6500,14500],[900,1400,2600],60),
r(8,'Roofing','Pre-painted roof sheets, flashings, insulation, gutters','sqm','roofA',8,[650,890,1450],[220,260,380],35),
r(8,'Waterproofing','Wet areas and roof deck waterproofing system','sqm','baths*9+fp*0.15',5,[320,480,780],[180,240,360],0),
r(9,'Floor tiles','Ceramic/porcelain floor tiles, adhesive, grout','sqm','A*0.8',10,[680,1450,3800],[450,620,950],25),
r(9,'Bathroom wall tiles','Wall tiles to full height in wet areas','sqm','baths*24',10,[650,1300,3200],[480,650,950],20),
r(9,'Feature wall finishes','Feature wall panels, cladding or stone as specified','sqm',['0','A*0.05','A*0.10'],8,[0,2800,6500],[0,900,1800],0,'U'),
r(9,'Facade finishes','Selected facade cladding and architectural finishes','sqm',['0','net*0.1','net*0.25'],8,[0,1800,4800],[0,650,1400],0,'U'),
r(10,'Main door','Main entrance door with lockset and hardware','set','1',0,[8500,24000,85000],[1500,3500,9000],0),
r(10,'Interior doors','Interior doors, jambs, hinges and locksets','set','doors',0,[3800,9000,24000],[900,1600,3200],0),
r(10,'Aluminum windows and glazing','Aluminum frame windows, glass per specification','sqm','win*1.6',3,[3200,5200,9800],[650,900,1500],0),
r(11,'Ceiling','Gypsum or fiber cement board ceiling on metal furring','sqm','A*0.85',8,[520,680,980],[260,360,520],10),
r(11,'Cove and indirect lighting details','Cove detail and concealed lighting provisions','lm',['0','A*0.25','A*0.5'],5,[0,650,1600],[0,350,700],0,'U'),
r(12,'Painting','Primer, putty and paint system, interior and exterior','sqm','net*2+A*0.85',8,[95,170,380],[110,150,240],5),
r(13,'Water closet set','Water closet with fittings','set','baths',0,[4800,14500,42000],[1200,1800,3200],0),
r(13,'Lavatory and faucet','Lavatory with faucet and accessories','set','baths',0,[2800,8500,28000],[800,1200,2200],0),
r(13,'Shower set','Shower fittings and enclosure provisions','set','baths',0,[1800,6500,32000],[700,1100,2600],0),
r(13,'Water supply and sanitary piping','PVC/PPR piping, fittings, cleanouts, vents','sqm','A',5,420,260,25),
r(14,'Wiring and conduits','THHN wires, PVC conduits, junction boxes','sqm','A',5,780,520,30),
r(14,'Panel boards and breakers','Main and sub panel boards, breakers, grounding','set','F+1',0,[12000,18000,32000],[4500,5500,8000],0),
r(15,'Lighting fixtures','Light fixtures and lamps per lighting plan','pt','ceil(A/4)',0,[450,1100,3200],[250,320,520],0),
r(15,'Outlets and switches','Convenience outlets and switches, plates','pt','ceil(A/3.5)',3,[210,420,980],[180,240,380],0),
r(15,'Data and TV provisions','Conduits and outlets for data and TV','pt','rooms*2',0,420,260,0),
r(16,'Fire detection and extinguishers','Smoke detectors, alarm provisions, extinguishers','set','ceil(A/70)',0,[2500,3200,4200],[450,500,650],0),
r(17,'Exhaust fans','Exhaust fans and ducting for wet areas and kitchen','unit','baths+1',0,[1800,3500,7800],[500,650,900],0),
r(17,'Air conditioning provisions','Refrigerant piping, drain lines, electrical provisions','set','rooms',0,[4500,6500,9500],[2200,2800,3600],0),
r(18,'Pavement and driveway','Concrete or paver pavement','sqm','site',8,[750,1450,3500],[420,620,1100],60),
r(18,'Drainage','Perimeter drainage, catch basins and pipes','lm','P*0.8',5,950,420,80),
r(19,'Kitchen countertop and fixed cabinets','Fixed base and wall cabinets with countertop','lm','kit',3,[8500,16500,38000],[2500,4000,7000],0),
r(19,'Built-in wardrobes','Fixed built-in wardrobe, carcass and doors','sqm','rooms*2.2',3,[6500,12000,26000],[1800,2800,4500],0),
r(19,'Fixed bathroom vanities','Fixed vanity cabinet with top','unit','baths',0,[5500,14000,36000],[1200,1800,2800],0),
r(20,'Testing and commissioning','Pressure, electrical and leak tests, commissioning','sqm','A',0,0,70,15),
r(20,'Cleaning and turnover','Final cleaning, punch list, as-built documents','sqm','A',0,35,60,10)
];
const PF=[['name','Project name','text'],['client','Client','text'],['loc','Location','text'],['A','Total floor area (sqm)','number'],['F','Number of floors','number'],['P','Building perimeter (m)','number'],['H','Floor-to-floor wall height (m)','number'],['doors','Interior doors','number'],['win','Windows','number'],['baths','Bathrooms','number'],['rooms','Bedrooms/rooms','number'],['kit','Fixed kitchen cabinet length (m, 0 = not in scope)','number'],['site','Paved site area (sqm)','number']];
const CF=[['reg','Location price factor','sel',[['0.92','Provincial Luzon (0.92)'],['1','Calabarzon / Cavite (1.00)'],['1.08','Metro Manila (1.08)'],['1.05','Cebu / Davao (1.05)'],['1.15','Island / remote site (1.15)']]],['matAdj','Material price adjustment (% vs base rates)','number'],['labAdj','Labor rate adjustment (%)','number'],['markup','Contractor markup (%)','number'],['hideMk','Contractor markup display','sel',[['no','Show separately'],['yes','Hide: include in material, labor and equipment rates']]],['vat','VAT rate (%)','number'],['vatBase','VAT taxable base','sel',[['sub','Construction subtotal'],['mat','Materials share of subtotal']]],['other','Other construction charges (PHP)','number'],['feeM','Design fee method','sel',[['fixed','Fixed fee'],['sqm','Per square meter'],['pct','% of construction price'],['custom','Custom amount']]],['feeV','Design fee value','number'],['combined','Contract type','sel',[['no','Separate design fee'],['yes','Combined contract']]],['pfees','Other project fees (PHP)','number']];
const NEWP=()=>({id:'p'+Date.now(),name:'New Residence',client:'',loc:'',A:180,F:2,P:40,H:2.8,doors:7,win:9,baths:3,rooms:4,kit:5,site:80,finish:0,view:0,reg:'1',hideMk:'no',matAdj:0,labAdj:0,markup:20,vat:12,vatBase:'sub',other:0,feeM:'pct',feeV:8,combined:'no',pfees:0,items:DEF()});

/* ---------- state and storage ---------- */
let P,store={},mem={};
const ls={g:k=>{try{return localStorage.getItem(k)}catch(e){return mem[k]||null}},s:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){mem[k]=v}}};
function load(){try{store=JSON.parse(ls.g('bcph_projects')||'{}')}catch(e){store={}}
 P=store[ls.g('bcph_cur')]||Object.values(store)[0]||NEWP();}
function save(){store[P.id]=P;ls.s('bcph_projects',JSON.stringify(store));ls.s('bcph_cur',P.id)}

/* ---------- calculation ---------- */
const DF=p=>p.hideMk==='yes'?1+p.markup/100:1;
const money=n=>'₱'+Math.round(n).toLocaleString('en-PH');
const num=n=>(+n||0).toLocaleString('en-PH',{maximumFractionDigits:2});
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function vars(p){const fp=p.A/Math.max(1,p.F),w=p.P*p.H*p.F;
 return{A:+p.A,F:+p.F,fp,P:+p.P,H:+p.H,wallA:w,net:Math.max(0,w-p.doors*1.9-p.win*1.4),roofA:fp*1.18,doors:+p.doors,win:+p.win,baths:+p.baths,rooms:+p.rooms,kit:+p.kit,site:+p.site}}
function qty(it,fi,v){try{return +new Function('v','with(v){return ('+it.q[fi]+')}')(v)||0}catch(e){return 0}}
function calc(p,fi){const v=vars(p),RF=+p.reg||1,MA=1+(+p.matAdj||0)/100,LA=1+(+p.labAdj||0)/100;let mat=0,lab=0,eq=0;const lines=[],tr=TR.map(()=>0);let upg=0;
 p.items.forEach(it=>{const q=qty(it,fi,v),m=q*it.m[fi]*(1+it.w/100)*MA*RF,l=q*it.l[fi]*LA*RF,e=q*it.e[fi]*RF,tot=m+l+e;
  mat+=m;lab+=l;eq+=e;tr[it.t-1]+=tot;if(it.c==='U')upg+=tot;lines.push({it,q,tot,unit:(it.m[fi]*(1+it.w/100)*MA+it.l[fi]*LA+it.e[fi])*RF})});
 const direct=mat+lab+eq,markup=direct*p.markup/100,sub=direct+markup;
 const base=p.vatBase==='mat'?(direct?sub*mat/direct:0):sub,vat=base*p.vat/100;
 let price=sub+vat+ +p.other,A=+p.A||1;
 const fee=p.feeM==='fixed'||p.feeM==='custom'?+p.feeV:p.feeM==='sqm'?p.feeV*A:price*p.feeV/100;
 if(p.combined==='yes')price+=fee;
 const total=p.combined==='yes'?price+ +p.pfees:price+fee+ +p.pfees;
 const hid=p.hideMk==='yes',f=hid?1+p.markup/100:1;
 if(hid){lines.forEach(L=>{L.tot*=f;L.unit*=f});tr.forEach((x,i)=>tr[i]=x*f)}
 return{hid,mat:mat*f,lab:lab*f,eq:eq*f,direct:direct*f,markup:hid?0:markup,sub,vat,price,perSqm:price/A,fee,total,tr,lines,upg:upg*f}}

/* ---------- rendering ---------- */
const $=s=>document.querySelector(s);
const NEG=['matAdj','labAdj'],SL={A:[40,1000,5],markup:[0,40,1],vat:[0,20,0.5],matAdj:[-30,50,1],labAdj:[-30,50,1]};
function fields(box,defs){$(box).innerHTML=defs.map(([k,l,t,o])=>`<div><label>${l}${t==='sel'?`<select data-k="${k}">${o.map(x=>`<option value="${x[0]}"${P[k]===x[0]?' selected':''}>${x[1]}</option>`).join('')}</select>`:`<input data-k="${k}" type="${t}" step="any" ${NEG.includes(k)?'':'min="0"'} value="${esc(P[k])}">`+(SL[k]?`<input data-k="${k}" type="range" min="${SL[k][0]}" max="${SL[k][1]}" step="${SL[k][2]}" value="${esc(P[k])}">`:'')}</label></div>`).join('')}
function renderProject(){refreshLive();fields('#pf',PF);fields('#cf',CF);
 $('#fin').innerHTML=FIN.map((f,i)=>`<label class="${P.finish===i?'sel':''}"><input type="radio" name="fin" data-fin="${i}"${P.finish===i?' checked':''}><b>${f.k}</b><p>${f.d}</p></label>`).join('');
 $('#plist').innerHTML='<tr><th>Project</th><th>Client</th><th class="n">Area</th><th>Finish</th><th class="n">Construction price</th><th></th></tr>'+Object.values(store).map(p=>`<tr><td>${esc(p.name)}${p.id===P.id?' <span class="tag">open</span>':''}</td><td>${esc(p.client)}</td><td class="n">${num(p.A)} sqm</td><td>${FIN[p.finish].k}</td><td class="n">${money(calc(p,p.finish).price)}</td><td><button class="b alt" data-act="open" data-id="${p.id}">Open</button> <button class="b alt" data-act="del" data-id="${p.id}">Delete</button></td></tr>`).join('')}
function sumStrip(c,A){return[[c.hid?'Construction cost (markup included in rates)':'Direct construction cost',c.direct],...(c.hid?[]:[['Contractor markup ('+P.markup+'%)',c.markup]]),['VAT ('+P.vat+'%)',c.vat],['Construction price',c.price],['Per sqm',c.perSqm],['Total project investment',c.total]].map(x=>`<div><span>${x[0]}</span><b>${money(x[1])}</b></div>`).join('')}
function renderBoq(){const fi=P.view,c=calc(P,fi),D=DF(P);
 $('#boqbar').innerHTML=FIN.map((f,i)=>`<button class="b ${i===fi?'go':'alt'}" data-act="gen${i}">${f.k}</button>`).join('')+'<button class="b alt" data-act="csv">Download this BOQ (CSV)</button><input id="flt" placeholder="Filter items or trades" style="max-width:260px" value="'+esc(FLT)+'"><label style="align-self:center"><input type="checkbox" id="nz" style="width:auto"> Hide zero-quantity lines</label><label style="align-self:center"><input type="checkbox" id="hmk" style="width:auto"'+(P.hideMk==='yes'?' checked':'')+'> Hide contractor markup (include in rates)</label>';
 $('#boqsum').innerHTML=sumStrip(c);
 let h='<tr><th>Item</th><th>Specification</th><th>Unit</th><th class="n">Qty</th><th>Takeoff formula</th><th class="n">Material</th><th class="n">Labor</th><th class="n">Equipment</th><th class="n">Waste %</th><th class="n">Direct unit cost</th><th class="n">Line amount</th><th>Finish class</th><th>Supplier / quotation ref</th><th>Remarks and exclusions</th><th></th></tr>',last=0,k=0;
 ord(c).forEach(i=>{const L=c.lines[i],it=L.it;if(it.t!==last){last=it.t;k=0;h+=`<tr class="t"><td colspan="11">${it.t}. ${TR[it.t-1]}</td><td colspan="4" class="n" id="t${it.t}">${money(c.tr[it.t-1])}</td></tr>`}
  k++;const cls=it.sp?'Special item':it.c==='U'?(fi?'Upgrade scope':'Not in Standard'):(it.spec[0]!==it.spec[1]||it.m[0]!==it.m[1]?'Finish-dependent':'Common');
  const inp=(f,v,w,t)=>`<input data-i="${i}" data-f="${f}" value="${esc(v)}" style="width:${w}px" ${t||''}>`;
  h+=`<tr data-zero="${L.q===0?1:0}" data-s="${esc((it.n+' '+TR[it.t-1]).toLowerCase())}"><td>${it.t}.${k} ${esc(it.n)}</td><td>${inp('spec',it.spec[fi],260)}</td><td>${it.u}</td><td class="n" id="q${i}">${num(L.q)}</td><td>${inp('q',it.q[fi],110)}</td><td>${inp('m',+(it.m[fi]*D).toFixed(2),74,'type=number')}</td><td>${inp('l',+(it.l[fi]*D).toFixed(2),74,'type=number')}</td><td>${inp('e',+(it.e[fi]*D).toFixed(2),64,'type=number')}</td><td>${inp('w',it.w,50,'type=number')}</td><td class="n" id="u${i}">${money(L.unit)}</td><td class="n" id="l${i}"><b>${money(L.tot)}</b></td><td><span class="tag">${cls}</span></td><td>${inp('sup',it.sup,130,'placeholder="Quote ref"')}</td><td>${inp('rem',it.rem,170)}</td><td>${it.sp?`<button class="b alt" data-act="rmsp" data-i="${i}">Remove</button>`:''}</td></tr>`});
 $('#boq').innerHTML=h;bars('#bars',[c]);applyFlt()}
function renderCompare(){const C=FIN.map((f,i)=>calc(P,i));
 $('#cards').innerHTML=FIN.map((f,i)=>{const c=C[i],d=c.price-C[0].price;
  const ups=i?c.lines.map((L,j)=>({n:L.it.n,d:L.tot-C[0].lines[j].tot})).filter(x=>x.d>0).sort((a,b)=>b.d-a.d).slice(0,5):[];
  return`<div class="card" style="--c:${f.c}"><h3>${f.k}</h3><div class="d">${f.d}<br><i>Specification level: ${f.lvl}</i></div>
  <dl><dt>${c.hid?'Construction cost (markup in rates)':'Direct construction cost'}</dt><dd>${money(c.direct)}</dd>${c.hid?'':`<dt>Contractor markup (${P.markup}%)</dt><dd>${money(c.markup)}</dd>`}<dt>Applicable VAT (${P.vat}%)</dt><dd>${money(c.vat)}</dd>
  <dt><b>Total construction price</b></dt><dd class="big">${money(c.price)}</dd><dt>Cost per square meter</dt><dd>${money(c.perSqm)}</dd>
  <dt>Cost difference vs Standard</dt><dd class="${d>0?'pos':''}">${i?'+'+money(d)+' ('+(C[0].price?(d/C[0].price*100).toFixed(1):0)+'%)':'Baseline'}</dd>
  <dt>Separate upgrade scope</dt><dd>${money(c.upg)}</dd>
  <dt>Architectural design fee${P.combined==='yes'?' (in contract)':''}</dt><dd>${money(c.fee)}</dd><dt><b>Total project investment</b></dt><dd><b>${money(c.total)}</b></dd></dl>
  <h3>Key material upgrades</h3><ul>${ups.length?ups.map(x=>`<li>${esc(x.n)}: +${money(x.d)}</li>`).join(''):'<li>Baseline specification</li>'}</ul>
  <div class="row"><button class="b alt" data-act="gen${i}">Open BOQ</button><button class="b" data-act="csv${i}">Download detailed BOQ</button></div></div>`}).join('');
 bars('#cbars',C);
 $('#trade').innerHTML='<tr><th>Trade</th>'+FIN.map(f=>`<th class="n">${f.k}</th>`).join('')+'<th class="n">Elegant diff</th><th class="n">Luxury diff</th></tr>'+TR.map((t,i)=>`<tr><td>${i+1}. ${t}</td>${C.map(c=>`<td class="n">${money(c.tr[i])}</td>`).join('')}<td class="n">${money(C[1].tr[i]-C[0].tr[i])}</td><td class="n">${money(C[2].tr[i]-C[0].tr[i])}</td></tr>`).join('')+`<tr class="t"><td>Total direct cost</td>${C.map(c=>`<td class="n">${money(c.direct)}</td>`).join('')}<td class="n">${money(C[1].direct-C[0].direct)}</td><td class="n">${money(C[2].direct-C[0].direct)}</td></tr>`}
function show(v){refreshLive();document.querySelectorAll('.view').forEach(e=>e.classList.toggle('on',e.id==='v-'+v));
 document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
 ({project:renderProject,boq:renderBoq,compare:renderCompare})[v]()}
const cur=()=>document.querySelector('nav .on').dataset.v;

/* ---------- special items ---------- */
function ord(c){return c.lines.map((L,i)=>i).sort((a,b)=>c.lines[a].it.t-c.lines[b].it.t||a-b)}
function addSp(){const g=id=>document.getElementById(id),msg=g('sp_msg'),name=g('sp_n').value.trim(),q=g('sp_q').value.trim();
 if(!name||!q){msg.textContent='Enter an item name and a quantity.';return}
 const on=[0,1,2].map(i=>g('sp_f'+i).checked);if(!on.some(Boolean)){msg.textContent='Select at least one finish package.';return}
 const nv=id=>Math.max(0,parseFloat(g(id).value)||0),d=DF(P);
 const it=r(+g('sp_t').value,name,g('sp_s').value.trim()||name,g('sp_u').value.trim()||'lot',on.map(x=>x?q:'0'),nv('sp_w'),nv('sp_m')/d,nv('sp_l')/d,nv('sp_e')/d,'');
 it.sp=true;it.sup=g('sp_sup').value.trim();it.rem=g('sp_r').value.trim()||'Special item added by estimator';
 P.items.push(it);save();msg.textContent='Added "'+name+'" to '+TR[it.t-1]+'.';
 ['sp_n','sp_s','sp_q','sp_m','sp_l','sp_e','sp_sup','sp_r'].forEach(i=>g(i).value='');renderBoq();refreshLive()}
/* ---------- live ---------- */
let FLT='';
function applyFlt(){const z=$('#nz')&&$('#nz').checked;document.querySelectorAll('#boq tr[data-s]').forEach((tr,i)=>{tr.style.display=(tr.dataset.s.includes(FLT.toLowerCase())&&!(z&&tr.dataset.zero==='1'))?'':'none'})}
function bars(sel,Cs){const el=$(sel);if(!el)return;const mx=Math.max(1,...Cs.flatMap(c=>c.tr));
 el.innerHTML=TR.map((t,i)=>`<div class="bar"><span>${i+1}. ${t}</span><div>${Cs.map((c,j)=>`<i title="${money(c.tr[i])}" style="width:${c.tr[i]/mx*100}%;background:${FIN[Cs.length===1?P.view:j].c}"></i>`).join('')}</div><span class="n">${money(Cs[Cs.length-1].tr[i])}</span></div>`).join('')}
function liveBoq(){const c=calc(P,P.view);c.lines.forEach((L,i)=>{const set=(id,t)=>{const e=document.getElementById(id);if(e)e.innerHTML=t};set('q'+i,num(L.q));set('u'+i,money(L.unit));set('l'+i,'<b>'+money(L.tot)+'</b>');const tr=document.getElementById('q'+i).parentNode;tr.dataset.zero=L.q===0?'1':'0'});
 TR.forEach((t,i)=>{const e=document.getElementById('t'+(i+1));if(e)e.textContent=money(c.tr[i])});$('#boqsum').innerHTML=sumStrip(c);bars('#bars',[c]);applyFlt()}
function refreshLive(){const C=FIN.map((f,i)=>calc(P,i)),a=C[P.finish];
 $('#live').innerHTML=FIN.map((f,i)=>`<button class="chip ${i===P.finish?'on':''}" data-chip="${i}"><span>${f.k}</span><b>${money(C[i].price)}</b><span>${money(C[i].perSqm)}/sqm${i?' | +'+money(C[i].price-C[0].price):''}</span></button>`).join('')+`<div class="chip" style="cursor:default"><span>${esc(P.name)}: total project investment</span><b>${money(a.total)}</b><span>Design fee ${money(a.fee)} | ${FIN[P.finish].k}</span></div>`;
 const ps=$('#pstrip');if(ps)ps.innerHTML=sumStrip(a)}
/* ---------- export ---------- */
function dl(name,mime,txt){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:mime}));a.download=name;document.body.appendChild(a);a.click();a.remove()}
const BH=['Item no.','Trade','Item','Specification','Unit','Quantity','Takeoff formula','Material unit cost','Labor unit cost','Equipment unit cost','Waste %','Direct unit cost','Line amount','Finish package','Finish class','Supplier / quotation','Remarks and exclusions'];
function boqRows(fi){const c=calc(P,fi);let last=0,k=0;return ord(c).map(i=>{const L=c.lines[i],it=L.it;if(it.t!==last){last=it.t;k=0}k++;
 return[it.t+'.'+k,TR[it.t-1],it.n,it.spec[fi],it.u,+L.q.toFixed(2),it.q[fi],+(it.m[fi]*DF(P)).toFixed(2),+(it.l[fi]*DF(P)).toFixed(2),+(it.e[fi]*DF(P)).toFixed(2),it.w,+L.unit.toFixed(2),+L.tot.toFixed(2),FIN[fi].k,it.sp?'Special item':it.c==='U'?'Upgrade scope':'',it.sup,it.rem]})}
function csv(fi){return[BH,...boqRows(fi)].map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\r\n')}
function sheet(name,rows){const cell=v=>typeof v==='number'?`<Cell><Data ss:Type="Number">${v}</Data></Cell>`:`<Cell><Data ss:Type="String">${esc(v)}</Data></Cell>`;
 return`<Worksheet ss:Name="${name}"><Table>${rows.map(r=>'<Row>'+r.map(cell).join('')+'</Row>').join('')}</Table></Worksheet>`}
function summaryRows(){const C=FIN.map((f,i)=>calc(P,i));const L=[['Item',...FIN.map(f=>f.k)]];
 [['Direct construction cost','direct'],...(P.hideMk==='yes'?[]:[['Contractor markup','markup']]),['Construction subtotal','sub'],['Applicable VAT','vat'],['Total construction price','price'],['Cost per sqm','perSqm'],['Architectural design fee','fee'],['Total project investment','total']].forEach(([l,k])=>L.push([l,...C.map(c=>+c[k].toFixed(2))]));
 L.push(['Difference vs Standard',0,+(C[1].price-C[0].price).toFixed(2),+(C[2].price-C[0].price).toFixed(2)]);return[['Project',P.name],['Area (sqm)',+P.A],[],...L]}
function xls(){const x='<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'+sheet('Summary',summaryRows())+FIN.map((f,i)=>sheet(f.k.replace(' Finish',''),[BH,...boqRows(i)])).join('')+'</Workbook>';
 dl((P.name||'estimate')+'-finish-comparison.xls','application/vnd.ms-excel',x)}
function pdf(){const C=FIN.map((f,i)=>calc(P,i)),w=window.open('','_blank');if(!w){alert('Allow pop-ups to open the proposal, then try again.');return}
 const row=(l,k)=>`<tr><td>${l}</td>${C.map(c=>`<td style="text-align:right">${money(c[k])}</td>`).join('')}</tr>`;
 w.document.write(`<html><head><title>Proposal - ${esc(P.name)}</title><style>body{font:13px Segoe UI,sans-serif;margin:30px;color:#12263a}table{border-collapse:collapse;width:100%;margin:12px 0}td,th{border:1px solid #bbb;padding:5px 8px;text-align:left}th{background:#eef2f5}h1{margin:0}</style></head><body><h1>Construction Proposal</h1><p><b>${esc(P.name)}</b><br>Client: ${esc(P.client)}<br>Location: ${esc(P.loc)}<br>Floor area: ${num(P.A)} sqm. Prepared ${new Date().toLocaleDateString('en-PH')}</p>
 <p>Scope: building construction and architectural finishes only. Loose furniture, appliances and styling are excluded. ${P.hideMk==='yes'?'':'Markup '+P.markup+'%, '}VAT ${P.vat}%.</p>
 <h3>Finish package comparison</h3><table><tr><th></th>${FIN.map(f=>`<th>${f.k}</th>`).join('')}</tr>${row('Direct construction cost','direct')}${P.hideMk==='yes'?'':row('Contractor markup','markup')}${row('Applicable VAT','vat')}${row('Total construction price','price')}${row('Cost per sqm','perSqm')}${row('Architectural design fee','fee')}${row('Total project investment','total')}</table>
 <h3>Cost by trade (direct)</h3><table><tr><th>Trade</th>${FIN.map(f=>`<th>${f.k}</th>`).join('')}</tr>${TR.map((t,i)=>`<tr><td>${i+1}. ${t}</td>${C.map(c=>`<td style="text-align:right">${money(c.tr[i])}</td>`).join('')}</tr>`).join('')}</table>
 <p>Rates are estimates subject to supplier quotation. Detailed BOQ is available per finish package.</p><script>setTimeout(()=>print(),300)<\/script></body></html>`);w.document.close()}

/* ---------- events ---------- */
function gen(i){P.view=i;save();show('boq')}
document.addEventListener('click',e=>{
 const n=e.target.closest('nav button');if(n)return show(n.dataset.v);
 const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act;
 if(/^gen\d$/.test(a))gen(+a[3]);
 else if(/^csv\d$/.test(a))dl(P.name+'-'+FIN[+a[3]].k+'-BOQ.csv','text/csv',csv(+a[3]));
 else if(a==='csv')dl(P.name+'-'+FIN[P.view].k+'-BOQ.csv','text/csv',csv(P.view));
 else if(a==='cmp')show('compare');
 else if(a==='xls')xls();else if(a==='pdf')pdf();
 else if(a==='addsp')addSp();
 else if(a==='rmsp'){P.items.splice(+b.dataset.i,1);save();renderBoq();refreshLive()}
 else if(a==='save'){save();renderProject()}
 else if(a==='new'){save();P=NEWP();save();renderProject()}
 else if(a==='dup'){save();P=JSON.parse(JSON.stringify(P));P.id='p'+Date.now();P.name+=' (copy)';save();renderProject()}
 else if(a==='reset'){if(confirm('Reset all rates, specifications and formulas to defaults? Special items will be removed.')){P.items=DEF();save();renderProject()}}
 else if(a==='open'){save();P=store[b.dataset.id];save();renderProject()}
 else if(a==='del'){if(Object.keys(store).length<2){alert('Keep at least one project.');return}delete store[b.dataset.id];if(b.dataset.id===P.id)P=Object.values(store)[0];save();renderProject()}
});
document.addEventListener('input',e=>{const t=e.target;
 if(t.id==='flt'){FLT=t.value;return applyFlt()}if(t.id==='nz')return applyFlt();
 if(t.dataset.k&&t.type!=='text'){const f=PF.concat(CF).find(x=>x[0]===t.dataset.k);if(f[2]==='sel')return;
  const n=parseFloat(t.value)||0;P[t.dataset.k]=NEG.includes(t.dataset.k)?n:Math.max(0,n);
  document.querySelectorAll('[data-k="'+t.dataset.k+'"]').forEach(o=>{if(o!==t)o.value=t.value});save();refreshLive();return}
 if(t.dataset.i!==undefined){const it=P.items[+t.dataset.i],f=t.dataset.f,fi=P.view;
  if(['m','l','e'].includes(f))it[f][fi]=Math.max(0,parseFloat(t.value)||0)/DF(P);
  else if(f==='q'||f==='spec')it[f][fi]=t.value;
  else if(f==='w')it.w=Math.max(0,parseFloat(t.value)||0);else it[f]=t.value;
  save();liveBoq();refreshLive()}});
document.addEventListener('click',e=>{const c=e.target.closest('[data-chip]');if(c){P.finish=P.view=+c.dataset.chip;save();const v=cur();show(v)}});
document.addEventListener('change',e=>{const t=e.target;if(t.id==='flt'||t.id==='nz')return;
 if(t.id==='hmk'){P.hideMk=t.checked?'yes':'no';save();return show(cur())}
 if(t.dataset.fin!==undefined){P.finish=P.view=+t.dataset.fin;save();return renderProject()}
 if(t.dataset.k){const f=PF.concat(CF).find(x=>x[0]===t.dataset.k);P[t.dataset.k]=f[2]==='number'?(NEG.includes(t.dataset.k)?parseFloat(t.value)||0:Math.max(0,parseFloat(t.value)||0)):t.value;save();return renderProject()}

});
$('#sp_t').innerHTML=TR.map((t,i)=>`<option value="${i+1}">${i+1}. ${t}</option>`).join('');
load();save();show('project');
