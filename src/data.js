/**git-and-github-workflow  - version 4.13 - data js
 * - Features: 
 *    
 *     --> Adding 'git push' 
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
      description:'Track new files, show the current state of your working directory and staging area. It helps you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git.'
    },
    {
      id:2,
      category:'git daily use',
      command:'git add',
      description:'If a file is modified but unstaged, use git add <file> to stage it'
    },
    {
      id:3,
      category:'git daily use',
      command:'git add .',
      description:'Represents the current directory, meaning all new, modified, or deleted files will be staged'
    },
    {
      id:4,
      category:'git daily use',
      command:'git commit -m "commit message"',
      description:'Replace "commit message" with a brief description of the changes that you made'
    },
    {
      id:5,
      category:'git daily use',
      command:'git commit --amend',
      description:'This will open your default text editor with the previous commit message. You can make changes to the message if needed.'
    },
    {
      id:6,
      category:'git daily use',
      command:'    git log --oneline',
      description:'This command will list the commits with their hash values. Identify the commit you want to edit and note its hash'
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
    }
]