import * as vscode from "vscode";
import { createDevContainerCommand } from "./commands/createDevContainer";
import { startCCFNetworkDevContainer } from "./commands/startCCFNetworkInDevContainer";
import { startCCFNetworkDocker } from "./commands/startCCFNetworkInDocker";
import { createMCCFInstance } from "./commands/mccfDeployment";
import { listMCCFInstances } from "./commands/listMCCFInstance";
import { submitProposal } from "./commands/submitProposal";
import { generateIdentity } from "./commands/generateIdentity";
import { votingProcedure } from "./commands/votingProcedure";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log("Extension Activated");

  // COMMAND: Create CCF project in devcontainer
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.createCCFDevContainer",
      () => createDevContainerCommand(context),
    ),
  );

  // COMMAND: Start CCF network in devcontainer
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.startCCFNetworkDevContainer",
      startCCFNetworkDevContainer,
    ),
  );

  // COMMAND: Start CCF network in docker container
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.startCCFNetworkDocker",
      startCCFNetworkDocker,
    ),
  );

  // COMMAND: Submit proposal
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.submitProposal",
      () => submitProposal(context),
    ),
  );

  // COMMAND: Generate identity
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.generateIdentity",
      () => generateIdentity(context),
    ),
  );

  // COMMAND: Vote on proposal
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-azure-managed-ccf.votingProcedure",
      () => votingProcedure(context),
    ),
  );
}

// This method is called when your extension is deactivated
export function deactivate() {
  console.log("Extension Deactivated");
}
