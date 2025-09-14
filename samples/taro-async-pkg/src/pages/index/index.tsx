import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import globalUtils from '../../utils'
import mainUtils from '../utils'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('pages/index/index', globalUtils)
    console.log(mainUtils)
  })

  return (
    <View className='index'>
      <Text>Hello pages/index/index!</Text>
    </View>
  )
}
