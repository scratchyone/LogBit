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

let logLevel = LOG_LEVELS.INFO;

export default class LogBit {
  name: string;
  public constructor(name: string) {
    this.name = name;
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
        return '#00ff00';
      case LOG_LEVELS.DEBUG:
        return '#42bfdb';
      case LOG_LEVELS.INFO:
        return '#42db59';
      case LOG_LEVELS.WARN:
        return '#ffff00';
      case LOG_LEVELS.ERROR:
        return '#ff0000';
      default:
        return '#000000';
    }
  }
  log(level: LOG_LEVELS, ...messages: any[]): void {
    if (level >= logLevel) {
      if (typeof window === 'undefined') {
        console.log(
          `${chalk.hex('#a103fc')(`[${this.name}]`)}\t${chalk.hex(
            this.logLevelToColor(level)
          )(this.logLevelToName(level))}\t`,
          ...messages
        );
      } else {
        console.log(
          `%c[${this.name}]\t%c${this.logLevelToName(level)}\t`,
          'color: #a103fc;',
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
