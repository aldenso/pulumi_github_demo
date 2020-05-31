// import * as k8s from "@pulumi/kubernetes";
// import * as pulumi from "@pulumi/pulumi";
// import * as gcp from "@pulumi/gcp";
import * as github from "@pulumi/github";
import { describe, it } from "mocha";
import { expect } from 'chai';
import * as config from "../config/config"

import { promise } from "./";
import * as infra from "../index";

describe("Infrastructure", () => {
    const repo: github.Repository = infra.repo;

    describe("#Org Repo Name", () => {
        it("must have dev branch in name", async () => {
            const name = await promise(repo.name);
            expect(name).to.include(config.suffix)
        });
    }),
    describe("#Org Repo Privacy", () => {
        it("must be a private repo", async () => {
            const privacy = await promise(repo.private);
            expect(privacy).is.true
        });
    });

    const gitignore: github.RepositoryFile = infra.gitignorefile;
    describe("#Gitignore file", function () {
        it("must have content", async () => {
            const gFile = await promise(gitignore.content);
            expect(gFile).not.eq("");
        });
    });
});
