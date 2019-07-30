import Mock from 'mockjs'

const Random = Mock.Random;

function getData() {
  let datalist = [];
  for (let i = 0; i < 5; i++) {
    let bannerData = {
      url: Random.url('http'), //  图片跳转链接
      img: Random.dataImage('375x200', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    }
    datalist.push(bannerData)
  }
  return {
    data: datalist
  }
}
const data = Mock.mock('/msg1', getData)
export default {
  data
};
