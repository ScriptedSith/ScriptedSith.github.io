/* ============================================================
   InvisibleText.js
   Universal auto-text-visibility engine

   Usage:
     InvisibleText.run("secret");  // all text becomes invisible
     InvisibleText.run("gotcha");  // all text becomes visible (opposite brightness)

   Modes:
     secret → match pixel exactly → invisible
     gotcha → invert brightness → always visible

   Auto-updates on scroll.
============================================================ */

const InvisibleText = (() => {

    /* -----------------------------
       Load image helper
    ------------------------------ */
    function loadImage(src) {
        return new Promise(res => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => res(img);
            img.src = src;
        });
    }

    /* -----------------------------
       RGB ⇆ HSV
    ------------------------------ */
    function rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const d = max - min;

        let h = 0;
        if (d !== 0) {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }

        const s = max === 0 ? 0 : d / max;
        const v = max;

        return { h, s, v };
    }

    function hsvToRgb(h, s, v) {
        const c = v * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = v - c;

        let r = 0, g = 0, b = 0;

        if (h < 60)      { r = c; g = x; b = 0; }
        else if (h < 120){ r = x; g = c; b = 0; }
        else if (h < 180){ r = 0; g = c; b = x; }
        else if (h < 240){ r = 0; g = x; b = c; }
        else if (h < 300){ r = x; g = 0; b = c; }
        else             { r = c; g = 0; b = x; }

        return {
            r: Math.round((r + m) * 255),
            g: Math.round((g + m) * 255),
            b: Math.round((b + m) * 255)
        };
    }

    /* -------------------------------------------------------------
       SAMPLE PIXEL BEHIND ELEMENT
    -------------------------------------------------------------- */
    async function samplePixelBehind(el) {
        let cur = el;
        let style = window.getComputedStyle(cur);
        let bgColor = style.backgroundColor;
        let bgImg = style.backgroundImage;

        // Crawl until bg found
        while ((bgColor === "transparent" || bgColor === "rgba(0, 0, 0, 0)") &&
               (!bgImg || bgImg === "none")) {

            cur = cur.parentElement;
            if (!cur) break;

            const cs = window.getComputedStyle(cur);
            if (bgColor === "transparent") bgColor = cs.backgroundColor;
            if (bgImg === "none") bgImg = cs.backgroundImage;
        }

        // solid-color case
        if (!bgImg || bgImg === "none") {
            const vals = bgColor.match(/\d+/g).map(Number);
            return { r: vals[0], g: vals[1], b: vals[2], a: 1 };
        }

        // image-case
        const url = bgImg.slice(5, -2);
        const img = await loadImage(url);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const rect = el.getBoundingClientRect();
        const parentRect = cur.getBoundingClientRect();

        const px = rect.left + rect.width / 2 - parentRect.left;
        const py = rect.top + rect.height / 2 - parentRect.top;

        const pixel = ctx.getImageData(px, py, 1, 1).data;

        return { r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3] / 255 };
    }

    /* --------------------------------------------------------
       APPLY SECRET (invisible)
    --------------------------------------------------------- */
    async function makeInvisible(el) {
        const { r, g, b, a } = await samplePixelBehind(el);
        el.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    /* --------------------------------------------------------
       APPLY GOTCHA (contrast)
    --------------------------------------------------------- */
    async function makeContrast(el) {
        const { r, g, b } = await samplePixelBehind(el);
        const hsv = rgbToHsv(r, g, b);

        if (hsv.v > 0.5) {
            hsv.v = 0;
        } else {
            hsv.v = 1;
        }

        const rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
        el.style.color = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    /* --------------------------------------------------------
       FIND ALL TEXT ELEMENTS
    --------------------------------------------------------- */
    function getAllTextElements() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
            },
            false
        );

        const list = [];
        let node;

        while (node = walker.nextNode()) {
            if (node.parentElement) list.push(node.parentElement);
        }

        return [...new Set(list)]; // unique parents
    }

    /* --------------------------------------------------------
       MAIN UPDATE
    --------------------------------------------------------- */
    async function update(mode) {
        const elements = getAllTextElements();

        for (const el of elements) {
            if (mode === "secret") await makeInvisible(el);
            else await makeContrast(el);
        }
    }

    /* --------------------------------------------------------
       AUTO-UPDATE ON SCROLL
    --------------------------------------------------------- */
    function enableScrollUpdates(mode) {
        let ticking = false;

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    update(mode);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /* --------------------------------------------------------
       PUBLIC API
    --------------------------------------------------------- */
    return {
        run(mode = "gotcha") {
            update(mode);
            enableScrollUpdates(mode);
        }
    };
})();
