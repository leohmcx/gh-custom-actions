const core = require('@actions/core');
const github = require('@actions/gihub');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JavaScript Action!')
}

run();