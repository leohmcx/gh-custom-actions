# gh-custom-actions

Links:

- https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions
- https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action
- https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
- https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#updating-your-github-actions-workflow

---
In addition to the concepts covered in this module, you should absolutely also explore the security guides by GitHub itself:

- General overview & important concepts: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions

- More on Secrets: https://docs.github.com/en/actions/security-guides/encrypted-secrets

- Using GITHUB_TOKEN: https://docs.github.com/en/actions/security-guides/automatic-token-authentication

- Advanced - Preventing Fork Pull Requests Attacks: https://securitylab.github.com/research/github-actions-preventing-pwn-requests/

- Security Hardening with OpenID Connect: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect

---

![](readme-images/action-types.png?raw=true)

![](readme-images/inputs.png?raw=true)

![](readme-images/outputs.png?raw=true)


- cd .github/actions/deploy-s3-javascript
- npm init -y 
- npm install @actions/core @actions/github @actions/exec
- the node_modues in this folder .github/actions/deploy-s3-javascript must be commited for main.js run correctly in the server.

![](readme-images/aws.png?raw=true)

![](readme-images/summary.png?raw=true)

---
- Activating OpenID to connect to aws cloud:

- Using an identity provider:

![](readme-images/identity-provider.png?raw=true)

- Role associated to an identity provider:

![](readme-images/role-associated.png?raw=true)

