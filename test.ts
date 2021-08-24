import LogBit, { setLogLevel, LOG_LEVELS } from './main';
setLogLevel(LOG_LEVELS.TRACE);
const log = new LogBit('ExampleModule');
log.trace('Trace');
log.debug('Debug');
log.info('Info');
log.warn('Warn');
log.error('Error');
