
function createNavbar(ACTIVE = 'Home') {
  const navbar = `
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="index.html" class="nav-link${ACTIVE === 'Home' ? ' active' : ''}">Home</a>
          </li>
          <li class="nav-item">
            <a href="lore.html" class="nav-link${ACTIVE === 'Group Lore' ? ' active' : ''}">Group Lore</a>
            <div class="dropdown">
              <a href="dark-council.html" class="dropdown-link">Dark Council</a>
              <a href="powerbase.html" class="dropdown-link">Powerbase</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="guides.html" class="nav-link${ACTIVE === 'Guides' ? ' active' : ''}">Guides</a>
            <div class="dropdown">
              <a href="sith-imperial-policy.html" class="dropdown-link">Sith Imperial Policy</a>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Hosting Guide</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Events</a>
                  <a href="hosting-trainings.html" class="sub-dropdown-link">Trainings</a>
                  <a href="hosting-trials.html" class="sub-dropdown-link">Trials</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="ranks.html" class="dropdown-link">Ranks</a>
              </div>
              <a href="commands-formations.html" class="dropdown-link">Commands and Formations</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="guides.html" class="nav-link${ACTIVE === 'Holocron' ? ' active' : ''}">Holocron</a>
            <div class="dropdown">
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Planet History</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Planet 1</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Battles</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Battle 1</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Weapons</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Weapon 1</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">People</a>
                <div class="sub-dropdown">
                  <a href="KingAdas.html" class="sub-dropdown-link">King Adas</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Section of Time</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Time</a>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="hosting-guide.html" class="dropdown-link has-submenu">Other</a>
                <div class="sub-dropdown">
                  <a href="hosting-events.html" class="sub-dropdown-link">Person</a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="divisions.html" class="nav-link${ACTIVE === 'Divisions' ? ' active' : ''}">Divisions</a>
             <div class="dropdown">
                <a href="dhg.html" class="dropdown-link">Dark Honor Guard</a>
                <a href="iq.html" class="dropdown-link">Inquisitors</a>
                <a href="ii.html" class="dropdown-link">Imperial Intelligence</a>
                <a href="rev.html" class="dropdown-link">Reavers</a>
                <a href="dm.html" class="dropdown-link">Dread Masters</a>
                <a href="dd.html" class="dropdown-link">Diplomatic Department</a>
             </div>
          </li>
          <li class="nav-item">
            <a href="links.html" class="nav-link${ACTIVE === 'Links' ? ' active' : ''}">Links</a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  return navbar;
}
