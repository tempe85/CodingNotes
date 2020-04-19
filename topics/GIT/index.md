<small>[Return Home](../../README.md)</small>

# GIT

<u>Local links</u>

- [Github](./github.md)

<u>Useful links</u>

- [Getting started](https://help.github.com/en/desktop)
- [Git stash tips and tricks](https://www.freecodecamp.org/news/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a/)

### Basics of GIT

| Keyword      | Description                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| Master       | Main branch of repo. Most complete                                                                          |
| Branch       | Seperate version of project.                                                                                |
| Commit       | Snapshot of workspace.                                                                                      |
| Merge        | Process of taking a branch and applying those changes to the thing it branched off of.                      |
| Clone        | Copy of repo. All branches are generally cloned as well. The repo you cloned from is referred to as origin. |
| Push         | Current branch pushing into branch it was branched off of.                                                  |
| Pull-request | GitHub. Once repo owner authorizes pull request, it work like a merge.                                      |

## Stashing

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `git stash list`    | List stashes                                   |
| `git stash apply n` | n is the number of the stash you want to apply |
| `git stash drop n` | n is the stash number to remove
|`git stash pop n` | Pops stash off stack and bumps other stashes up, probably better practice than drop                |
| `git stash save "Your message"` | Saves a stash and tags it with a message |
| `git stash save -u "Message"` | Stashes untracked files with message |
|`git stash show -p "stash@{n}"` | Shows change contents in a stash
|`git stash branch <name>` | Creates a new branch with lates stash, and then deletes the latest stash. can add `"stash@{n}` to specify a stash other than @0
|`git checkout -b myFeature develop` | Allows you to create a new branch, branched off of a branch named 'develop'


## Commits

<u>Revert a commit </u>

- Run: `git reset --soft HEAD~1`

<u>Revert a push</u>

- First revert a commit: `git reset --soft HEAD~1`
- Then run: `git push -f` (at least on bitbucket)
