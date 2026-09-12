/* ============================================================
   SISTEMA DE CUSTOMIZACIÓN AVANZADO
============================================================ */

let currentCustomization = {
  modelId: null,
  color: COLORS[0],
  rims: RIMS[0],
  accessories: {},
  finish: FINISHES[0]
};

function initCustomization(modelId) {
  
  const model = DATA.find(m => m.id === modelId);
  
  if (!model) return;
  
  currentCustomization.modelId = modelId;
  
  renderColorGrid();
  renderRimsGrid();
  renderAccessoriesGrid();
  updatePreview();
  
  toast(`🎨 Customizando ${model.make} ${model.model}`);
}

function renderColorGrid() {
  
  const html = COLORS.map((color, idx) => `
    <div
      class="color-option ${currentCustomization.color.hex === color.hex ? 'selected' : ''}"
      style="background-color: ${color.hex}"
      onclick="selectColor(${idx})"
      title="${color.name}"
    ></div>
  `).join('');
  
  $('colorGrid').innerHTML = html;
}

function renderRimsGrid() {
  
  const html = RIMS.map((rim, idx) => `
    <div
      class="rim-option ${currentCustomization.rims.id === rim.id ? 'selected' : ''}"
      onclick="selectRims(${idx})"
    >
      🛞<br><small>${rim.name}</small>
    </div>
  `).join('');
  
  $('rimsGrid').innerHTML = html;
}

function renderAccessoriesGrid() {
  
  const html = ACCESSORIES.map((acc, idx) => `
    <div
      class="accessory-option ${currentCustomization.accessories[acc.id] ? 'selected' : ''}"
      onclick="toggleAccessory(${idx})"
    >
      ${currentCustomization.accessories[acc.id] ? '✓' : '+'}<br>
      <small>${acc.name}</small>
    </div>
  `).join('');
  
  $('accessoriesGrid').innerHTML = html;
}

function selectColor(idx) {
  currentCustomization.color = COLORS[idx];
  renderColorGrid();
  updatePreview();
}

function selectRims(idx) {
  currentCustomization.rims = RIMS[idx];
  renderRimsGrid();
  updatePreview();
}

function toggleAccessory(idx) {
  const acc = ACCESSORIES[idx];
  
  if (currentCustomization.accessories[acc.id]) {
    delete currentCustomization.accessories[acc.id];
  } else {
    currentCustomization.accessories[acc.id] = true;
  }
  
  renderAccessoriesGrid();
  updatePreview();
}

function updatePreview() {
  
  if (!currentCustomization.modelId) {
    $('preview').innerHTML = '<div class="car-placeholder">🚙</div>';
    return;
  }
  
  const model = DATA.find(m => m.id === currentCustomization.modelId);
  
  if (!model) return;
  
  const color = currentCustomization.color;
  const finish = currentCustomization.finish;
  
  let html = `
    <div style="
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    ">
      <img
        src="${model.image}"
        class="car-image"
        style="
          filter: ${finish.filter} hue-rotate(${getHueRotation(color.hex)}deg);
          mix-blend-mode: screen;
        "
        alt="${model.make} ${model.model}"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22><rect fill=%22%230a1a2a%22 width=%22200%22 height=%22150%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%238da2b8%22 font-size=%2224%22>🚙</text></svg>'"
      >
      
      <div style="
        position: absolute;
        bottom: 12px;
        left: 0;
        right: 0;
        text-align: center;
        color: #9eb4c8;
        font-size: 11px;
      ">
        <b>${color.name}</b><br>
        ${currentCustomization.rims.name}
      </div>
    </div>
  `;
  
  $('preview').innerHTML = html;
}

function getHueRotation(hex) {
  
  const hueMap = {
    '#16d9ff': 200,    // Azul Tiburón
    '#0a0e14': 0,      // Negro
    '#f5f5f5': 0,      // Blanco
    '#ff5d73': 0,      // Rojo
    '#c0c0c0': 0,      // Plata
    '#f4d03f': 60,     // Oro
    '#1b4332': 140,    // Verde
    '#9b7bff': 280     // Púrpura
  };
  
  return hueMap[hex] || 0;
}

function saveCustomization() {
  
  if (!currentCustomization.modelId) {
    toast('❌ Selecciona un modelo primero');
    return;
  }
  
  const model = DATA.find(m => m.id === currentCustomization.modelId);
  
  let customizations = get('customizations', []);
  
  const existing = customizations.findIndex(
    c => c.modelId === currentCustomization.modelId
  );
  
  const toSave = {
    id: Date.now(),
    modelId: currentCustomization.modelId,
    make: model.make,
    model: model.model,
    color: currentCustomization.color,
    rims: currentCustomization.rims,
    accessories: currentCustomization.accessories,
    finish: currentCustomization.finish,
    savedAt: new Date().toISOString()
  };
  
  if (existing >= 0) {
    customizations[existing] = toSave;
  } else {
    customizations.push(toSave);
  }
  
  put('customizations', customizations);
  
  toast(`✅ Customización guardada: ${model.make} ${model.model}`);
}

