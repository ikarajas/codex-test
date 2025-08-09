import * as vscode from 'vscode';

export function activate(context: any) {
  const disposable = vscode.commands.registerCommand('codextest.helloWorld', () => {
    vscode.window.showInformationMessage('Hello from Codex Test Extension!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
