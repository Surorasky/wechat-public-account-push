/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf20f84877e565e47',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '647604eb72507b10bcefb3511d7e6e14',

  PROVINCE: 'shandong',
  CITY: 'jinan',

  USERS: [
    {
      // 想要发送的人的名字
      name: '盛世美闫honey',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRi9K61FefhlvzEoPGIAwBYAg4Dk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '4q1yhFn28kIN4wttavlaTiT0yFDrDMGSSR3HVwwgoYQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '盛世美闫honey', year: '2004', date: '06-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '盛世美闫honey', year: '2004', date: '04-29',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '05-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'acquaintance_day', date: '2023-05-12' },
        // 连麦纪念日
        { keyword: 'callallnight_day', date: '2023-05-21' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4q1yhFn28kIN4wttavlaTiT0yFDrDMGSSR3HVwwgoYQ',

  CALLBACK_USERS: [
    {
      name: '骤雨素花净',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRi9K6-v_wuI0rG4pvgMgtcecHaU',
    }
  ],

}

module.exports = USER_CONFIG

