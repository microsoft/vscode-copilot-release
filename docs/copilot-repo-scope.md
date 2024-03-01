# GitHub Copilot Chat authentication requirements

In order to use GitHub Copilot Chat, we require the following permissions from the user:
* The user's identity - to authenticate the user has access to GitHub Copilot
* Access to your repositories on GitHub - only applicable in some scenarios, please read on for more information

## Why does GitHub Copilot Chat ask for permissions to my repositories?

Copilot Chat uses a service, also provided by GitHub to search a repository for code snippets using natural language. This service improves the speed and quality of chat responses related to the repository you have opened. By definition, this service requires read access to your repositories.

#### What not just ask for read permissions?

VS Code's GitHub Authentication stack uses a [GitHub OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps) to authenticate users and GitHub Copilot Chat leverages this authentication stack to authenticate. As mentioned above, this GitHub search service requires read access to your repositories. The only way to do this using GitHub OAuth Apps is by asking for the `repo` scope.
> For a list of all possible scopes, please refer to the [GitHub OAuth Apps documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).

The `repo` scope also includes write access to your repositories. This is a limitation of GitHub's OAuth Apps today and thus is the reason why we are asking for read and write access to your repositories.

#### What if I don't want to consent to the `repo` scope?

In Copilot Chat, we only ask for this `repo` scope where it makes sense. We don't need to ask for it if:
* You are using GitHub Copilot but not GitHub Copilot Chat (chat is not enabled)
* You are working with a public GitHub repository (which does not need `repo` scope)
* You are not working with a GitHub repository


If you still don't want to consent, you can cancel the prompt that is shown and the extension will still function, though with reduced quality and performance in some scenarios.

When a solution is available to reduce the scope of permissions required, we will update the extension to use the new solution.
