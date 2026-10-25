# Knowledge-Informed AI group website

Source of the website of the Knowledge-Informed AI group at IDSIA USI-SUPSI
(Lugano, Switzerland). The site is built with [Jekyll](https://jekyllrb.com)
and is compatible with the standard GitHub Pages build: no plugins beyond
`jekyll-seo-tag` and `jekyll-sitemap`, no Sass, no JavaScript build step.

## Where the content lives

Pages: Home (with the research lines and application domains), one page per
research line, Projects (with filters and one page per project), Publications
(with filters), Software, People (with the profile page of the group leader)
and a 404 page. The menu item "Research" points to the research lines on the home page;
`/research/` only forwards old links there. Almost all content
is stored in plain YAML and Markdown files, so the site can be updated without
touching HTML.

| What | File |
|------|------|
| Site title, contact, address, site URL | `_config.yml` |
| Menu and footer links | `_data/navigation.yml` |
| Research lines (home and research line pages) | `_data/themes.yml` |
| Research line pages | `research/<id>.html` (layout `_layouts/research-line.html`) |
| Application domains (home, tags and filters) | `_data/domains.yml` |
| Projects (Projects page, project pages, research line pages) | `_projects/*.md` (images in `assets/img/projects/`) |
| Earlier projects (Projects page, with filters, and research line pages) | `_data/past_projects.yml` |
| Publications | `_data/publications.yml` |
| Software (Software page, research line and project pages) | `_data/software.yml` |
| News (home page) | `_data/news.yml` |
| Group members and alumni | `_data/people.yml` (photos in `assets/img/people/`) |
| Profile of the group leader | `people/laura-azzimonti.html` |
| Open positions (People page, Join us) | `_data/positions.yml` |
| Page texts | `index.html`, `projects.html`, `publications.html`, `software.html`, `people.html` |

### Common tasks

**Add a publication.** Copy an entry in `_data/publications.yml`, give it a
unique `id` and fill in the fields. `lines` (research lines) and `domains`
(application domains) control the tags, the filters and the research line
pages where the paper appears. Set `selected: true`, `selected_theme` and a
one-sentence `note` to show it among the selected publications. Entries with a `status` (e.g.
`Under review`) are listed under "Submitted". `publications_page: false` shows
a paper only on the pages of its research lines. Keep the file ordered from
newest to oldest.

**Add a project.** Copy a file in `_projects/` and edit the front matter and
the text below it (shown on the project page). `major: true` gives the project
a large card on the Projects page and on the research line pages; the others are listed
under "Other projects". `themes` and `domains` control tags, filters and the
research line pages; `publications` and `software` list the ids shown on the
project page; `order` sets the position. `projects_page: false` hides a
project from the Projects page and shows it only on the pages of its research
lines.

**Add software.** Add an entry with a unique `id` to `_data/software.yml`, with
its `lines`, and list its id under `software` in the related projects.
`software_page: false` shows the entry only on the pages of its research lines.

**Add a person.** Add an entry under `members` in `_data/people.yml` and a
portrait photo (3:4, about 480 x 640 px) in `assets/img/people/`; add the name
as written in author lists to `highlight_authors` in `_config.yml`. Move former
members to `alumni` (shown as "Former members"), optionally with `role` and
current position (`now`).

**Add an earlier project.** Add an entry to `_data/past_projects.yml` with
`lines` and `domains`: the project is then shown by the filters of the
Projects page and on the pages of its research lines.

**Add news.** Add an entry at the top of `_data/news.yml`. The four most recent
items appear on the home page.

**Add an open position.** Add an entry to `_data/positions.yml`; it appears in
the Join us section of the People page.

**Links with a filter.** `/projects/?line=causal` or
`/publications/?line=federated&domain=lifesci` open the pages with the filters
already set.

## Preview on your computer

Requires Ruby (3.x) and Bundler.

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

If the site is published under a sub-path (option B below), use
`bundle exec jekyll serve --baseurl /kiai` to preview it with the same paths.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder to it (branch `main`).
2. In the repository, open **Settings > Pages**, choose **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. Set `url` and `baseurl` in `_config.yml` according to the address:
   - **A. Dedicated account or organisation** (e.g. `kiai-idsia`), repository
     named `kiai-idsia.github.io`:
     `url: "https://kiai-idsia.github.io"` and `baseurl: ""`.
   - **B. Sub-page of an existing site** (e.g. repository `kiai` under the
     account `laura-azzimonti`):
     `url: "https://laura-azzimonti.github.io"` and `baseurl: "/kiai"`.
   - **C. Custom domain** (e.g. a subdomain of idsia.ch): add a `CNAME` file
     with the domain, set `url` to the domain and `baseurl: ""`, and ask the
     IT service to create the DNS record.
4. Commit and push. The site is rebuilt automatically after every push.

## Files that are not published

This folder contains only the files of the website. Working material (earlier
versions, notes, examples, slides, CV) is kept outside the repository, in the
folder `materiale-extra`. As a safeguard, those names are still excluded from
Git (`.gitignore`) and from the Jekyll build (`exclude` in `_config.yml`).

## Credits

- Fonts: [Inter](https://rsms.me/inter/) and
  [Source Serif 4](https://github.com/adobe-fonts/source-serif), SIL Open Font
  License (self-hosted, see `assets/licenses/`).
- Icons: [Lucide](https://lucide.dev), ISC License.
- Project thumbnails are taken from the group's presentations and
  publications. The K-CLIER graphical abstract is from Legouis et al.,
  *iScience* 2024 (CC BY).
