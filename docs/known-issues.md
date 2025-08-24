# Known Issues with GitHub Copilot Chat in VS Code

This document tracks known limitations and issues with the GitHub Copilot Chat experience in Visual Studio Code.

## Copy All Functionality

### Issue: Copy All Missing CLI Commands and Code Blocks

**Problem:** When using the "Copy All" functionality in the Copilot Chat pane, not all content from the conversation is copied. Specifically, CLI commands that were suggested and executed during the chat session are missing from the copied text.

**Symptoms:**
- Using "Copy All" from the Chat conversation context menu
- The copied text is incomplete
- Missing terminal commands that were displayed in the chat
- Missing code blocks or executed command outputs

**Expected Behavior:** 
The "Copy All" functionality should include all visible content from the chat conversation, including:
- All text responses from Copilot
- CLI commands suggested by Copilot
- Code blocks and snippets
- Command execution results
- User messages and context

**Current Workaround:**
- Manually select and copy individual sections of the conversation
- Copy CLI commands separately from their display areas
- Use screenshot tools to capture the complete conversation visually

**Reporting:**
This issue should be reported to the main VS Code repository as it affects the core chat functionality. Use the following template when reporting:

```
Title: Copilot Chat Copy All functionality missing CLI commands and code blocks

Steps to Reproduce:
1. Start a Copilot Chat session
2. Ask for help with CLI commands or code that generates terminal commands
3. Allow Copilot to suggest and execute commands
4. Right-click in the chat pane and select "Copy All"
5. Paste the content elsewhere
6. Observe that CLI commands and code blocks are missing

Expected: All visible chat content should be copied
Actual: CLI commands and some code blocks are missing from copied text
```

**Related Issues:**
- Original report: #5667
- Feature request: #5668

**Status:** Open - needs to be addressed in VS Code core functionality

---

## Reporting Additional Issues

Since this repository has been deprecated, please report new issues to:
- [VS Code repository](https://github.com/microsoft/vscode/issues/new?labels=chat-oss-issue) for Copilot Chat issues
- [Community Discussions](https://github.com/orgs/community/discussions/categories/copilot) for questions