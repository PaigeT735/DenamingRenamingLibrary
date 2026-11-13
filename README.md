# DenamingRenamingLibrary

Website for the Trinity College Dublin group project **“Denaming and Renaming the Library”** by Paige Timmeny, Eva Disley, Isabel Fitzgerald, Lana Burke and Zoe Cullen.

A static site with no build step: open `index.html` in a browser, or serve the folder with any static host (GitHub Pages works as is).

## Files

| File | What it holds |
| --- | --- |
| `index.html` | All content: hero, the six essay sections, references, team contract |
| `styles.css` | Colours, type and layout (palette and fonts are variables at the top) |
| `script.js` | Active-section underline in the navigation, reading progress bar |

## Adding the essay

All text is currently Lorem Ipsum. In `index.html`, each section has a `<div class="prose">`; replace the paragraphs inside it. A comment above the first section lists the building blocks (opening paragraph, subheading, pull quote, highlighted statement, source quotation, in-text citation).

References are the `<li>` items inside `<ol class="refs">`. Team contract clauses are the rows inside `<dl class="terms">`.

## Hero photograph

“The Berkeley Library, Trinity College Dublin” by Rob Hurson, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), loaded from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Berkeley_Library,_Trinity_College_Dublin.jpg). The licence requires the credit shown in the hero and footer to stay.

To use your own photo, save it as `assets/hero.jpg`, change the `src` of the `<img class="hero__photo">` in `index.html`, and update both credits.
