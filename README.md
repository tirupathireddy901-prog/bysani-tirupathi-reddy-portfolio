# Bysani Tirupathi Reddy — NetSuite Functional Consultant Portfolio

A single-page portfolio site built with plain HTML/CSS/JS (no build step required).

## Files

- `index.html` — the entire site (structure, styles, and interactivity)
- `portrait.jpg` — profile photo used in the hero section (compressed from the original PNG for faster loading, no visible quality loss)
- `resume.pdf` — included. This is Bysani Tirupathi Reddy's NetSuite Functional Consultant resume, and it powers the "Download Resume" / "View Resume" buttons.

## Deploy with GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload `index.html`, `portrait.jpg`, and `resume.pdf` to the root of the repository (drag-and-drop on the GitHub website works, or use git commands below).
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repository-name>/` within a minute or two.

### Using git from the command line

```bash
git init
git add index.html portrait.jpg resume.pdf README.md
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

Then enable GitHub Pages as described in step 3–5 above.

## Notes

- The contact form is front-end only (validates input and shows a confirmation message) — it does not send email. Use the "Email Me" / "Call Me" buttons, or wire the form up to a service like Formspree if you want it to deliver messages.
- LinkedIn/GitHub links were intentionally left out since none were supplied — add them in the Contact section of `index.html` when ready.
- Favicon and social-share (Open Graph/Twitter) meta tags are included; the favicon is an inline "BTR" mark, no extra image file required.
- All paths are relative, so the site works identically via `python -m http.server`, GitHub Pages, or any static host.
