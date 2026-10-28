# karan00023.github.io

Karan Kapoor's personal site: https://karan00023.github.io/

A static page with no build step and no dependencies. GitHub Pages serves this repository's `main` branch.

## Photos

The page expects two square photos:

| File | Used for |
| --- | --- |
| `assets/headshot.jpg` | The hero portrait and link previews (`og:image`) |
| `assets/about.jpg` | The About section |

To add them on GitHub, open the `assets` folder, choose **Add file → Upload files**, and name them exactly as above. JPEGs about 800 × 800 px and under 300 KB load quickly. If a photo is missing, the page shows "KK" initials instead of a broken image.

## Editing content

All text is in `index.html`. Keep claims verifiable:
- Each project links to a live demo and its source.
- Data is described as synthetic.
- AI assistance is disclosed.

Full experience lives on LinkedIn (linked from the page). Add a résumé PDF or experience details only if you are comfortable publishing them.

## Preview locally

```sh
python3 -m http.server 8790 --bind 127.0.0.1
```

Built with AI coding assistance.
