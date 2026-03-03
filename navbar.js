function createNavbar(ACTIVE = 'Home', rootPath = '', division = '') {
  // 1. Fallback Data: Ensures the script doesn't crash if holocron-data.js fails to load
  const data = window.HOLOCRON_DATA || { people: [], planets: [], battles: [], weapons: [], times: [], other: [] };

  // 2. Helper function to generate dropdown HTML or a fallback link
  const generateLinks = (category, folder) => {
    if (!data[category] || data[category].length === 0) {
      return `<a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link" target="_blank">Suggest ${category}</a>`;
    }
    return data[category].map(item => 
      `<a href="${rootPath}holocron/${folder}/${item.path}/" class="sub-dropdown-link">${item.name}</a>`
    ).join('');
  };

  // 3. Define color map for divisions
  const divisionColors = {
    'dhg': '#7d0000', 'iq': '#ff00ff', 'ii': '#00ffff', 'rev': '#ffffff', 'dm': '#ffff00'
  };

  const accentColor = divisionColors[division.toLowerCase()] || '#ff6b6b';

  let dynamicStyle = '';
  if (division) {
    const r = parseInt(accentColor.slice(1, 3), 16), g = parseInt(accentColor.slice(3, 5), 16), b = parseInt(accentColor.slice(5, 7), 16);
    dynamicStyle = `
      <style>
        .navbar { border-bottom-color: ${accentColor} !important; }
        .nav-link:hover, .nav-link.active { color: ${accentColor} !important; border-bottom-color: ${accentColor} !important; background: rgba(${r}, ${g}, ${b}, 0.1) !important; }
        .dropdown { border-color: ${accentColor} !important; }
        .dropdown-link:hover, .sub-dropdown-link:hover { color: ${accentColor} !important; background: rgba(${r}, ${g}, ${b}, 0.2) !important; }
      </style>`;
  }

  return `
    ${dynamicStyle}
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-menu">
          <li class="nav-item"><a href="${rootPath}" class="nav-link${ACTIVE === 'Home' ? ' active' : ''}">Home</a></li>
          
          <li class="nav-item">
            <a href="${rootPath}lore/" class="nav-link${ACTIVE === 'Group Lore' ? ' active' : ''}">Group Lore</a>
            <div class="dropdown">
              <a href="${rootPath}lore/group/" class="dropdown-link">Group</a>
              <a href="${rootPath}lore/dark-council/" class="dropdown-link">Dark Council</a>
              <a href="${rootPath}lore/powerbase/" class="dropdown-link">Powerbase</a>
            </div>
          </li>

          <li class="nav-item">
            <a href="${rootPath}guides/" class="nav-link${ACTIVE === 'Guides' ? ' active' : ''}">Guides</a>
            <div class="dropdown">
              <a href="${rootPath}guides/sith-imperial-policy/" class="dropdown-link">Sith Imperial Policy</a>
              <a href="${rootPath}guides/ranks/" class="dropdown-link">Ranks</a>
              <a href="${rootPath}guides/commands-formations/" class="dropdown-link">Commands and Formations</a>
            </div>
          </li>

          <li class="nav-item">
            <a href="${rootPath}holocron/" class="nav-link${ACTIVE === 'Holocron' ? ' active' : ''}">Holocron</a>
            <div class="dropdown">
              <div class="dropdown-item">
                <a href="${rootPath}holocron/planets/" class="dropdown-link has-submenu">Planet History</a>
                <div class="sub-dropdown">${generateLinks('planets', 'planets')}</div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/battles/" class="dropdown-link has-submenu">Battles</a>
                <div class="sub-dropdown">${generateLinks('battles', 'battles')}</div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/weapons/" class="dropdown-link has-submenu">Weapons</a>
                <div class="sub-dropdown">${generateLinks('weapons', 'weapons')}</div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/people/" class="dropdown-link has-submenu">People</a>
                <div class="sub-dropdown">${generateLinks('people', 'people')}</div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/times/" class="dropdown-link has-submenu">Section of Time</a>
                <div class="sub-dropdown">${generateLinks('times', 'times')}</div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/other/" class="dropdown-link has-submenu">Other</a>
                <div class="sub-dropdown">${generateLinks('other', 'other')}</div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a href="${rootPath}divisions/" class="nav-link${ACTIVE === 'Divisions' ? ' active' : ''}">Divisions</a>
             <div class="dropdown">
               <a href="${rootPath}divisions/dhg/" class="dropdown-link">Dark Honor Guard</a>
               <a href="${rootPath}divisions/iq/" class="dropdown-link">Inquisitors</a>
               <a href="${rootPath}divisions/ii/" class="dropdown-link">Imperial Intelligence</a>
               <a href="${rootPath}divisions/rev/" class="dropdown-link">Reavers</a>
               <a href="${rootPath}divisions/dm/" class="dropdown-link">Dread Masters</a>
             </div>
          </li>
          <li class="nav-item"><a href="${rootPath}links/" class="nav-link${ACTIVE === 'Links' ? ' active' : ''}">Links</a></li>
        </ul>
      </div>
    </nav>
  `;
}