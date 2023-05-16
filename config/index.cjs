/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0315bf6115d7596e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ea18081b1b08b9a47c07945c4926d00a',

  PROVINCE: '河南',
  CITY: '南阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '随大大',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o63hS6dKD0rAGnm9AiM4o3GIuMlU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '11gQYCMOowjMMKCfQytOb8LQbqZnYEL4Lw6XGrsVJ4M',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name:'随康博',
      id:'o63hS6RtBUWhhvdm1iic3iNUZCgo',
      useTemplateId:'5jaNha7vMdCg8ivI_tSTWESk7kclZTlW9yGvaQWVrXU',
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wo81mqrAsUg_NX-CH8gO-rTubwxYowddpkmPwCma1p0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_49a0268a3968',
    }
  ],

}

module.exports = USER_CONFIG

