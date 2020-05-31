// import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";
import * as config from "./config/config"
import * as https from "https";
import * as fs from "fs";

import { runTests } from "./tests";

export const repo = new github.Repository("demo-github-pulumi",
    {
        name: "demo-github-pulumi-"+config.suffix,
        description: "My repo for demo",
        topics: ["demo", "pulumi"],
        licenseTemplate: "mit",
        private: true,
    });

// exports.REPO = repo;

export const initialFiles = new github.RepositoryFile("initial file",
    {
        content: "# README demo",
        file: "README.md",
        repository: repo.id
    }
);

// exports.INITIALFILES = initialFiles;

const downloadfile = fs.createWriteStream("files/gitignore")
const request = https.get("https://www.gitignore.io/api/node,python,visualstudiocode", function(response){
    response.pipe(downloadfile)
});


export const gitignorefile = new github.RepositoryFile("gitignore file",
    {
        content: config.datafile,
        file: ".gitignore",
        repository: repo.id
    }
);



// exports.GITIGNORE = gitignorefile;

export const branch = new github.Branch("develop branch", {
    branch: "develop",
    sourceBranch: "master",
    repository: repo.id
});

runTests();