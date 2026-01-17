/**git-and-github-workflow  - version 9.12 - data js
 * - Features: 
 *    
 *     --> Adding third step to rathuentication data 
 * 
 * Note: This first adding is to test the new UI
 * and then proceed to refactor
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
      description: 'git commit -m "commit message" Replace "commit message" with a brief description of the changes that you made',
      usage:'$ git add .\n$ git commit -m "Add new login feature"'
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
      description: 'git stash removes the most recent stash from your stash list and applies it to your current working directory.'
  },
  {
      id: 23,
      category: 'git often use',
      command: 'git diff',
      description: 'git diff shows the differences between your current working directory and the staging area (unstaged changes).'
  },
  {
      id: 24,
      category: 'git power use',
      command: 'git checkout -b <branch-name>',
      description: 'git checkout -b <branch-name> is shortcut that creates a new branch and immediately switches you to it.'
  },
  {
      id: 25,
      category: 'git power use',
      command: 'git cherry-pick <commit-hash>',
      description: 'Applies the changes from a specific commit from another branch onto your current branch.'
  },
  {
    id: 26,
    category: 'git authentication',
    command: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
    description: 'ssh-keygen Generates a new SSH key using the Ed25519 algorithm. This is the first step in setting up secure, password-less communication with GitHub.'
  },
  {
    id: 27,
    category: 'git authentication',
    command: 'ssh -T git@github.com',
    description: 'ssh -T git@github.com tests your SSH connection to GitHub. If successful, you will see a "Hi username! You\'ve successfully authenticated" message, confirming your key is working.'
  },
  {
    id: 28,
    category: 'git authentication',
    command: 'git config --global user.name "Your Name"',
    description: 'git config --global user.name "Your Name" sets the name that will be attached to your commits/ globally. This ensures GitHub identifies you correctly in the commit history.'
  },
  {
    id: 29,
    category: 'git authentication',
    command: 'git config --global user.email "email@example.com"',
    description: 'git config --global user.email "email@example.com" sets the email address for your commits. Important: This must match your GitHub account email for your contributions to be linked to your profile.'
  },
  {
    id: 30,
    category: 'git authentication',
    command: 'git remote set-url origin git@github.com:user/repo.git',
    description: 'git remote set-url origin git@github.com:user/repo.git switches an existing repository from HTTPS to SSH. Use this if you are tired of being asked for a Personal Access Token (PAT) on every push.'
  },
  {
    id: 31,
    category: 'git authentication',
    command: 'git config --global credential.helper store',
    description: 'git config --global credential.helper store saves your Personal Access Token (PAT) in a local file so you don\'t have to re-enter it. Use only on private, secure computers.'
  },
  {
    id: 32,
    category: 'git authentication',
    command: 'ssh-add ~/.ssh/id_ed25519',
    description: 'ssh-add ~/.ssh/id_ed25519 adds your private SSH key to the ssh-agent. This manages your keys and allows you to use them without re-entering your passphrase constantly.'
  },
  {
    id: 33,
    category: 'git authentication',
    command: 'eval "$(ssh-agent -s)"',
    description: 'Starts the SSH agent in the background. This is the first step to ensure your system is ready to handle your security keys.'
  },
  {
    id: 34,
    category: 'git authentication',
    command: 'ssh-add ~/.ssh/id_ed25519',
    description: 'Adds your specific SSH private key to the agent. This "unlocks" your identity for your current terminal session.'
  },
    {
    id: 35,
    category: 'git authentication',
    command: 'ssh-add -l',
    description: 'Fingerprint check. This command lists the keys the agent currently "knows." If you don\'t see your key here, the previous step failed.'
  },

]
