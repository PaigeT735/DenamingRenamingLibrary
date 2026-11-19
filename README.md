# DenamingRenamingLibrary

Website for the Trinity College Dublin group project **“Denaming and Renaming the Library”** by Paige Timmeny, Eva Disley, Isabel Fitzgerald, Lana Burke and Zoe Cullen.

A static site with no build step: open `index.html` in a browser, or serve the folder with any static host (GitHub Pages works as is).

## Files

| File | What it holds |
| --- | --- |
| `index.html` | All content: hero, the six essay sections, references, team contract |
| `styles.css` | Colours, type and layout (palette and fonts are variables at the top) |
| `script.js` | Active-section underline in the navigation |
| `assets/` | Essay figures (JPEG) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Globe site icon |

## Adding the essay

The essay text is in `index.html`, inside each section's `<div class="prose">`. The Introduction and Conclusion still hold a short "will be added here" note; replace that `<p class="pending">` with the text. A comment above the first section lists the building blocks (opening paragraph, subheading, pull quote, highlighted statement, source quotation, in-text citation).

Figures are `<figure class="figure">` blocks inside the essay sections, numbered Figure 1 to 6. To swap a picture, replace the file in `assets/` (keep the name, or update the `src`, `width` and `height`). Figure 3 is the Schein culture diagram, drawn in SVG so it matches the site's colours. If you add photos you did not take, credit them in the caption.

References are the `<li>` items inside `<ol class="refs">`. Team contract answers are inside `<div class="terms">`, one row per question group.

## Hero photograph

“The Berkeley Library, Trinity College Dublin” by Rob Hurson, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), loaded from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Berkeley_Library,_Trinity_College_Dublin.jpg). The licence requires the credit shown in the hero and footer to stay.

To use your own photo, save it as `assets/hero.jpg`, change the `src` of the `<img class="hero__photo">` in `index.html`, and update both credits.
