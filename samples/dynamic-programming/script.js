/**
 * 限重范围内装入最大总价值的商品列表进背包
 * result列表存放如果拿上第i件商品时 剩下可用的限重和最大价值
 * @param {Array<{ weight: number, value: number }>} list 商品列表
 * @param {number} limitWeight 限重
 */
function calc(list, limitWeight) {
  /**
   * 二维数组 result[list.length][limitWeight+1]
   * - 存放拿前**0~list.length-1**件商品且限重为**0~limitWeight**时能达到的最大价值
   * @type {number[][]}
   */
  const result = new Array(list.length).fill().map(() => new Array(limitWeight + 1).fill(0))

  // 填满第一行(即那前1件商品的情况) 如果遍历到的重量放得下第一个商品 就放进去 否则不放
  result[0] = new Array(limitWeight + 1).fill(0).map((_, i) => i < list[0].weight ? 0 : list[0].value)

  // 因为第一行已经遍历过 这里可以直接从第二行开始遍历, 即遍历前 2~list.length-1 件商品的情况
  for (let i = 1; i < list.length; i += 1) {
    // 遍历限重从 0 到 limitWeight 的情况
    for (let j = 0; j <= limitWeight; j += 1) {
      if (
        j < list[i].weight // 当前项超过了限重
        || result[i - 1][j] > result[i - 1][j - list[i].weight] + list[i].value // 不拿当前项时的总价值高于拿当前项的
      ) {
        result[i][j] = result[i - 1][j]
      } else {
        // 当前项拿得动 且拿取后总价值高于不拿 则更新拿取时的总价值
        result[i][j] = result[i - 1][j - list[i].weight] + list[i].value
      }
    }
  }

  // 根据当前的总价值倒推 当判断到某个商品选上后 限重也需要更新 而不一定是最大限重
  // 倒推过程中 需要根据剩余限重 从0开始累加?
  let maxValueForPicked = result[list.length - 1][limitWeight]
  let pickedWeight = 0
  const picked = []
  for (let i = result.length - 1; i >= 0; i -= 1) {
    if (i > 0 && maxValueForPicked > result[i - 1][limitWeight - pickedWeight]) {
      // 当前价值大于了不选当前商品的价值 说明选了当前商品
      picked.push({ id: i + 1, value: list[i].value, weight: list[i].weight })
      pickedWeight += list[i].weight
      maxValueForPicked -= list[i].value
    } else if (i === 0 && maxValueForPicked > 0) {
      picked.push({ id: i + 1, value: list[i].value, weight: list[i].weight })
    }
  }
  // console.log('拿取的商品列表')
  // console.table(picked.reverse())
  // console.table(result)
  return {
    max: result[list.length - 1][limitWeight],
    picked: picked,
  }
}

function main(goodsNum, limitWeight) {
  const goods = new Array(goodsNum).fill(0).map(() => ({
    value: Math.floor(1 + Math.random() * (goodsNum - 1)),
    weight: Math.floor(1 + Math.random() * (limitWeight - 1)),
  }))
  // console.log('总价值: $', goods.reduce((r, e) => r + e.value, 0), '总重量: $', goods.reduce((r, e) => r + e.weight, 0))
  const result = calc(goods, limitWeight)
  let resultStr = ''
  resultStr += `<h3>完整商品列表</h3>${goods.map((e, i) => `<p class="good-item">商品${i+1}($${e.value}, ${e.weight}kg)`).join('')}</p>`
  resultStr += '<hr />'
  resultStr += `<p><b>能拿到最大价值为: $${result.max}</b></p>`
  resultStr += `<h3>拿取的商品</h3>${result.picked.map((e) => `<p class="good-item">商品${e.id}($${e.value}, ${e.weight}kg)`).join('')}</p>`
  return resultStr
}
