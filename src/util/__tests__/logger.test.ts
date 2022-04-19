import { Logger } from '../logger'

test('logger test', () => {
  const logger = new Logger()
  except(logger.info('test'))
  except(logger.warn('test'))
  except(logger.error('test'))
})
