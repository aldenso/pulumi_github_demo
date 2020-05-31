import * as pulumi from "@pulumi/pulumi";
import { readFileSync } from "fs";

const config = new pulumi.Config();

export var datafile = "";

try { datafile =  readFileSync("files/gitignore", {
    encoding: "utf8"
}).toString();
} catch(err) {
    console.log(err)
}

export const devBranch = "develop";

export const suffix = config.require('suffix')
