# Git Push Instructions

## Authentication Required

You need to authenticate with GitHub to push your code. Here are the options:

### Option 1: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not installed
# For Ubuntu/Debian:
# sudo apt install gh

# Authenticate
gh auth login

# Then push
cd /home/shahiil/Desktop/AI_web/ex-5
git push -u origin main
```

### Option 2: Using Personal Access Token
```bash
# 1. Go to GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate new token (classic) with 'repo' permissions
# 3. Copy the token
# 4. Use it as password when pushing:

cd /home/shahiil/Desktop/AI_web/ex-5
git push -u origin main
# Username: shahiilr
# Password: <paste your token>
```

### Option 3: Using SSH Key
```bash
# 1. Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Copy public key
cat ~/.ssh/id_ed25519.pub

# 3. Add to GitHub → Settings → SSH and GPG keys → New SSH key

# 4. Change remote to SSH
cd /home/shahiil/Desktop/AI_web/ex-5
git remote remove origin
git remote add origin git@github.com:shahiilr/AIWD-EX-5.git
git push -u origin main
```

## Current Status

✅ Repository initialized
✅ All files added and committed
✅ Branch renamed to 'main'
✅ Remote added
❌ Push requires authentication

## What's Been Committed

- 📝 Comprehensive README.md with project documentation
- 🎯 Program 1: Quiz App with Timer (HTML, CSS, JS)
- ⏰ Program 2: Event Countdown Timer (HTML, CSS, JS)
- 📸 Screenshots directory structure

## After Authentication

Once you authenticate, simply run:
```bash
cd /home/shahiil/Desktop/AI_web/ex-5
git push -u origin main
```

## Adding Screenshots Later

To add screenshots after taking them:
```bash
# Add screenshot images to the screenshots/ directory
cd /home/shahiil/Desktop/AI_web/ex-5
git add screenshots/*.png
git commit -m "Add application screenshots"
git push origin main
```

## Verify Repository

After successful push, visit:
https://github.com/shahiilr/AIWD-EX-5

The README will automatically display with all formatting and links to screenshots.
