<div align="center">

# VESTIGIA

*A personal visual archive of places, moments, and memory.*

[View the archive](https://delriscotechnologies.github.io/vestigia/)

</div>

---

Vestigia is a static photography journal arranged by publication order. The repository contains the deployed site, its compiled assets, and the published photographs.

## View locally

The site uses absolute paths under `/vestigia/`. Clone it into a directory named `vestigia`, then start a local server from its parent directory:

```bash
git clone https://github.com/delriscotechnologies/vestigia.git
python -m http.server 8000
```

Open `http://localhost:8000/vestigia/`.

Opening `index.html` directly from the filesystem will not reproduce the GitHub Pages path and may leave assets unavailable.

## Repository contents

| Path | Purpose |
| --- | --- |
| `index.html` | Prebuilt page and rendered journal entries |
| `assets/vestigia.css` | Compiled site styles |
| `assets/vestigia.js` | Compiled site behavior |
| `photos/` | Published journal images |
| `vestigia-logo.png` | Site icon and branding |

The editable application source, dependency manifest, lockfile, and build workflow are not included in this snapshot.

## Publishing safety

- Everything committed under `photos/` is publicly downloadable.
- Remove unnecessary image metadata and review backgrounds, signs, documents, and location clues before publishing.
- Keep original private photographs and backups outside the public repository.
- Verify the hosted page after changing filenames or absolute `/vestigia/` paths.

## License

No license file is currently included in this repository.
