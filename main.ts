/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk';

export enum LOG_LEVELS {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
}

let longestName = 0;
let colorCounter = 0;
const colors = ['#a103fc', '#db427a', '#5c64ff', '#36aaf7'];
let logLevel = LOG_LEVELS.INFO;

export default class LogBit {
  name: string;
  color: string;
  public constructor(name: string) {
    this.name = name;
    if (name.length > longestName) {
      longestName = name.length;
    }
    this.color = colors[colorCounter % colors.length];
    colorCounter++;
  }
  logLevelToName(level: LOG_LEVELS): string {
    switch (level) {
      case LOG_LEVELS.TRACE:
        return 'TRACE';
      case LOG_LEVELS.DEBUG:
        return 'DEBUG';
      case LOG_LEVELS.INFO:
        return 'INFO';
      case LOG_LEVELS.WARN:
        return 'WARN';
      case LOG_LEVELS.ERROR:
        return 'ERROR';
      default:
        return 'UNKNOWN';
    }
  }
  logLevelToColor(level: LOG_LEVELS): string {
    switch (level) {
      case LOG_LEVELS.TRACE:
        return '#b175ff';
      case LOG_LEVELS.DEBUG:
        return '#42bfdb';
      case LOG_LEVELS.INFO:
        return '#42db59';
      case LOG_LEVELS.WARN:
        return '#ffda36';
      case LOG_LEVELS.ERROR:
        return '#ff0000';
      default:
        return '#000000';
    }
  }
  log(level: LOG_LEVELS, ...messages: any[]): void {
    if (level >= logLevel) {
      const pad = ' '.repeat(longestName + 2 - this.name.length);
      const levelPad = ' '.repeat(5 - this.logLevelToName(level).length + 2);
      if (typeof window === 'undefined') {
        console.log(
          `${chalk.hex(this.color)(`[${this.name}]`)}${pad}${chalk.hex(
            this.logLevelToColor(level)
          )(this.logLevelToName(level))}${levelPad}`,
          ...messages
        );
      } else {
        console.log(
          `%c[${this.name}]${pad}}%c${this.logLevelToName(level)}${levelPad}}`,
          `color: ${this.color};`,
          `color: ${this.logLevelToColor(level)};`,
          ...messages
        );
      }
    }
  }
  public trace(...messages: any[]): void {
    this.log(LOG_LEVELS.TRACE, ...messages);
  }
  public debug(...messages: any[]): void {
    this.log(LOG_LEVELS.DEBUG, ...messages);
  }
  public info(...messages: any[]): void {
    this.log(LOG_LEVELS.INFO, ...messages);
  }
  public warn(...messages: any[]): void {
    this.log(LOG_LEVELS.WARN, ...messages);
  }
  public error(...messages: any[]): void {
    this.log(LOG_LEVELS.ERROR, ...messages);
  }
}
export function setLogLevel(newLogLevel: LOG_LEVELS): void {
  logLevel = newLogLevel;
}
