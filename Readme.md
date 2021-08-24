# LogBit

LogBit is a simple logger tool for the command line and the browser.
It offers styling that makes it easy to see the log info at a glance.
LogBit also makes it easy to understand where a log came from, since it shows the name of the logger that created it in every message.

## Usage

```ts
import LogBit, { setLogLevel, LOG_LEVELS } from 'logbit';
setLogLevel(LOG_LEVELS.DEBUG);
const log = new LogBit('ExampleModule');
log.debug('Debug');
log.info('Info');
log.warn('Warn');
log.error('Error');
```
