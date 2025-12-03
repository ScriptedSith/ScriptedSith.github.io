
function createNavbar(ACTIVE = 'Home') {
  // Detect current page depth by counting folders in pathname
  // Split pathname, remove empty strings and 'index.html', then use the number
  // of segments to compute how many `../` are needed to reach the repo root.
  const path = window.location.pathname;
  const segments = path.split('/').filter(p => p && p !== 'index.html');

  // The depth is the number of folder segments deep we are from the repository root.
  // Using `segments.length` ensures we compute the correct number of `../` even
  // when already inside a content folder like `divisions` (avoids duplicating
  // `divisions/divisions/...` links).
  const depth = segments.length;
  const rootPath = depth > 0 ? '../'.repeat(depth) : './';
  
  const navbar = `
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/" class="nav-link${ACTIVE === 'Home' ? ' active' : ''}">Home</a>
          </li>
          <li class="nav-item">
            <a href="${rootPath}lore/index.html" class="nav-link${ACTIVE === 'Group Lore' ? ' active' : ''}">Group Lore</a>
            <div class="dropdown">
              <a href="${rootPath}lore/group/index.html" class="dropdown-link">Group</a>
              <a href="${rootPath}lore/dark-council/index.html" class="dropdown-link">Dark Council</a>
              <a href="${rootPath}lore/powerbase/index.html" class="dropdown-link">Powerbase</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${rootPath}guides/index.html" class="nav-link${ACTIVE === 'Guides' ? ' active' : ''}">Guides</a>
            <div class="dropdown">
              <a href="${rootPath}guides/sith-imperial-policy/index.html" class="dropdown-link">Sith Imperial Policy</a>
              <div class="dropdown-item">
                <a href="${rootPath}guides/hosting/index.html" class="dropdown-link has-submenu">Hosting Guide</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}guides/hosting/events/index.html" class="sub-dropdown-link">Events</a>
                  <a href="${rootPath}guides/hosting/trainings/index.html" class="sub-dropdown-link">Trainings</a>
                  <a href="${rootPath}guides/hosting/trials/index.html" class="sub-dropdown-link">Trials</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}guides/ranks/index.html" class="dropdown-link">Ranks</a>
              </div>
              <a href="${rootPath}guides/commands-formations/index.html" class="dropdown-link">Commands and Formations</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${rootPath}holocron/index.html" class="nav-link${ACTIVE === 'Holocron' ? ' active' : ''}">Holocron</a>
            <div class="dropdown">
              <div class="dropdown-item">
                <a href="${rootPath}holocron/planets/index.html" class="dropdown-link has-submenu">Planet History</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/battles/index.html" class="dropdown-link has-submenu">Battles</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/weapons/index.html" class="dropdown-link has-submenu">Weapons</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/people/index.html" class="dropdown-link has-submenu">People</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}holocron/people/KingAdas/index.html" class="sub-dropdown-link">King Adas</a>
                  <a href="${rootPath}holocron/people/MarkaRagnos/index.html" class="sub-dropdown-link">Marka Ragnos</a>
                  <a href="${rootPath}holocron/people/NagaSadow/index.html" class="sub-dropdown-link">Naga Sadow</a>
                  <a href="${rootPath}holocron/people/TulakHord/index.html" class="sub-dropdown-link">Tulak Hord</a>
                  <a href="${rootPath}holocron/people/DarthNihilus/index.html" class="sub-dropdown-link">Darth Nihilus</a>
                  <a href="${rootPath}holocron/people/AjuntaPall/index.html" class="sub-dropdown-link">Ajunta Pall</a>
                  <a href="${rootPath}holocron/people/DarthVitiate/index.html" class="sub-dropdown-link">Darth Vitiate</a>
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/times/index.html" class="dropdown-link has-submenu">Section of Time</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}holocron/times/HundredYearDarkness/index.html" class="sub-dropdown-link">Hundred Year Darkness</a>
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/other/index.html" class="dropdown-link has-submenu">Other</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="${rootPath}divisions/index.html" class="nav-link${ACTIVE === 'Divisions' ? ' active' : ''}">Divisions</a>
             <div class="dropdown">
               <a href="${rootPath}divisions/dhg/index.html" class="dropdown-link">Dark Honor Guard</a>
               <a href="${rootPath}divisions/iq/index.html" class="dropdown-link">Inquisitors</a>
               <a href="${rootPath}divisions/ii/index.html" class="dropdown-link">Imperial Intelligence</a>
               <a href="${rootPath}divisions/rev/index.html" class="dropdown-link">Reavers</a>
               <a href="${rootPath}divisions/dm/index.html" class="dropdown-link">Dread Masters</a>
             </div>
          </li>
          <li class="nav-item">
            <a href="${rootPath}links/index.html" class="nav-link${ACTIVE === 'Links' ? ' active' : ''}">Links</a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  return navbar;
}
