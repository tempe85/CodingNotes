- Unit tests
- Mocking
  - Testing code with things that don't exist

## What is a version control system (VCS)

Why?

- Multiple programmers need to work on same codebase
- Changes need to be combined
- Needs to be a way to undo changes that introduce bugs

VCS

- Create a centralized repo for project files
- Allows for merging of changes into the centralized codebase.
  - Requires conflicts to be fixed before merged
- Most create historical records of changes.
  - Timestamped with author name
  - Allows changes to be rolled back

### Actions

- Add
  - Add files to repos
- Commit
  - Push changes to existing files
- Update
  - Get most recent update version fo the files

`Centralized` - Store all files in central repo. As devs make changffes they are immediately sent to centralized repo and made available to the entire team.
`Decentralized` - Also have a central repo, but changes made by individual devs are not immediately sent to main repo. Each dev has a mini VCS on their local machine where changes can be committed without being made available to the rest of the team. Allows devs to only push changes to central repo when ready.

- `Git` is a decentralized VCS

### GIT

- command line program that lets any folder to be used as a local Git repository (`git init`)
- `git status` allows users to view changes that are not staged or untracked. 
  - files that have already been added to the repo are **not staged**
  - new files are **untracked**
- `git add <filename>` allows users to stage unstaged and untracked files
  - `git add -u` allows you to add all non-untracked files
- Files are added to repo when you `git commit`

#### Git branches
* A branch is an offshoot of the current state of the codebase
* Allows a user to make chagnes to files without breaking the stable version
* `git branch <branchname>` creates a branch
* `git checkout <branchname>` switches to that branch
* `git merge <branch_to_be_merged>` merges specified branch into branch currently checked out of
* 