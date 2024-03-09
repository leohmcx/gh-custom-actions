# gh-custom-actions

Links:

- https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions
- https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action

![](readme-images/action-types.png?raw=true)

![](readme-images/inputs.png?raw=true)

![](readme-images/outputs.png?raw=true)


- cd .github/actions/deploy-s3-javascript
- npm init -y 
- npm install @actions/core @actions/github @actions/exec
- the node_modues in this folder .github/actions/deploy-s3-javascript must be commited for main.js run correctly in the server.

![](readme-images/aws.png?raw=true)

![](readme-images/summary.png?raw=true)