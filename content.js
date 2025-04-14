// console.log("Jidelna.cz Pretty Print: Content script executing.");

// Check if the script has already run on this page
if (window.jidelnaPrettyPrintExecuted) {
    // console.log("Jidelna.cz Pretty Print: Already executed on this page. Exiting.");
} else {
    // Set the flag to indicate the script is now running
    window.jidelnaPrettyPrintExecuted = true;
    // console.log("Jidelna.cz Pretty Print: Running for the first time.");

    // Apply styles for print layout
    const style = document.createElement("style");
    style.textContent = `
        @media print {
            .oddelovacTydnu:not(:first-of-type) {
                page-break-before: always;
            }
            a[href]:after {
                content: none !important;
            }
            a[href] {
                text-decoration: none;
                color: black;
            }
        }
    `;
    document.head.appendChild(style);

    // Define selectors for unwanted elements - needed to be removed, not just hidden via css
    const selectorsToRemove = [
      ".reklamyBox",
      ".reklamyBoxLevy",
      "#header",
      "#hlavniNavigace",
      "#pripravenoProgramem",
      "#footer",
      "#whole > p",
      ".potvrzovaciTlacitka",
      ".odhlaseni",
      ".volbaUzivatele p",
      ".obrazky.row",
      ".ohodnot.row",
      "main.container-fluid > div:nth-child(2)",
      "main.container-fluid > div:nth-child(2)",// repeated with the same number because before this that other div was removed
    ];

    // Remove each element matching the selectors
    selectorsToRemove.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => el.remove());
    });

    // Remove rows specifically identified as "Nápoj" (Drink)
    document.querySelectorAll('.menuJidla > .row').forEach(row => {
        const popiska = row.querySelector('.popiskaJidla');
        if (popiska && popiska.textContent.trim() === 'Nápoj') {
            row.remove();
        }
    });

    // Remove entire .menu.row if .textJidla starts with "Oběd č."
    document.querySelectorAll('.menu.row').forEach(menuRow => {
        const textJidla = menuRow.querySelector('.textJidla');
        if (textJidla && textJidla.textContent.trim().startsWith('Oběd č.')) {
            menuRow.remove();
        }
    });
    
    // console.log("Jidelna.cz Pretty Print: Element removal complete.");
}

window.print();
