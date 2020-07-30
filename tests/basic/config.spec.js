const { freeze } = require('../../basic/config')

beforeEach(() => {})

describe('Freeze Config', () => {
  test('freeze function', () => {
    const config = {
      wechat: {
        appKey: 'mock appKey',
        appSecret: 'mock appSecret'
      }
    }

    freeze(config)

    config.wechat.appKey = 'change app key'
    expect(config.wechat.appKey).toBe('mock appKey')
  })
})