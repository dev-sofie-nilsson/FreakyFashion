# Freaky fashion grupprojekt

### Pre-requisites

- Ensure `node.js >= 18` is installed
- For simplicity, `VSCode` is recommended, other IDEs will work, but this documentation will be referring to `VSCode`

### Required VSCode plugins

- EJS language support
- SQLite3 Editor
- Prettier

### Clone project and install dependencies

1. `git clone https://github.com/Sebaelo/Grupparbete-backend.git`

2. `npm install`

### Create your own branch and add to remote

1. `git checkout -b <branch-name>`

2. `git push -u origin <branch-name>`

_NOTE: `<>` is a placeholder; replace with actual branch name_

### Recreate database

#### Start with step 1 if no FreakyFashion.db in data/ directory, otherwise skip step 1 and continue with steps 2-4.

1. Windows: `npm run db`  
   Linux/mac: `npm run dbu`

2. Copy queries from `data/FreakyFashion.sql`

3. Replace line 3 in the `data/FreakyFashion.db` query editor.  
   **_IMPORTANT: Keep line 1 in the query editor!_**

4. Run queries

### Start dev server

`npm run dev`

### What to do when you're done working in your branch

#### Save your latest changes:

`git add -A`

`git commit -m "<message>"`

`git status`

#### If main has been updated, merge to your branch

`git checkout main`

`git pull`

`git checkout <branch-name>`

`git merge main`

`git add -A`

`git commit -m "<message>"`

#### Continue here if main hasn't been updated

`git push`

_**Open PR on GitHub**_

### Cleanup **_after_** PR has been merged

1. `git checkout main`

2. `git pull origin main`

3. `git branch -d <branch-name>`

4. `git push origin -d <branch-name> `
