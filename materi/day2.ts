/* 
branch, clone, forks
*/

/* 

Lambang Git
U --> untrack (tidak diketahui)
A --> dikenali
M --> Modified

*/


//cara rename: git branch -m "nama"
// check status: git status


// ==================================== WORKFLOW GIT ===========================

/*

WORKING DIRECTORY ---> STAGING AREA ---> REPOSITORY

*/


// ==================================== WORKFLOW GITHUB ===========================

/*

Repository Git Local ---> git push origin main ---> Repository Github

*/


// ======================== STEP Saved Github ==============================
// 1. git add .
// 2. git commit -m "prefix: commit message"
// 3. git push origin main


// ======================== Group Workflow in GitHub ==============================
// 1. git clone "url repository"
// 2. git checkout -b "branch name"
// 3. git add .
// 4. git commit -m "prefix: commit message"
// 5. git push origin "branch name"

// After Review, Pull ke repository local: git pull origin main

/*
develop --> feature --> Pull Request (code review) --> develop --> staging --> main
*/