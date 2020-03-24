# GITHUB

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
