# Complaint Intake

This project improves the online forms used by consumers to submit complaints about the financial marketplace. It is currently in the initial discovery phase of development.

- **Status**:  Alpha [CHANGELOG](/CHANGELOG.md)


----

## Dependencies

- [Node](http://nodejs.org) and [npm (Node Package Manager)](https://www.npmjs.com): Used for downloading and managing front-end dependencies and assets.
- [Python](https://www.python.org/): Used to run a simple web server.

## Installation

Using the console, navigate to your project directory (`cd ~/Projects` or equivalent). Clone this project’s repository and switch to its directory with:

```bash
git clone git@github.com:cfpb/complaint-intake.git
cd complaint-intake
```
Then, run the setup script:

```bash
./setup.sh
```

## Development

Once the setup finishes, you can start developing.

First, open a **server** tab in your terminal and run:

```bash
python -m SimpleHTTPServer
```

Open a **gulp** tab in your terminal and run:

```bash
gulp watch
```

That should open a tab in your browser that points to `http://localhost:3000/dist/`, where you should see the complaint landing page.

Do all your development on the files in `/src/`. Your browser should automatically refresh the page as you make changes to anything in `/src/`.

Currently, the code lives in `/src/` and references legacy assets in `/src/v0/`. All the pages in there are being iteratively refactored to be more standard Capital Framework pages. Refactored JS and CSS will get moved to `/src/static/`.

## Releases

At the end of each sprint, we release the new iteration by updating the `gh-pages` branch. Here’s the process:

1. Run one final `gulp clean && gulp build` to make sure all the changes you want to release are built into the `dist` directory
2. Make a copy of the `dist` directory somewhere, like your desktop
3. Rename that copy of `dist` to the version you’re releasing, like `0.52`
4. `git checkout gh-pages`
5. Copy everything in your new version directory into the root of `gh-pages`, overwriting the old HTML files and the `static` and `v0` directories there
6. Move your new version directory into `versions`
7. `git add .`
8. `git commit -m 'Released X.X.X'` (where X.X.X is the version you’re releasing, like 0.6.0)
9. `git push origin gh-pages`
10. Check to make sure the latest version is available at two URLs:
  - https://cfpb.github.io/complaint-intake/
  - https://cfpb.github.io/complaint-intake/versions/X.X.X/ (where X.X.X is the version you’re releasing, like 0.6.0)
11. Switch back to `master`
12. Update `CHANGELOG.md` with the latest version’s release notes
13. Update `package.json` with the latest version
14. `git add .`
15. `git commit -m 'Updated changelog'`
16. `git push origin master`
17. Released!

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

