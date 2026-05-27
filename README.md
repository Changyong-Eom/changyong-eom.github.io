# changyong-eom.github.io

Personal academic homepage — Jekyll, served by GitHub Pages.
Live at <https://changyong-eom.github.io/>.

## Local preview

One-time setup (already done on this machine):

```bash
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$HOME/.gem/ruby/4.0.0/bin:$PATH"
gem install --user-install jekyll bundler
bundle install
```

Add the `export PATH=...` line to your `~/.zshrc` so it's available in
every new terminal.

Run the dev server with live reload:

```bash
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. Edits to any `.md`, `.html`, or `.scss`
file refresh the browser automatically — no commit, no push needed while
iterating.

## Deploy

Push to `main`. GitHub Pages builds the site and serves it within ~30s.

```bash
git add -A && git commit -m "..." && git push
```

## Editing guide

| What you want to change | File |
|---|---|
| Bio / about page text  | `index.md` |
| News items             | `news.md` |
| CV                     | `cv.md` |
| Nav links              | `_config.yml` (`navigation:`) |
| Colors / typography    | `assets/css/main.scss` |
| Profile photo          | drop a file at `assets/img/profile.jpg`, then update the `src` in `index.md` |
| Social links           | replace the `href="#"` placeholders in `index.md` |

## File layout

```
.
├── _config.yml         site settings, nav, social
├── _includes/          head / header / footer fragments
├── _layouts/           page templates
├── assets/
│   ├── css/main.scss   all styling lives here
│   └── img/            profile photo + favicon
├── index.md            about page (homepage)
├── news.md
├── cv.md
└── Gemfile
```