function exportCustomization() {
  
  if (!currentCustomization.modelId) {
    toast('❌ Selecciona un modelo primero');
    return;
  }
  
  const model = DATA.find(m => m.id === currentCustomization.modelId);
  
  const data = {
    project: 'EL TIBURÓN AUTO AI - Customización',
    version: '2.0.0',
    date: new Date().toISOString(),
    vehicle: {
      make: model.make,
      model: model.model,
      generation: model.gen,
      category: model.cat
    },
    customization: {
      color: currentCustomization.color.name,
      rims: currentCustomization.rims.name,
      accessories: Object.keys(currentCustomization.accessories)
        .map(id => ACCESSORIES.find(a => a.id === id)?.name)
        .filter(Boolean),
      finish: currentCustomization.finish.name
    }
  };
  
  const json = JSON.stringify(data, null, 2);
  
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  
  a.href = url;
  a.download = `tiburon-customization-${model.make}-${model.model}-${Date.now()}.json`;
  a.click();
  
  toast('📸 Customización exportada');
}

function openModelCustomizer(modelId) {
  
  const model = DATA.find(m => m.id === modelId);
  
  if (!model) return;
  
  const all = DATA.filter(x => x.make === model.make);
  
  const locked = localStorage.getItem('tiburon_plan') !== 'PRO' &&
    all.findIndex(x => x.id === modelId) >= 3;
  
  if (locked) {
    premium();
    return;
  }
  
  modal(`
    <div class="modalhead">
      <div>
        <div class="kicker">
          ${esc(model.make)}
        </div>
        <h2>
          ${icon[model.cat]}
          ${esc(model.model)}
        </h2>
        <p class="muted">
          ${esc(model.gen)} · ${model.start}–${model.end}
        </p>
      </div>
      <button class="btn" onclick="closeModal()">
        ✕
      </button>
    </div>
    
    <div style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 15px;
    ">
      <div class="showcase-image">
        <img
          src="${model.image}"
          alt="${model.make} ${model.model}"
          style="max-width: 100%; max-height: 300px; object-fit: contain;"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22><rect fill=%22%230a1a2a%22 width=%22200%22 height=%22150%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%238da2b8%22 font-size=%2224%22>🚙</text></svg>'"
        >
      </div>
      
      <div class="card">
        <h3>📋 Especificaciones</h3>
        
        <div style="margin-top: 12px;">
          <small style="color: var(--muted)">AÑOS</small>
          <b>${model.start}–${model.end}</b>
        </div>
        
        <div style="margin-top: 10px;">
          <small style="color: var(--muted)">CATEGORÍA</small>
          <b>${icon[model.cat]} ${esc(model.cat)}</b>
        </div>
        
        <div style="margin-top: 10px;">
          <small style="color: var(--muted)">GENERACIÓN</small>
          <b>${esc(model.gen)}</b>
        </div>
        
        <button
          class="btn primary"
          style="width: 100%; margin-top: 15px;"
          onclick="closeModal(); page('studio'); initCustomization('${modelId}');"
        >
          🎨 Personalizar
        </button>
      </div>
    </div>
  `);
}

function loadCustomization(customizationId) {
  
  const customizations = get('customizations', []);
  const custom = customizations.find(c => c.id === customizationId);
  
  if (!custom) {
    toast('❌ Customización no encontrada');
    return;
  }
  
  currentCustomization = {
    modelId: custom.modelId,
    color: custom.color,
    rims: custom.rims,
    accessories: custom.accessories,
    finish: custom.finish
  };
  
  page('studio');
  
  renderColorGrid();
  renderRimsGrid();
  renderAccessoriesGrid();
  updatePreview();
  
  toast(`✅ Customización cargada: ${custom.make} ${custom.model}`);
}

function deleteCustomization(customizationId) {
  
  if (!confirm('¿Eliminar esta customización?')) return;
  
  const customizations = get('customizations', [])
    .filter(c => c.id !== customizationId);
  
  put('customizations', customizations);
  
  toast('❌ Customización eliminada');
}

function viewMyCustomizations() {
  
  const customizations = get('customizations', []);
  
  if (customizations.length === 0) {
    toast('No tienes customizaciones guardadas');
    return;
  }
  
  modal(`
    <div class="modalhead">
      <h2>🎨 Mis Customizaciones</h2>
      <button class="btn" onclick="closeModal()">✕</button>
    </div>
    
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      margin-top: 15px;
    ">
      ${customizations.map(c => `
        <div class="card" style="padding: 12px;">
          <div style="font-weight: 800; font-size: 12px;">
            ${esc(c.make)} ${esc(c.model)}
          </div>
          
          <div style="
            margin: 8px 0;
            padding: 8px;
            border-radius: 8px;
            background: rgba(${c.color.rgb}, 0.1);
            border: 1px solid ${c.color.hex};
            font-size: 11px;
            color: ${c.color.hex};
            text-align: center;
            font-weight: 700;
          ">
            ${c.color.name}
          </div>
          
          <div style="font-size: 10px; color: var(--muted); margin: 4px 0;">
            🛞 ${c.rims.name}
          </div>
          
          <div style="
            display: flex;
            gap: 6px;
            margin-top: 8px;
            flex-wrap: wrap;
          ">
            <button
              class="btn"
              style="flex: 1; padding: 6px; font-size: 10px;"
              onclick="loadCustomization(${c.id})"
            >
              Cargar
            </button>
            <button
              class="btn"
              style="flex: 1; padding: 6px; font-size: 10px;"
              onclick="deleteCustomization(${c.id})"
            >
              ❌
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `);
}
