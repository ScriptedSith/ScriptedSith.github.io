/**
 * Creates a Glassmorphism Panel
 * @param {string} title - The Header of the section
 * @param {string} content - The inner HTML/Text
 * @param {string} id - Unique ID for sidebar navigation links
 * @returns {string} - The HTML string
 */
function createGlassPanel(title, content, id = "") {
    return `
      <section id="${id}" class="glass-panel">
        <h2 style="color: #ff3333; border-bottom: 2px solid #ff3333; padding-bottom: 5px; margin-top: 0;">
            ${title}
        </h2>
        <div class="panel-content">
            ${content}
        </div>
      </section>
    `;
}