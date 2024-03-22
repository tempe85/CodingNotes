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

| Command                             | Description                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `git stash list`                    | List stashes                                                                                                                    |
| `git stash apply n`                 | n is the number of the stash you want to apply                                                                                  |
| `git stash drop n`                  | n is the stash number to remove                                                                                                 |
| `git stash pop n`                   | Pops stash off stack and bumps other stashes up, probably better practice than drop                                             |
| `git stash save "Your message"`     | Saves a stash and tags it with a message                                                                                        |
| `git stash save -u "Message"`       | Stashes untracked files with message                                                                                            |
| `git stash show -p "stash@{n}"`     | Shows change contents in a stash                                                                                                |
| `git stash branch <name>`           | Creates a new branch with lates stash, and then deletes the latest stash. can add `"stash@{n}` to specify a stash other than @0 |
| `git checkout -b myFeature develop` | Allows you to create a new branch, branched off of a branch named 'develop'                                                     |

Iterate through and delete your git stashes:

```shell
for($i = 0; $i -lt 18; $i++){ git stash drop 0 }
```

Delete merged branches:

```shell
git branch --merged | %{$_.trim()}  | ?{$_ -notmatch 'develop' -and $_ -notmatch 'master'} | %{git branch -d $_}
```
Recover deleted stashes:
```shell
git log --graph --oneline --decorate $( git fsck --no-reflog | %{ $_.Split(' ')[2]; } )
```

```
git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -D
```
- Find the hash value for the stash you want to recover, then you can enter `git stash apply <hashvalue>`

## Commits

<u>Revert a commit </u>

- Run: `git reset --soft HEAD~1`

<u>Revert a push</u>

- First revert a commit: `git reset --soft HEAD~1`
- Then run: `git push -f` (at least on bitbucket)

<u>Reset a branch to match remote branch</u>

- Run: `git reset --hard origin/{branchName}`
- Use this when local master/develop are no longer matching the remote branch (e.g. accidental commit)

<u>Set a file to ignore changes</u>
`git update-index --assume-unchanged src/App/config.ts`

To turn this off:
`git update-index --no-assume-unchanged src/App/config.ts`

<u>Reset a repo (with deleting repo or removing stashes)</u>

- Run: `git reset --hard` and then `git clean -dxf`
- Use this when you want to reset a repo to a clean state.

<u>Pull and merge a different branch into your current branch</u>

- Run: `git pull origin <branchToMerge>`
