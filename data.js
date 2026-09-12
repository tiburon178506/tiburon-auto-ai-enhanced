/* ============================================================
   DATOS DE MARCAS
============================================================ */

const BRANDS = [
  ["Toyota","🇯🇵"],
  ["Honda","🇯🇵"],
  ["Nissan","🇯🇵"],
  ["Mazda","🇯🇵"],
  ["Mitsubishi","🇯🇵"],
  ["Subaru","🇯🇵"],
  ["Suzuki","🇯🇵"],
  ["Isuzu","🇯🇵"],

  ["Ford","🇺🇸"],
  ["Chevrolet","🇺🇸"],
  ["Dodge","🇺🇸"],
  ["Jeep","🇺🇸"],
  ["Tesla","🇺🇸"],

  ["BMW","🇩🇪"],
  ["Mercedes-Benz","🇩🇪"],
  ["Volkswagen","🇩🇪"],
  ["Audi","🇩🇪"],
  ["Porsche","🇩🇪"],

  ["Hyundai","🇰🇷"],
  ["Kia","🇰🇷"],
  ["Genesis","🇰🇷"],

  ["Volvo","🇸🇪"],

  ["Peugeot","🇫🇷"],
  ["Renault","🇫🇷"],

  ["Fiat","🇮🇹"],
  ["Ferrari","🇮🇹"],

  ["Land Rover","🇬🇧"],
  ["Jaguar","🇬🇧"],

  ["Lexus","🇯🇵"],
  ["Acura","🇯🇵"]
];

/* ============================================================
   CATÁLOGO CON IMÁGENES
============================================================ */

