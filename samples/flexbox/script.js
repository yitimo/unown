(function(win, options = {}) {
  try {
    const rootDOM = win.document.getElementById('app')
    if (!rootDOM) {
      throw new Error('根节点未找到')
    }
  
    const pageMatch = window.location.search.match(/mode\=\w+/)
    const mode = pageMatch && pageMatch[0].substring(5) || 'block'
    console.log('mode:', mode)
    win.document.title = `${mode} mode | Flexbox demo | Unown`

    const loadStartAt = Date.now()
    win.onload = () => {
      console.log(`加载耗时: ${Date.now() - loadStartAt}ms`)
    }
    const cachedList = JSON.parse(win.localStorage.getItem('list') || 'null')
    const valueList = `
    庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。(具 通：俱)
    予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
    若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。(隐曜 一作：隐耀；淫雨 通：霪雨)
    至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。
    嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？时六年九月十五日。
    先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
    宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
    侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
    将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
    亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
    臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
    先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
    愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。今当远离，临表涕零，不知所言。
    `.split('\n').filter((e) => !!e.trim())
    const list = cachedList || new Array(options.rowCount).fill('').map((_, ri) => {
      const cols = new Array(options.colCount).fill('').map((_, ci) => ({
        flex1: ci === 1,
        width: Math.floor(15 + Math.random() * 20),
        value: valueList[Math.floor(Math.random() * valueList.length)],
        className: 'col',
      }))
      const rs = {
        value: `Row ${ri + 1}`,
        className: 'row',
        cols,
        flex1Width: 100 - cols.reduce((rs, ne) => rs + (ne.flex1 ? 0 : ne.width), 0),
      }
      return rs
    })
    win.localStorage.setItem('list', JSON.stringify(list))

    switch (mode) {
      case 'block':
        initBlock(rootDOM, list)
        break
      case 'box':
        initBox(rootDOM, list)
        break
      case 'flex':
        initFlexbox(rootDOM, list)
        break
      default:
        throw new Error(`不支持的模式: ${mode}`)
    }

    function initBlock(parentDOM, list) {
      parentDOM.append(...list.map((rItem) => {
        const rowDOM = win.document.createElement('div')
        rowDOM.className = `${rItem.className} block`
        rowDOM.append(...rItem.cols.map((cItem) => {
          const colDOM = win.document.createElement('div')
          colDOM.className = `${cItem.className} block`
          colDOM.style.width = `${cItem.flex1 ? rItem.flex1Width : cItem.width}%`
          colDOM.innerText = cItem.value
          return colDOM
        }))
        return rowDOM
      }))
    }
    function initBox(parentDOM, list) {
      parentDOM.append(...list.map((rItem) => {
        const rowDOM = win.document.createElement('div')
        rowDOM.className = `${rItem.className} box`
        rowDOM.append(...rItem.cols.map((cItem) => {
          const colDOM = win.document.createElement('div')
          colDOM.className = `${cItem.className} box`
          if (cItem.flex1) {
            colDOM.style.boxFlex = 1
            colDOM.style.webkitBoxFlex = 1
          } else {
            colDOM.style.width = `${cItem.width}%`
          }
          colDOM.innerText = cItem.value
          return colDOM
        }))
        return rowDOM
      }))
    }
    function initFlexbox(parentDOM, list) {
      parentDOM.append(...list.map((rItem) => {
        const rowDOM = win.document.createElement('div')
        rowDOM.className = `${rItem.className} flex`
        rowDOM.append(...rItem.cols.map((cItem) => {
          const colDOM = win.document.createElement('div')
          colDOM.className = `${cItem.className} flex`
          if (cItem.flex1) {
            colDOM.style.flex = 1
          } else {
            colDOM.style.width = `${cItem.width}%`
          }
          colDOM.innerText = cItem.value
          return colDOM
        }))
        return rowDOM
      }))
    }
    let parantWidth = 100
    setInterval(() => {
      if (parantWidth < 50) {
        return
      }
      parantWidth = parantWidth < 50 ? 100 : parantWidth - 1
      rootDOM.style.width = `${parantWidth}%`
    }, 300);
  } catch (e) {
    window.document.body.innerHTML = `加载失败: ${e.message || '未知错误'}`
  }
})(window, {
  rowCount: 167,
  colCount: 3,
})
