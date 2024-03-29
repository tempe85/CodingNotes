<small>[Return Home](../../README.md)</small> | <small>[Return to Git](index.md)</small>

# GITHUB

Important Links:

- [Github Handbook](https://guides.github.com/introduction/git-handbook/)

Deletes all branches merged with master/develop:

```shell
git branch --merged | %{$_.trim()}  | ?{$_ -notmatch 'develop' -and $_ -notmatch 'master'} | %{git branch -d $_}
```

`git branch --merged` : Lists all branches merged to current branch

### Add Existing Project to Git

1. Create a new repository on GitHub.
   In Terminal, change the current working directory to your local project.

2. Initialize the local directory as a Git repository.

`git init`

- Add the files in your new local repository. This stages them for the first commit.

`git add .`

```javascript
const express = require("express");
const cors = require("cors");
const app = express();
const port = "3030";

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

app.listen(port, () => console.log(`Listening on port: 3030`));
```

or:

`git add --all`

- Commit the files that you've staged in your local repository.

`git commit -m 'First commit'`

- Copy remote repository URL field from your GitHub repository, in the right sidebar, copy the remote repository URL.

- In Terminal, add the URL for the remote repository where your local repostory will be pushed.

`git remote add origin <remote repository URL>`

- Sets the new remote:

`git remote -v`

- Push the changes in your local repository to GitHub.

`git push origin master`

- Pushes the changes in your local repository up to the remote repository you specified as the origin

### VSCODE

- Make a project into a repo and then publish
  1. Click on source control on the left toolbar and initial repo
  2. Commit changes and push local repo
  3. Add a repo on github, copy the clone url
  4. Type in follow commands:
  ```python
  git remote add origin https://[githuburl]/repo.git
  git remote -v #Verifies repo is connected
  git push -u origin master
  ```
  5. Can also checkout https://code.visualstudio.com/docs/editor/versioncontrol#_remotes