const raw = [
["Toyota","Corolla","E90/E100",1987,1997,"Sedán","https://images.unsplash.com/photo-1597818212624-e27e08374fef?w=400&h=300&fit=crop"],
["Toyota","Camry","XV10/XV20",1991,2001,"Sedán","https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop"],
["Toyota","RAV4","XA10/XA20",1994,2005,"SUV","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],
["Toyota","Prius","XW10/XW20",1997,2009,"Híbrido","https://images.unsplash.com/photo-1624813183033-8661a1ebeb52?w=400&h=300&fit=crop"],
["Toyota","Hilux","N50/N60/N70",1985,2005,"Pickup","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Toyota","Land Cruiser","J70/J80/J100",1985,2007,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],

["Honda","Civic","EF/EG/EK",1988,2000,"Sedán","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],
["Honda","Accord","CB/CD/CG",1990,2002,"Sedán","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],
["Honda","CR-V","RD1/RD2",1997,2006,"SUV","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Honda","Fit","GD/GE",2001,2013,"Hatchback","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],

["Nissan","Sentra","B13/B14/B15",1991,2006,"Sedán","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],
["Nissan","Altima","L30/L31/L32",1998,2012,"Sedán","https://images.unsplash.com/photo-1597818212624-e27e08374fef?w=400&h=300&fit=crop"],
["Nissan","X-Trail","T30/T31",2000,2013,"SUV","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Nissan","Frontier","D22/D40",1997,2015,"Pickup","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],

["Mazda","323","BG/BJ",1989,2003,"Hatchback","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Mazda","Mazda3","BK/BL",2003,2013,"Sedán","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Mazda","CX-5","KE/KF",2012,2026,"SUV","https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop"],

["Mitsubishi","Lancer","C90/C10/CY",1988,2017,"Sedán","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],
["Mitsubishi","Montero","Pajero II/III",1991,2006,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Mitsubishi","L200","K00/K60/K70",1987,2015,"Pickup","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],

["Subaru","Legacy","BC/BD/BE",1989,2004,"Sedán","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],
["Subaru","Impreza","GC/GD/GE",1992,2011,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Subaru","Forester","SF/SG",1997,2008,"SUV","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],

["Suzuki","Swift","EA/MA",1988,2004,"Hatchback","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],
["Suzuki","Vitara","ET/FT",1988,2005,"SUV","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],

["Ford","Escort","III/IV/V",1985,1999,"Compacto","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Ford","Mustang","Fox/SN95/S197",1987,2014,"Deportivo","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],
["Ford","Explorer","I/II/III",1991,2010,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Ford","F-150","VIII/IX/X/XI",1987,2004,"Pickup","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Ford","Ranger","I/II",1998,2011,"Pickup","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],

["Chevrolet","Cavalier","J/Z24",1988,2005,"Sedán","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],
["Chevrolet","Impala","VII/VIII/IX",1994,2013,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Chevrolet","Tahoe","GMT400/GMT800",1995,2006,"SUV","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],
["Chevrolet","Silverado","GMT800/GMT900",1998,2013,"Pickup","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],

["Dodge","Ram","D/W/Ram 1500",1989,2008,"Pickup","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Dodge","Charger","LX",2005,2010,"Sedán","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Dodge","Durango","DN/HB",1998,2009,"SUV","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],

["Jeep","Cherokee","XJ",1985,2001,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Jeep","Wrangler","YJ/TJ/JK",1987,2018,"SUV","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Jeep","Grand Cherokee","ZJ/WJ/WK",1993,2010,"SUV","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],

["Tesla","Model S","Pre-facelift/Refresh",2012,2026,"Eléctrico","https://images.unsplash.com/photo-1560958089-b8a46dd52d12?w=400&h=300&fit=crop"],
["Tesla","Model 3","Gen 1/Highland",2017,2026,"Eléctrico","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Tesla","Model Y","Gen 1",2020,2026,"Eléctrico","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],

["BMW","3 Series","E30/E36/E46",1985,2006,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["BMW","5 Series","E34/E39/E60",1988,2010,"Sedán","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],
["BMW","X5","E53/E70",1999,2013,"SUV","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],

["Mercedes-Benz","C-Class","W202/W203/W204",1993,2014,"Sedán","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Mercedes-Benz","E-Class","W124/W210/W211",1985,2009,"Sedán","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Mercedes-Benz","G-Class","W463",1990,2026,"SUV","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],

["Volkswagen","Golf","II/III/IV",1985,2004,"Hatchback","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Volkswagen","Jetta","II/III/IV",1985,2005,"Sedán","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Volkswagen","Tiguan","I/II",2007,2026,"SUV","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],

["Audi","80","B3/B4",1986,1996,"Sedán","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],
["Audi","A4","B5/B6/B7",1994,2008,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Audi","Q5","8R/FY",2008,2026,"SUV","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],

["Porsche","911","964/993/996",1989,2004,"Deportivo","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],
["Porsche","Cayenne","955/957",2002,2010,"SUV","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],

["Hyundai","Elantra","J1/J2/XD",1990,2006,"Sedán","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Hyundai","Tucson","JM/TL",2004,2020,"SUV","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],
["Hyundai","Santa Fe","SM/CM/DM",2000,2018,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],

["Kia","Rio","DC/JB/UB",2000,2017,"Sedán","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Kia","Sportage","JA/KM/SL",1994,2015,"SUV","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],
["Kia","Sorento","BL/XM/UM",2002,2020,"SUV","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],

["Volvo","740","700 Series",1985,1992,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Volvo","S40","I/II",1995,2012,"Sedán","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],
["Volvo","XC90","I/II",2002,2026,"SUV","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],

["Peugeot","205","I",1985,1998,"Hatchback","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Peugeot","306","N3/N5",1993,2002,"Hatchback","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Peugeot","308","T7/T9",2007,2026,"Hatchback","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],

["Renault","Clio","I/II/III",1990,2012,"Hatchback","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Renault","Megane","I/II/III",1995,2015,"Hatchback","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],
["Renault","Duster","I/II",2010,2026,"SUV","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],

["Fiat","Uno","I",1985,2013,"Hatchback","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],
["Fiat","Punto","I/II/III",1993,2018,"Hatchback","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Fiat","500","312",2007,2026,"Hatchback","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],

["Ferrari","Testarossa","F110",1985,1996,"Deportivo","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],
["Ferrari","F430","F131",2004,2009,"Deportivo","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Ferrari","488","F142M",2015,2019,"Deportivo","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],

["Land Rover","Discovery","I/II",1989,2004,"SUV","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],
["Land Rover","Range Rover","Classic/P38",1985,2002,"SUV","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Land Rover","Defender","90/110/130",1985,2016,"SUV","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"],

["Jaguar","XJ","XJ40/X300/X308",1986,2003,"Sedán","https://images.unsplash.com/photo-1605559424843-9e4c3ff86b90?w=400&h=300&fit=crop"],
["Jaguar","XF","X250",2007,2015,"Sedán","https://images.unsplash.com/photo-1590362891990-f8023521fe8f?w=400&h=300&fit=crop"],

["Lexus","LS","XF10/XF20",1989,2000,"Sedán","https://images.unsplash.com/photo-1609708536965-5d4b00661fdb?w=400&h=300&fit=crop"],
["Lexus","RX","XU10/XU30",1997,2009,"SUV","https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"],
["Lexus","IS","XE10/XE20",1998,2013,"Sedán","https://images.unsplash.com/photo-1625231333195-5ac100be6b4d?w=400&h=300&fit=crop"],

["Acura","Integra","DA/DC",1986,2001,"Deportivo","https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop"],
["Acura","TL","UA1/UA6",1995,2014,"Sedán","https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"],
["Acura","MDX","YD1/YD2",2000,2013,"SUV","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"],

["Genesis","G80","DH/RG3",2016,2026,"Sedán","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop"],
["Genesis","GV80","JW1",2020,2026,"SUV","https://images.unsplash.com/photo-1533473359331-35e06ff300ff?w=400&h=300&fit=crop"]
];

const DATA = raw.map((x,i)=>({
  id:"m"+(i+1),
  make:x[0],
  model:x[1],
  gen:x[2],
  start:x[3],
  end:x[4],
  cat:x[5],
  image:x[6]
}));

const icon = {
  "Sedán":"🚘",
  "SUV":"🚙",
  "Pickup":"🛻",
  "Hatchback":"🚗",
  "Deportivo":"🏎️",
  "Híbrido":"♻️",
  "Eléctrico":"⚡",
  "Compacto":"🚗"
};

/* ============================================================
   OPCIONES DE CUSTOMIZACIÓN
============================================================ */

const COLORS = [
  { name: "Azul Tiburón", hex: "#16d9ff", rgb: "22, 217, 255" },
  { name: "Negro Obsidiana", hex: "#0a0e14", rgb: "10, 14, 20" },
  { name: "Blanco Perla", hex: "#f5f5f5", rgb: "245, 245, 245" },
  { name: "Rojo Carmesí", hex: "#ff5d73", rgb: "255, 93, 115" },
  { name: "Plata Metálica", hex: "#c0c0c0", rgb: "192, 192, 192" },
  { name: "Oro Champagne", hex: "#f4d03f", rgb: "244, 208, 63" },
  { name: "Verde Bosque", hex: "#1b4332", rgb: "27, 67, 50" },
  { name: "Púrpura Nocturno", hex: "#9b7bff", rgb: "155, 123, 255" }
];

const RIMS = [
  { name: "Clásicos 16\"", id: "classic-16" },
  { name: "Deportivos 17\"", id: "sport-17" },
  { name: "Lujo 18\"", id: "luxury-18" },
  { name: "Offroad 19\"", id: "offroad-19" },
  { name: "Cromo Pulido", id: "chrome-polish" },
  { name: "Matte Negro", id: "matte-black" }
];

const ACCESSORIES = [
  { name: "Alerón Deportivo", id: "spoiler-sport", enabled: true },
  { name: "Parachoques Reforzado", id: "bumper-reinforced", enabled: true },
  { name: "Luces LED", id: "lights-led", enabled: true },
  { name: "Kit Turbo", id: "turbo-kit", enabled: true },
  { name: "Bajo de Piso", id: "undertray", enabled: true },
  { name: "Banda Lateral", id: "side-stripe", enabled: true },
  { name: "Techo Panorámico", id: "panoramic-roof", enabled: true },
  { name: "Sistema Escape Deportivo", id: "exhaust-sport", enabled: true }
];

const FINISHES = [
  { name: "Brillo Brillante", id: "glossy", filter: "brightness(1.1)" },
  { name: "Mate Suave", id: "matte", filter: "brightness(0.95) saturate(0.9)" },
  { name: "Metálico Espejo", id: "metallic", filter: "brightness(1.2) contrast(1.1)" },
  { name: "Carbono", id: "carbon", filter: "brightness(0.9) contrast(1.2)" },
  { name: "Perla Premium", id: "pearl", filter: "brightness(1.15) saturate(1.1)" }
];
