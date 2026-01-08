/**git-and-github-workflow  - version 7.09 - data js
 * - Features: 
 *    
 *     --> Adding 'git stash'
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

export const TitlesData = [
    {
      id:1,
      category:'Main Title',
      title:'Welcome to the Git and GitHub Workflow guide!',
      description:''
    },
    {
      id:2,
      category:'sub titles',
      title:'Commands Pallete',
      description:''
    },
]

export const gitCommands = [
    {
      id:1,
      category:'git daily use',
      command:'git status',
      description:'git status track new files, show the current state of your working directory and staging area. It helps you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git.'
    },
    {
      id:2,
      category:'git daily use',
      command:'git add',
      description:'git add for a file is modified but unstaged, use git add <file> to stage it'
    },
    {
      id:3,
      category:'git daily use',
      command:'git add .',
      description:'git add . Represents the current directory, meaning all new, modified, or deleted files will be staged'
    },
    {
      id:4,
      category:'git daily use',
      command:'git commit -m "commit message"',
      description:'git commit -m "commit message" Replace "commit message" with a brief description of the changes that you made'
    },
    {
      id:5,
      category:'git daily use',
      command:'git commit --amend',
      description:'git commit --amend will open your default text editor with the previous commit message. You can make changes to the message if needed.'
    },
    {
      id:6,
      category:'git daily use',
      command:'    git log --oneline',
      description:'git log --oneline this command will list the commits with their hash values. Identify the commit you want to edit and note its hash'
    },
    {
      id:7,
      category:'git daily use',
      command:'git reset HEAD~1',
      description:'git reset HEADC~n this command will list the commits with their hash values. Identify the commit you want to edit and note its hash'
    },
    {
      id:8,
      category:'git daily use',
      command:'git reset',
      description:'git reset this command will unstage the changes for the specified file, effectively removing it from the staging area while keeping your changes in the working directory.'
    },
    {
      id:9,
      category:'git often use',
      command:'git remote -v',
      description:'git remote -v lists all the remote repositories linked to your local Git repository, showing their names (like origin) and their corresponding URLs. The -v (verbose) option displays both the fetch and push URLs for each remote.'
    },
    {
      id:10,
      category:'git often use',
      command:'git init',
      description:'git init initializes a New Git respository in the current directory'
    },
    {
      id:11,
      category:'git often use',
      command:'git push',
      description:'git push pushes local changes to a remote repository'
  },
  {
      id:12,
      category:'git often use',
      command:'git pull',
      description:'git pull bring changes from a remote repository and merges into the local repository'
  },
  {
      id:13,
      category:'git often use',
      command:'git remote',
      description:'git remote add a remote repository, view it, and rename it'
  },
  {
      id:14,
      category:'git often use',
      command:'git branch',
      description:'git branch list all branches, create a new branch, with a specified name, and confirms it\'s created'
  },
  {
      id:15,
      category:'git often use',
      command:'git fetch',
      description:'git fetch retrives the latest data from a remote repository - but it doesn\'t integrate any of this new data into your working files'
  },
  {
      id:16,
      category:'git often use',
      command:'git checkout',
      description:'git checkout switches to the specified branch'
  },
  {
      id:17,
      category:'git often use',
      command:'git merge',
      description:'git merge does merges the specified branch into the current branch ( in this case main )'
  },
  {
      id: 18,
      category: 'git daily use',
      command: 'git log -p',
      description: 'git log -p shows the commit history including the actual diff (the changes) made in each commit.'
  },
  {
      id: 19,
      category: 'git daily use',
      command: 'git log',
      description: 'git log shows the commit history for the current repository.'
  },
  {
      id: 20,
      category: 'git daily use',
      command: 'git log --graph --oneline --all',
      description: 'git log --graph --oneline --all displays a visual ASCII graph of the branch structure and commit history across all branches.'
  },
  {
      id: 21,
      category: 'git often use',
      command: 'git stash',
      description: 'git stash temporarily shelves (stashes) changes you’ve made to your working copy so you can work on something else, and then come back and re-apply them later.'
  },
  {
      id: 22,
      category: 'git often use',
      command: 'git stash pop',
      description: 'Removes the most recent stash from your stash list and applies it to your current working directory.'
    }
]
