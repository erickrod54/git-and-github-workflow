/**git-and-github-workflow  - version 6.12 - data js
 * - Features: 
 *    
 *     --> Adding 'git log --oneline' to description 
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
      description:'This command will list the commits with their hash values. Identify the commit you want to edit and note its hash'
    },
    {
      id:8,
      category:'git daily use',
      command:'git reset',
      description:'This command will unstage the changes for the specified file, effectively removing it from the staging area while keeping your changes in the working directory.'
    },
    {
      id:9,
      category:'git often use',
      command:'git remote -v',
      description:'lists all the remote repositories linked to your local Git repository, showing their names (like origin) and their corresponding URLs. The -v (verbose) option displays both the fetch and push URLs for each remote.'
    },
    {
      id:10,
      category:'git often use',
      command:'git init',
      description:'initializes a New Git respository in the current directory'
    },
    {
      id:11,
      category:'git often use',
      command:'git push',
      description:'Pushes local changes to a remote repository'
  },
  {
      id:12,
      category:'git often use',
      command:'git pull',
      description:'Pull changes from a remote repository and merges into the local repository'
  },
  {
      id:13,
      category:'git often use',
      command:'git remote',
      description:'Add a remote repository, view it, and rename it'
  },
  {
      id:14,
      category:'git often use',
      command:'git branch',
      description:'list all branches, create a new branch, with a specified name, and confirms it\'s created'
  },
  {
      id:15,
      category:'git often use',
      command:'git fetch',
      description:'Retrives the latest data from a remote repository - but it doesn\'t integrate any of this new data into your working files'
  },
  {
      id:16,
      category:'git often use',
      command:'git checkout',
      description:'switches to the specified branch'
  },
  {
      id:17,
      category:'git often use',
      command:'git merge',
      description:'Merges the specified branch into the current branch ( in this case main )'
    }
]
