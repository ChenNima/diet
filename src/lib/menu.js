const MEAT = [
  '烤鸡',
  '京酱肉丝',
  '冬瓜排骨汤',
  '茄汁大虾',
  '卤牛肉',
  '咖喱肥牛',
  "黑椒牛柳",
  "汉堡肉",
  "毛血旺",
  "麻婆豆腐",
  "蚝油牛肉",
  "水煮肉片",
  "亲子盖饭",
  "虾仁炒蛋",
  "木耳炒肉",
  "照烧鸡腿",
  "红烧排骨",
  "回锅肉"
]

const MIX = [
  "青菜牛肚丝",
  "黑木耳炒肉",
  "菌菇炒肉",
  "花椰菜鱼板",
  "培根炒西兰花",
  "葱油拌面",
  "年糕汤",
  "咖喱牛肉粉丝汤"
]

const VEG = [
  "广东菜心",
  "青菜",
  "鸡毛菜",
  "鸡毛菜土豆片汤",
  "番茄蛋汤",
  "小葱拌豆腐",
  "番茄炒蛋",
  "刀豆土豆",
  "土豆丝",
  "荷兰豆",
  "芹菜香干",
  "荠菜豆腐羹",
  "粉丝金针菇",
  "蒸蛋",
  "油浸萝卜丝"
]

import { shuffle } from 'lodash-es';

export default {
  generate({ isOdd, includeFri } = {}) {
    const days = isOdd ? ['Mon', 'Wed'] : ['Tue', 'Thu']
    if (includeFri && isOdd) {
      days.push('Fir')
    }
    const optOne = shuffle(MEAT.concat(MIX))
    const optTwe = shuffle(VEG)
    return days.map((day) => {
      return {
        value: false,
        date: day,
        one: optOne.shift(),
        two: optTwe.shift()
      }
    })
  }
}