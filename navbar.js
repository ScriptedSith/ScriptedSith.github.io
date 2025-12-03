
function createNavbar(ACTIVE = 'Home', rootPath = '') {
  // Detect current page depth by counting folders in pathname
  // Split pathname, remove empty strings and 'index.html', then use the number
  // of segments to compute how many `../` are needed to reach the repo root.

  // The depth is the number of folder segments deep we are from the repository root.
  // Using `segments.length` ensures we compute the correct number of `../` even
  // when already inside a content folder like `divisions` (avoids duplicating
  // `divisions/divisions/...` links).
  
  const navbar = `
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/" class="nav-link${ACTIVE === 'Home' ? ' active' : ''}">Home</a>
          </li>
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
              <div class="dropdown-item">
                <a href="${rootPath}guides/hosting/" class="dropdown-link has-submenu">Hosting Guide</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}guides/hosting/events/" class="sub-dropdown-link">Events</a>
                  <a href="${rootPath}guides/hosting/trainings/" class="sub-dropdown-link">Trainings</a>
                  <a href="${rootPath}guides/hosting/trials/" class="sub-dropdown-link">Trials</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}guides/ranks/" class="dropdown-link">Ranks</a>
              </div>
              <a href="${rootPath}guides/commands-formations/" class="dropdown-link">Commands and Formations</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${rootPath}holocron/" class="nav-link${ACTIVE === 'Holocron' ? ' active' : ''}">Holocron</a>
            <div class="dropdown">
              <div class="dropdown-item">
                <a href="${rootPath}holocron/planets/" class="dropdown-link has-submenu">Planet History</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/battles/" class="dropdown-link has-submenu">Battles</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/weapons/" class="dropdown-link has-submenu">Weapons</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/people/" class="dropdown-link has-submenu">People</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}holocron/people/KingAdas/" class="sub-dropdown-link">King Adas</a>
                  <a href="${rootPath}holocron/people/MarkaRagnos/" class="sub-dropdown-link">Marka Ragnos</a>
                  <a href="${rootPath}holocron/people/NagaSadow/" class="sub-dropdown-link">Naga Sadow</a>
                  <a href="${rootPath}holocron/people/TulakHord/" class="sub-dropdown-link">Tulak Hord</a>
                  <a href="${rootPath}holocron/people/DarthNihilus/" class="sub-dropdown-link">Darth Nihilus</a>
                  <a href="${rootPath}holocron/people/AjuntaPall/" class="sub-dropdown-link">Ajunta Pall</a>
                  <a href="${rootPath}holocron/people/DarthVitiate/" class="sub-dropdown-link">Darth Vitiate</a>
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/times/" class="dropdown-link has-submenu">Section of Time</a>
                <div class="sub-dropdown">
                  <a href="${rootPath}holocron/times/HundredYearDarkness/" class="sub-dropdown-link">Hundred Year Darkness</a>
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="${rootPath}holocron/other/" class="dropdown-link has-submenu">Other</a>
                <div class="sub-dropdown">
                  <a href="https://discord.gg/73bKC82aEs" class="sub-dropdown-link">Suggest some in the discord.</a>
                </div>
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
          <li class="nav-item">
            <a href="${rootPath}links/" class="nav-link${ACTIVE === 'Links' ? ' active' : ''}">Links</a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  return navbar;
}
