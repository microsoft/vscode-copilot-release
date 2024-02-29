# Why does GitHub Copilot Chat ask for permissions to read and write to my repositories?

First off, GitHub Copilot Chat will _never_ write to your repositories without your explicit permission. Additionally, at this time, there is no such feature that does write to your repositories in any capacity.

Back in November 2023, we adopted a new service, also by GitHub, to search a repository for code snippets using natural language. This service provides the fastest and most accurate search results out of any strategy we use. It may come to no surprise that this service that searches your repositories requires permission to read from them.

## So then why write permission as well?

VS Code's GitHub Authentication stack uses a [GitHub OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps) to authenticate users and GitHub Copilot Chat leverages this authentication stack to authenticate. As I mentioned above, this GitHub search service requires read access to your repositories. The only way to do this using GitHub OAuth Apps is by asking for the `repo` scope.
> For a list of all possible scopes, please refer to the [GitHub OAuth Apps documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).

Unfortunately, the `repo` scope also includes write access to your repositories. This is a limitation of GitHub's OAuth Apps today and thus is the reason why we are asking for read and write access to your repositories. I do want to reiterate that GitHub Copilot Chat will _never_ write to your repositories without your explicit permission and we are only asking for `repo` scope because we need it and have no other alternative to take advantage of the GitHub search service.

Said differently, the authentication flow is _not_ intended to be the gate for opting-in to writing to your repository. The scopes concept are in place so that you can have control over what 3rd party applications have access to. In the first party case, this doesn't really apply because GitHub, the entity, already has write access to your repositories.

One more time, we want to acknowledge the concern with GitHub Copilot Chat being an "AI extension" and asking for write access to your repositories. We are committed to working with the GitHub Identity team to find a solution that works for everyone and as I've said before, we will _never_ write to your repositories without your explicit permission.

## What are we doing about this?

We are in many discussions with other GitHub teams to find a good solution to this problem. Several options are available, some larger work items than others, but we are committed to sort this out. Ideas we are considering:
* Introduce a new scope that would allow GitHub Copilot Chat to read from your repositories but not write to them
* Move VS Code's GitHub Authentication stack to a GitHub App instead of a GitHub OAuth App

We will continue talking to the right teams at GitHub to come up with a solution that works for everyone. We are committed to this and will keep you updated as we make progress.

In addition to that, on the VS Code side, we promise to only ask for this `repo` scope where it makes sense. We don't need to ask for it if:
* You are using GitHub Copilot but not GitHub Copilot Chat (chat is not enabled)
* You are working with a public GitHub repository (which does not need `repo`)
* You are not working with a GitHub repository

Additionally, if you are still not convinced, you can always cancel the prompt that is shown and the extension will try to work as best as we can.
