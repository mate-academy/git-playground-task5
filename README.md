# Unit 4 Git playground — Lesson 5

A tiny command-line notes tool, used as the practice repo for Unit 4, Lesson 5 (merge conflicts). This repo has two branches, `feature-a` and `feature-b`, that changed the same line in different ways. Merging them creates a conflict on purpose — your job is to have Claude resolve it so both changes survive.

### The app
- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js search <term>` — list notes containing a term
- `node notes.js delete <id>` — delete a note

Layout: `notes.js` is the entry point, `lib/store.js` loads, saves, and searches notes, `lib/config.js` holds settings, and `tests/` holds the test suite (`npm test`).

### Set up
1. Make sure you have your own copy of this repo (created from the lesson on the platform).
2. Clone it locally and open Claude Code in the folder.
3. Ensure that you have copied all the branches. If not, additionally, copy `feature-a` and `feature-b`.

### Lesson 5 task — resolve a merge conflict
Goal: merge two branches that touched the same line, and have Claude resolve the conflict so both changes survive — not just one.

6. **Open a pull request (against the main repository, not your fork,) from `feature-a` into `main`.** Ask Claude: *"Open a pull request for `feature-a` into `main`."* Then submit the pull request link.
 main
