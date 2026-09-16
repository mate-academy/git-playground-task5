# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny command-line notes tool used as the practice repo for a Git lesson on merge conflicts (Unit 4, Lesson 5). It ships with two branches, `feature-a` and `feature-b`, that intentionally change the same line in different ways so merging produces a conflict to resolve. See README.md for the full lesson walkthrough.

## Commands

- Run the CLI: `node notes.js <command>` (or `npm start -- <command>`)
  - `node notes.js add <text>` — add a note
  - `node notes.js list` — list all notes
  - `node notes.js search <term>` — list notes containing a term
  - `node notes.js delete <id>` — delete a note
- Run all tests: `npm test` (uses Node's built-in `node --test` runner)
- Run a single test file: `node --test tests/notes.test.js`
- No build/lint step — this is plain, dependency-free Node.js (no `dependencies` in package.json).

## Architecture

- `notes.js` — CLI entry point. Parses `process.argv`, dispatches on the first argument (`add`/`list`/`search`/`delete`) to `lib/store.js`, and prints results.
- `lib/store.js` — all persistence and query logic. Notes are stored as JSON in `notes.json` at the repo root (gitignored, created on first `add`). Each call to `add`/`remove`/`search` does a full `load()`/`save()` round-trip against that file — there is no in-memory cache between CLI invocations, since each command is a fresh process. `matches(notes, term)` is exported separately from `search(term)` so tests can check filtering logic against an in-memory array without touching the filesystem.
- `lib/config.js` — static settings (currently just `SESSION_TIMEOUT_MINUTES`, displayed in the CLI's help text but not otherwise enforced in code).
- `tests/notes.test.js` — exercises `matches()` directly rather than going through the CLI or the file-backed `load`/`save`.
- CI (`.github/workflows/ci.yml`) runs `npm test` on every pull request via GitHub Actions (Node 22).
