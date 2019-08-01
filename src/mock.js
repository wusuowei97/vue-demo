import Mock from 'mockjs'

const Random = Mock.Random;

function getBannerListData() {
  let bannerListData = [];
  for (let i = 0; i < 5; i++) {
    let bannerData = {
      url: Random.url('http'), //  图片跳转链接
      img: Random.dataImage('375x200', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    }
    bannerListData.push(bannerData)
  }
  return {
    data: bannerListData
  }
}

function getNewsListData() {
  let newsListData = []
  for (let i = 0; i < 20; i++) {
    let newsList = {
      id: Random.increment(1), // 资讯id
      title: Random.ctitle(1, 15), //  标题
      add_time: Random.datetime(), // 添加时间
      zhaiyao: Random.csentence(1, 20), //  摘要
      click: Random.integer(10, 100), //  点击数
      img_url: Random.dataImage('84x84', 'Hello!'), //  图片路径
      content: Random.cparagraph(10, 20) //  资讯详细内容，需带html标签

    }
    newsListData.push(newsList)
  }
  return {
    data: newsListData
  }
}

function getNewsContData() {
  let newsContData = []
  for (let i = 0; i < 20; i++) {
    let newsCont = [{
      id: Random.increment(1), // 资讯id
      title: Random.ctitle(1, 15), //  标题
      add_time: Random.datetime(), // 添加时间
      click: Random.integer(10, 100), //  点击数
      content: Random.cparagraph(40, 50) //  资讯详细内容，需带html标签
    }]
    newsContData.push(newsCont)
  }
  return {
    data: newsContData
  }
}

function getCommentsData() {
  let commentData = []
  for (let i = 0; i < 10; i++) {
    let commentCont = {
      user_name: Random.cword(1, 5), //  用户名
      add_time: Random.datetime(), //  评论时间
      content: Random.csentence(1, 20) //  评论内容
    }
    commentData.push(commentCont)
  }
  return {
    data: commentData
  }
}

function getImgCategory() {
  let imgCategory = []
  for (let i = 0; i < 6; i++) {
    let imgCategoryData = {
      title: Random.ctitle(4), //  分类名称
      id: Random.increment(1) //  分类id
    }
    imgCategory.push(imgCategoryData)
  }
  return {
    data: imgCategory
  }
}

function getImages() {
  let imgList = []
  for (let i = 0; i < 10; i++) {
    let imgListData = {
      id: Random.increment(1), //  图片id
      title: Random.ctitle(9), //  分类名称
      img_url: Random.dataImage('400x400', 'mock图片!'), // 图片路径
      zhaiyao: Random.csentence(1, 80) //  摘要
    }
    imgList.push(imgListData)
  }
  return {
    data: imgList
  }
}

function postComment() {
  // 评论的数据 unshift 到 原本的评论数组中
  // let commentContent = "";
  // commentData.unshift(commentContent);

}

const data = Mock.mock('/getbanners', getBannerListData)
const data2 = Mock.mock('/getnews', getNewsListData)
const data3 = Mock.mock('/getnewscont', getNewsContData)
const data4 = Mock.mock('/getcomments', getCommentsData)
const data5 = Mock.mock('/postcomment', postComment)
const data6 = Mock.mock('/getimgcategory', getImgCategory)
const data7 = Mock.mock('/getimages', getImages)
export default {
  data,
  data2,
  data4,
  data5,
  data6,
  data7
};
