# Contributing to the CUGOS Website

The CUGOS website is built on [Jekyll](https://jekyllrb.com/) and hosted via GitHub Pages. All contributions are welcome. Please first review our [Code of Conduct](https://cugos.org/code-of-conduct). If you have questions and want faster and more reliable responses, [join us on Slack](https://join.slack.com/t/cugos/shared_invite/enQtNjcwMjIyNDg3MjY4LWM2NzY1NjAwZmNmZGU3ZjFkYjNhZjdjYjY2NWI4NGJkY2I4OGE2MDJjZTRmNDkwMjM2MTRiZGIyMThkMzNiYWU).

## Site Structure

The site uses Jekyll's post system to manage content. Most content lives in dated Markdown files organized into subdirectories:

| Directory | Content |
| --------- | ------- |
| `meetings/_posts/` | Monthly meeting agendas |
| `notes/_posts/` | Meeting notes and summaries |
| `blog/_posts/` | Blog entries |
| `people/_posts/` | Member profiles |

New content follows the naming convention `YYYY-MM-DD-description.md` (or `.markdown` for older files). To add a new page, copy the most recent file in the relevant directory and update the content.

## Picking Up an Issue

If you'd like to work on an open issue, assign yourself. This lets others know it's being handled. There's no formal assignment process. If something is sitting unassigned and you have the time, go for it.

Each time you work on the issue, leave a comment so others know it is active. You can also ask questions or explain if you are stuck; someone else may be able to offer suggestions.

If you end up no longer wanting to or not being able to fix the issue, please leave a comment with anything you learned and unassign yourself so someone else can pick it up.

If you want to work on an issue that is already assigned, leave a comment saying you would like to contribute. If someone reaches out to you this way, please respond within 48 hours. It's up to the original assignee whether to accept help. You can always thank someone who offers and suggest they review your PR instead, but you're welcome to accept other types of help too.

If an issue is assigned but has no updates or PRs within a month, it is assumed to be inactive. We will add an `inactive` label and ping the assignee; if there is no response within a week, the issue becomes open again.

## Contributing an Idea or Bug Report

On the Issues tab, press **New Issue** to open an issue. It's a lightweight way to start a conversation and anyone should feel free to do this.

For small, self-contained changes you know how to fix (fixing a broken link, updating an event page, correcting a typo), just open a PR. No issue needed.

For anything structural (a new feature, a layout change, a refactor), open an issue first to describe the problem and proposed approach. This gives other members a chance to weigh in before work begins and avoids duplicating effort.

## Local Setup

You can skip this step when making text or Markdown changes only, and instead follow the instructions in the README for editing via GitHub's editor.

For all other changes, please clone the repo, develop, and test locally before submitting a PR.

```bash
git clone https://github.com/YOUR-USERNAME/cugos.github.com.git
cd cugos.github.com
gem install jekyll
jekyll serve
```

The site will be available in your browser at `localhost:4000`.

## Opening a Pull Request

1. Fork or branch from `main`
2. Make your changes and test locally
3. Open a pull request with a brief description of what changed and why
4. Request a review from another CUGOS member (or several)

If you don't know who to assign, it's ok to leave it blank, but if you can please ping in the [CUGOS Slack](https://cugos.slack.com) so someone can get to it quickly.

All PRs to `main` require at least one approval before merging. The goal is a second set of eyes, not a formal gate.

## Reviewing a PR

Anyone in the CUGOS community is welcome to review a PR. A good review:

- Confirms the change works as described
- Flags anything that looks broken or inconsistent with the rest of the site
- Is constructive: suggest alternatives rather than just pointing out problems

If a PR looks good to you, approve it. If you have questions or concerns, leave a comment. Keep feedback focused on the change, not the contributor.

## Handling Review Feedback

If you receive feedback, respond to each comment, either with a code change or an explanation of why you've taken a different approach. Once all comments are resolved, re-request review. If feedback sits unaddressed, a reviewer may close the PR with a note that it can be reopened when ready.

## Getting Direct Push Access

If you'd like to contribute regularly without forking, [join the CUGOS Slack](https://join.slack.com/t/cugos/shared_invite/enQtNjcwMjIyNDg3MjY4LWM2NzY1NjAwZmNmZGU3ZjFkYjNhZjdjYjY2NWI4NGJkY2I4OGE2MDJjZTRmNDkwMjM2MTRiZGIyMThkMzNiYWU) and reach out. Someone will add you to the CUGOS GitHub organization.
