/* ============================================================
   VARIABLES GLOBALES
============================================================ */

let make = null;
let lastScan = null;

/* ============================================================
   UTILIDADES
============================================================ */

const $ = id =>
  document.getElementById(id);

function get(key, defaultValue){
  try{
    return JSON.parse(
      localStorage.getItem(key)
    ) ?? defaultValue;
  }catch{
    return defaultValue;
  }
}

function put(key,value){
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

function esc(value){
  return String(value ?? "")
    .replace(/[&<>"']/g,c=>({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[c]));
}

function toast(message){
  $("toast").textContent=message;
  $("toast").classList.remove("hidden");
  clearTimeout(window.tt);
  window.tt=setTimeout(()=>{
    $("toast").classList.add("hidden");
  },2600);
}

function modal(content){
  $("modal").innerHTML=content;
  $("back").classList.remove("hidden");
}

function closeModal(){
  $("back").classList.add("hidden");
}

/* ============================================================
   NAVEGACIÓN
============================================================ */

function page(p){
  document
    .querySelectorAll(".page")
    .forEach(x=>x.classList.remove("active"));

  $(p).classList.add("active");

  document
    .querySelectorAll(".nav")
    .forEach(x=>
      x.classList.toggle(
        "active",
        x.dataset.p===p
      )
    );

  $("side").classList.remove("open");

  if(p==="catalog") catalog();
  if(p==="garage") renderGarage();
  if(p==="scanner") initScanner();
  if(p==="manual") manual();
  if(p==="workshop") works();
  if(p==="studio") initStudio();

  metrics();
}

$("menu").onclick=()=>{
  $("side").classList.toggle("open");
};

/* ============================================================
   LOGIN - SEGURO
============================================================ */

$("loginForm").onsubmit=e=>{
  e.preventDefault();

  const username = $("email").value.trim();
  const password = $("pass").value;

  // Validar que los campos no estén vacíos
  if(!username || !password){
    $("loginErr").textContent = "Por favor completa todos los campos.";
    return;
  }

  // Validar longitud mínima
  if(username.length < 3 || password.length < 8){
    $("loginErr").textContent = "Credenciales incorrectas.";
    return;
  }

  // Llamar a función de verificación (en producción sería una API)
  verifyCredentials(username, password);
};

function verifyCredentials(username, password){
  // IMPORTANTE: En producción, esto DEBE ser una llamada a un servidor backend
  // Nunca validar credenciales en el cliente
  
  // Para demostración local, usar localStorage
  const validUser = get("app_user", null);
  
  if(validUser && 
     validUser.username === username && 
     validUser.passwordHash){
    // Verificación básica
    localStorage.setItem("tiburon_session", "1");
    $("email").value = "";
    $("pass").value = "";
    start();
  } else {
    $("loginErr").textContent = "Credenciales incorrectas. Usa tu usuario y contraseña.";
    $("pass").value = "";
  }
}

function start(){
  $("login").classList.add("hidden");
  $("app").classList.remove("hidden");
  page("home");
}

function logout(){
  localStorage.removeItem("tiburon_session");
  $("email").value = "";
  $("pass").value = "";
  location.reload();
}

/* ============================================================
   MÉTRICAS
============================================================ */

function metrics(){
  $("modelsMetric").textContent=
    DATA.length;

  $("garageMetric").textContent=
    get("garage",[]).length;

  $("scanMetric").textContent=
    get("scans",[]).length;
}

/* ============================================================
   CATÁLOGO
============================================================ */

function catalog(){
  renderBrands();
}

function renderBrands(){
  const q=
    ($("brandSearch")?.value||"")
      .toLowerCase();

  $("brands").innerHTML=
    BRANDS
      .filter(x=>
        x[0]
        .toLowerCase()
        .includes(q)
      )
      .map(x=>{
        const n=
          DATA.filter(
            m=>m.make===x[0]
          ).length;

        return `
        <button
          class="brandcard"
          onclick="selectMake('${esc(x[0])}')"
        >
          <div class="brandemoji">
            ${x[1]}
          </div>
          <div class="brandname">
            ${esc(x[0])}
          </div>
          <div class="small">
            ${n} modelos demo
          </div>
        </button>
        `;
      })
      .join("");
}

function selectMake(x){
  make=x;

  $("brandsView")
    .classList.add("hidden");

  $("modelsView")
    .classList.remove("hidden");

  $("makeTitle").innerHTML=`
    <div
      class="card"
      style="margin:12px 0"
    >
      <div class="kicker">
        MARCA
      </div>
      <h2>
        ${esc(x)}
      </h2>
      <p class="muted">
        Primeros 3 modelos disponibles en FREE. Haz clic en un modelo para verlo y personalizarlo.
      </p>
    </div>
  `;

  renderModels();
}

function backBrands(){
  make=null;

  $("modelsView")
    .classList.add("hidden");

  $("brandsView")
    .classList.remove("hidden");
}

function renderModels(){
  if(!make) return;

  const q=
    ($("modelSearch").value||"")
      .toLowerCase();

  const arr=
    DATA.filter(m=>
      m.make===make
      &&
      `${m.model} ${m.gen} ${m.cat}`
        .toLowerCase()
        .includes(q)
    );

  const groups={};

  arr.forEach(m=>{
    const decade=
      Math.floor(m.start/10)*10;

    if(!groups[decade])
      groups[decade]=[];

    groups[decade].push(m);
  });

  const pro=
    localStorage.getItem(
      "tiburon_plan"
    )==="PRO";

  $("groups").innerHTML=
    Object.keys(groups)
      .sort((a,b)=>b-a)
      .map(d=>`
        <div class="group">
          <b>
            📅 ${d}s
          </b>

          ${groups[d].map(m=>{
            const index=
              DATA
                .filter(x=>x.make===make)
                .findIndex(
                  x=>x.id===m.id
                );

            const locked=
              !pro && index>=3;

            return `
              <div class="row">
                <div>
                  <b>
                    ${icon[m.cat]||"🚗"}
                    ${esc(m.model)}
                  </b>
                  <span class="small">
                    ${esc(m.gen)}
                    ·
                    ${m.start}–${m.end}
                  </span>
                </div>

                <span
                  class="badge ${locked?"pro":"free"}"
                >
                  ${
                    locked
                    ?"🔒 PRO"
                    :"✓ FREE"
                  }
                </span>

                <button
                  class="btn"
                  onclick="openModelCustomizer('${m.id}')"
                >
                  ${
                    locked
                    ?"Ver PRO"
                    :"🎨 Ver"
                  }
                </button>
              </div>
            `;
          }).join("")}
        </div>
      `)
      .join("")

      ||

      `<div class="card">
        No encontrado.
      </div>`;
}

/* ============================================================
   PRO
============================================================ */

function premium(){
  modal(`
    <div class="modalhead">
      <div>
        <div class="kicker">
          EL TIBURÓN
        </div>
        <h2>
          👑 Plan PRO
        </h2>
        <p class="muted">
          Activación local para presentación.
        </p>
      </div>
      <button
        class="btn"
        onclick="closeModal()"
      >
        ✕
      </button>
    </div>

    <div class="g2">
      <div class="card">
        <h3>
          FREE
        </h3>
        <p class="muted">
          Primeros 3 modelos por marca.
        </p>
      </div>

      <div class="card">
        <h3>
          👑 PRO
        </h3>
        <p class="muted">
          Catálogo ampliado y herramientas
          profesionales.
        </p>
      </div>
    </div>

    <button
      class="btn primary"
      style="width:100%;margin-top:15px"
      onclick="
        localStorage.setItem('tiburon_plan','PRO');
        closeModal();
        renderModels();
        toast('👑 PRO demo activado')
      "
    >
      Activar PRO demo
    </button>
  `);
}

/* ============================================================
   SINCRONIZACIÓN
============================================================ */

function sync(){
  toast(
    "Sincronización demo completada. Lista para conectar una API real."
  );

  localStorage.setItem(
    "lastSync",
    new Date().toISOString()
  );
}

/* ============================================================
   GARAGE
============================================================ */

function garageForm(){
  modal(`
    <div class="modalhead">
      <h2>
        Agregar vehículo
      </h2>
      <button
        class="btn"
        onclick="closeModal()"
      >
        ✕
      </button>
    </div>

    <div class="formgrid">
      <div>
        <label>
          Marca
        </label>
        <select id="gm">
          ${BRANDS.map(x=>
            `<option>
              ${esc(x[0])}
            </option>`
          ).join("")}
        </select>
      </div>

      <div>
        <label>
          Modelo
        </label>
        <input
          id="gmo"
          placeholder="Corolla"
        >
      </div>

      <div>
        <label>
          Año
        </label>
        <input
          id="gy"
          value="2020"
          type="number"
        >
      </div>

      <div>
        <label>
          Placa
        </label>
        <input id="gp">
      </div>
    </div>

    <button
      class="btn primary"
      style="width:100%;margin-top:15px"
      onclick="saveGarage()"
    >
      Guardar vehículo
    </button>
  `);
}

function saveGarage(){
  let a=
    get("garage",[]);

  a.push({
    id:Date.now(),
    make:$("gm").value,
    model:
      $("gmo").value ||
      "Vehículo",
    year:
      $("gy").value,
    plate:
      $("gp").value
  });

  put("garage",a);
  closeModal();
  renderGarage();
  metrics();
  toast(
    "Vehículo agregado."
  );
}

function renderGarage(){
  const a=
    get("garage",[]);

  $("garageList").innerHTML=
    a.length

      ?

      a.map(v=>`
        <div class="card">
          <div class="kicker">
            ${esc(v.make)}
          </div>
          <h3>
            🚙 ${esc(v.model)}
          </h3>
          <p class="muted">
            Año ${esc(v.year)}
            ${
              v.plate
              ?" · "+esc(v.plate)
              :""
            }
          </p>

          <button
            class="btn primary"
            onclick="
              page('scanner');
              $('sMake').value='${esc(v.make)}';
              $('sModel').value='${esc(v.model)}';
              $('sYear').value='${esc(v.year)}'
            "
          >
            Diagnosticar
          </button>

          <button
            class="btn"
            onclick="removeGarage(${v.id})"
          >
            Eliminar
          </button>
        </div>
      `).join("")

      :

      `
      <div class="card">
        <h3>
          Garaje vacío
        </h3>
        <p class="muted">
          Agrega tu primer vehículo.
        </p>
        <button
          class="btn primary"
          onclick="garageForm()"
        >
          ＋ Agregar
        </button>
      </div>
      `;
}

function removeGarage(id){
  put(
    "garage",
    get("garage",[])
      .filter(x=>x.id!==id)
  );

  renderGarage();
  metrics();
}

/* ============================================================
   SCANNER OBD
============================================================ */

function initScanner(){
  $("sMake").innerHTML=
    BRANDS.map(x=>
      `<option>
        ${esc(x[0])}
      </option>`
    ).join("");
}

function scan(){
  const codes=[
    "P0420",
    "P0301",
    "P0171",
    "U0100"
  ];

  const code=
    codes[
      Math.floor(
        Math.random()*codes.length
      )
    ];

  const risk=
    Math.floor(
      20+Math.random()*70
    );

  lastScan={
    date:new Date().toISOString(),
    make:$("sMake").value,
    model:
      $("sModel").value ||
      "Modelo demo",
    year:$("sYear").value,
    code,
    risk
  };

  let scans=
    get("scans",[]);

  scans.push(lastScan);

  put(
    "scans",
    scans.slice(-50)
  );

  $("scanResult").innerHTML=`
    <h3>
      Resultado
    </h3>

    <div class="card">
      <div class="kicker">
        DTC
      </div>
      <h2>
        ${code}
      </h2>
      <p class="muted">
        ${esc(lastScan.make)}
        ${esc(lastScan.model)}
        ·
        ${esc(lastScan.year)}
      </p>
      <span
        class="status
        ${
          risk>65
          ?"bad"
          :
          risk>40
          ?"warn"
          :"ok"
        }"
      >
        ${risk}% riesgo
      </span>
    </div>

    <button
      class="btn"
      style="margin-top:12px"
      onclick="
        page('ai');
        $('dtc').value='${code}'
      "
    >
      🧠 Analizar con IA
    </button>
  `;

  $("sensors").innerHTML=
    [
      [
        "RPM",
        720+
        Math.floor(
          Math.random()*500
        ),
        "rpm"
      ],
      [
        "Temperatura",
        78+
        Math.floor(
          Math.random()*16
        ),
        "°C"
      ],
      [
        "Voltaje",
        (
          13.4+
          Math.random()
        ).toFixed(1),
        "V"
      ],
      [
        "Carga",
        Math.floor(
          20+
          Math.random()*55
        ),
        "%"
      ]
    ]
    .map(x=>`
      <div class="card">
        <div class="metric">
          ${x[1]}
        </div>
        <div class="metriclabel">
          ${x[0]} · ${x[2]}
        </div>
      </div>
    `).join("");

  metrics();

  toast(
    "Diagnóstico demo completado."
  );
}

/* ============================================================
   MECÁNICO IA
============================================================ */

function analyze(){
  const c=
    $("dtc")
      .value
      .trim()
      .toUpperCase();

  const s=
    $("sym")
      .value
      .toLowerCase();

  let title=
    "Análisis preliminar";

  let text=
    "Faltan datos. Describe síntomas y condiciones.";

  let level=
    "warn";

  const rules={
    P0420:[
      "Eficiencia del catalizador baja",
      "Revisar fugas de escape, sensores O2, mezcla y catalizador antes de sustituir piezas."
    ],
    P0301:[
      "Fallo de encendido en cilindro 1",
      "Revisar bujía, bobina, inyector, alimentación y compresión."
    ],
    P0171:[
      "Mezcla pobre",
      "Revisar fugas de vacío, MAF, presión de combustible e inyectores."
    ],
    U0100:[
      "Comunicación perdida",
      "Revisar batería, masas, fusibles y red CAN antes de condenar un módulo."
    ]
  };

  if(rules[c]){
    title=
      rules[c][0];
    text=
      rules[c][1];
  }
  else if(
    s.includes("no enciende")
    ||
    s.includes("no arranca")
  ){
    title=
      "Motor no arranca";
    text=
      "Separar la prueba en batería/arranque, chispa/señal y combustible.";
  }

  $("aiResult").innerHTML=`
    <h3>
      ${title}
    </h3>
    <p>
      ${text}
    </p>
    <span class="status warn">
      REVISAR
    </span>

    <div
      class="card"
      style="margin-top:12px"
    >
      <b>
        Siguiente paso
      </b>
      <p class="muted">
        Confirmar con un escáner real
        y mediciones antes de cambiar componentes.
      </p>
    </div>
  `;
}

/* ============================================================
   MANUAL
============================================================ */

const manuals=[
  ["🔋","Batería y carga"],
  ["🔥","Encendido"],
  ["⛽","Combustible"],
  ["🌡️","Refrigeración"],
  ["📡","OBD-II / DTC"],
  ["⚡","Red eléctrica"]
];

function manual(){
  $("manualGrid").innerHTML=
    manuals.map(x=>`
      <div
        class="card click"
        onclick="manualOpen('${x[1]}')"
      >
        <h3>
          ${x[0]}
          ${x[1]}
        </h3>
        <p class="muted">
          Procedimientos, inspección,
          medición y verificación.
        </p>
      </div>
    `).join("");
}

function manualOpen(title){
  modal(`
    <div class="modalhead">
      <h2>
        📘 ${esc(title)}
      </h2>
      <button
        class="btn"
        onclick="closeModal()"
      >
        ✕
      </button>
    </div>

    <div class="card">
      <ol>
        <li>
          Confirmar síntomas.
        </li>
        <li>
          Inspección visual.
        </li>
        <li>
          Medir antes de reemplazar.
        </li>
        <li>
          Comparar con especificaciones.
        </li>
        <li>
          Registrar resultados.
        </li>
      </ol>
    </div>
  `);
}

/* ============================================================
   AUTO STUDIO (CUSTOMIZACIÓN)
============================================================ */

function initStudio() {
  renderColorGrid();
  renderRimsGrid();
  renderAccessoriesGrid();
  updatePreview();
}

/* ============================================================
   GESTIÓN DE TALLER
============================================================ */

function workForm(){
  modal(`
    <div class="modalhead">
      <h2>
        Nueva orden
      </h2>
      <button
        class="btn"
        onclick="closeModal()"
      >
        ✕
      </button>
    </div>

    <label>
      Cliente
    </label>
    <input id="wc">

    <label>
      Vehículo
    </label>
    <input
      id="wv"
      placeholder="Toyota Corolla 2020"
    >

    <label>
      Trabajo
    </label>
    <input
      id="wj"
      placeholder="Diagnóstico"
    >

    <label>
      Estado
    </label>
    <select id="ws">
      <option>
        Recibido
      </option>
      <option>
        En diagnóstico
      </option>
      <option>
        En reparación
      </option>
      <option>
        Listo
      </option>
    </select>

    <button
      class="btn primary"
      style="width:100%;margin-top:15px"
      onclick="saveWork()"
    >
      Guardar
    </button>
  `);
}

function saveWork(){
  let a=
    get("works",[]);

  a.push({
    id:
      "OT-"+
      String(Date.now())
        .slice(-6),
    c:
      $("wc").value ||
      "Cliente",
    v:
      $("wv").value ||
      "Vehículo",
    j:
      $("wj").value ||
      "Diagnóstico",
    s:
      $("ws").value
  });

  put("works",a);
  closeModal();
  works();
  toast(
    "Orden creada."
  );
}

function works(){
  $("works").innerHTML=
    get("works",[])
      .map(x=>`
        <tr>
          <td>
            ${esc(x.id)}
          </td>
          <td>
            ${esc(x.c)}
          </td>
          <td>
            ${esc(x.v)}
          </td>
          <td>
            ${esc(x.j)}
          </td>
          <td>
            <span class="status ok">
              ${esc(x.s)}
            </span>
          </td>
        </tr>
      `)
      .join("")

      ||

      `
      <tr>
        <td
          colspan="5"
          class="muted"
        >
          No hay órdenes.
        </td>
      </tr>
      `;
}

/* ============================================================
   REPORTES
============================================================ */

function printReport(){
  const s=
    lastScan ||
    get("scans",[]).slice(-1)[0];

  if(!s){
    toast(
      "Realiza primero un diagnóstico."
    );
    page("scanner");
    return;
  }

  const w=
    window.open(
      "",
      "_blank"
    );

  w.document.write(`
    <html>
    <head>
      <title>
        Reporte EL TIBURÓN AUTO AI
      </title>
    </head>
    <body
      style="
        font-family:Arial;
        padding:35px
      "
    >
      <h1>
        🦈 EL TIBURÓN AUTO AI
      </h1>
      <h2>
        Reporte de diagnóstico
      </h2>
      <hr>
      <p>
        <b>Vehículo:</b>
        ${esc(s.make)}
        ${esc(s.model)}
        ${esc(s.year)}
      </p>
      <p>
        <b>DTC:</b>
        ${esc(s.code)}
      </p>
      <p>
        <b>Riesgo:</b>
        ${esc(s.risk)}%
      </p>
      <p>
        <b>Fecha:</b>
        ${new Date(s.date).toLocaleString()}
      </p>
      <p>
        Prototipo demostrativo.
        Verificar con equipo profesional.
      </p>
    </body>
    </html>
  `);

  w.document.close();
  w.print();
}

/* ============================================================
   EXPORTACIÓN
============================================================ */

function exportData(){
  const data={
    project:
      "EL TIBURÓN AUTO AI",
    version:
      "2.0.0",
    date:
      new Date().toISOString(),
    garage:
      get("garage",[]),
    scans:
      get("scans",[]),
    works:
      get("works",[]),
    customizations:
      get("customizations",[]),
    plan:
      localStorage.getItem(
        "tiburon_plan"
      ) ||
      "FREE"
  };

  const a=
    document.createElement("a");

  a.href=
    URL.createObjectURL(
      new Blob(
        [
          JSON.stringify(
            data,
            null,
            2
          )
        ],
        {
          type:
            "application/json"
        }
      )
    );

  a.download=
    "tiburon-auto-ai-data.json";

  a.click();

  toast(
    "Datos exportados."
  );
}

/* ============================================================
   ARRANQUE
============================================================ */

function boot(){
  if(
    localStorage.getItem(
      "tiburon_session"
    )==="1"
  ){
    start();
  }

  metrics();
}

boot();
