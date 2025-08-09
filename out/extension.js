"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('codextest.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from Codex Test Extension!');
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map