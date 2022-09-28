#!/usr/bin/env node
import chalk from "chalk";
import path from "node:path";
import { cwd } from "node:process";
import { mkdirSync } from "node:fs";
import gradient from "gradient-string";
import figlet from "figlet";

// getting directory names from cli arguments.
const cliArguments = process.argv;
const directoryNames = cliArguments.slice(2);

// exiting if no directory names are specified in the cli.
if (directoryNames.length === 0) {
  console.log(chalk.red("Please specify the component name(s)."));
  console.log(chalk.blueBright("eg., srfc Box"));
  process.exit(1);
}

// creating directories for all the directory names specified in the cli.
const currentTerminalDirectory = cwd();

directoryNames.forEach(directoryName => {
  try {
    const directory = path.resolve(currentTerminalDirectory, directoryName);

    mkdirSync(directory, {recursive: true});
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
});

//displaying a cool done message.
figlet("Done :)", (error, data) => {
  console.log(gradient.mind(data));
});
