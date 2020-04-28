const { Octokit } = require("@octokit/action");
const octokit = new Octokit();

const res = await octokit.graphql(
    `query($owner:String!, $reponame:String!) {
        repository(owner:$owner, name:$reponame) {
           packages(names: [$reponame], last: 1) {
            totalCount
          }
        }
      }`,
    {
        owner: "os-jsplopes",
        reponame: "rds2",
        headers: {
            Accept: "application/vnd.github.packages-preview+json",
        },
    }
);

console.log(JSON.stringify(res, null, 2));
