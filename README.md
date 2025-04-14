# Jidelna.cz - Pretty Print Chrome Extension

This Chrome extension cleans up the layout of the website jidelna.cz and prepares it for printing, ensuring a clean and organized printout.

## Features

- **Runs Once:** The script ensures it only modifies the page once per load, even if the extension icon is clicked multiple times.
- **Element Removal:** Removes unnecessary elements before printing, including:
    - Header and Footer
    - Main Navigation
    - Advertisements (`.reklamyBox`, `.reklamyBoxLevy`)
    - User selection elements (`.volbaUzivatele p`, `.odhlaseni`)
    - Action buttons (`.potvrzovaciTlacitka`)
    - Image and rating rows (`.obrazky.row`, `.ohodnot.row`)
    - Specific layout divs (`#pripravenoProgramem`, `#whole > p`, `main.container-fluid > div:nth-child(2)`)
    - Rows identified as "Nápoj" (Drink).
    - Meal rows starting with "Oběd č." (Lunch no.).
- **Print-Specific Styling:** Injects CSS rules active only during printing:
    - Adds page breaks before each week separator (`.oddelovacTydnu`).
    - Removes default link styling (underline, `::after` content) and sets link color to black.
- **Automatic Print Trigger:** Automatically opens the browser's print dialog after cleaning the page.

## Installation

1.  Download or clone the repository.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" by toggling the switch in the top right corner.
4.  Click on "Load unpacked" and select the directory where the extension files are located.
5.  The extension should now be installed and active.

## Usage

1.  Navigate to the specific page on jidelna.cz that you want to print.
2.  Click the extension's icon in the Chrome toolbar.
3.  The extension will modify the page content and automatically open the print dialog with the cleaned-up view.
4.  If you need to print again or print a different view, reload the page first and then click the extension icon again.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or additional features.

## License

This project is licensed under the MIT License.
