# proyashpodder.github.io

Personal academic website of **Proyash Podder**, Assistant Professor of Computer Science at Muhlenberg College.
Plain HTML, CSS, and JavaScript with no build step. GitHub Pages serves it as-is.

## Updating content

Almost everything lives in **`assets/js/data.js`**:

| What | Where in `data.js` |
| --- | --- |
| News (newest first; `when` can say e.g. "Summer 2026") | `news` |
| Publications (end a student's name with `†`; `selected: true` puts it on the home page) | `publications` |
| Research areas and projects (`status: "current"` for Muhlenberg student projects) | `areas`, `projects` |
| Grants | `grants` |
| Courses and the current semester | `courses`, `currentTerm` |
| Mentoring record, students by name | `mentoringSummary`, `mentoring`, `students`, `alumni` |
| Education | `education` |
| Email, office, links, CV | `profile` |
| Navigation menu | `nav` |

Each semester, update `currentTerm` and add the new term to each course's `terms`.

If a browser keeps showing old content after an edit, hard-refresh (Cmd+Shift+R). After larger changes, bump the `?v=` number on the `style.css`, `data.js`, and `main.js` links in each page so visitors' browsers fetch the new files.

The bio paragraphs are written directly in `index.html`; course development and previous teaching are in `teaching.html`.

## Pages

`index.html` · `research.html` · `publications.html` · `teaching.html` · `students.html` · `news.html` · `404.html`

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
