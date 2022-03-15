export class Song {
  constructor(id, name, picUrl, url, album_id, album_name, artist_id, artist_name, current_play, duration) {
    this.id = id  // 音乐id
    this.name = name  // 音乐名称
    this.picUrl = picUrl // 音乐图片url
    this.url = url  // 音乐播放url
    this.album_id = album_id   // 所在专辑id
    this.album_name = album_name  // 音乐所在专辑
    this.artist_id = artist_id  // 歌手id
    this.artist_name = artist_name  // 歌手姓名
    this.current_play = current_play  // 当前是否播放
    this.duration = duration  // 音频播放时长
  }
}

export function formatDate(value) {
  var secondTime = parseInt(value);// 秒
  var minuteTime = 0;// 分
  var hourTime = 0;// 小时
  if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if(minuteTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60);
      }
  }
  var result = "" + parseInt(secondTime);

  if(minuteTime > 0) {
      result = "0" + parseInt(minuteTime) + " : " + result;
  }
  if(hourTime > 0) {
      result = "" + parseInt(hourTime) + ":" + result;
  }
  return result;
}

export function formatLyricTime (time) { // 格式化歌词的时间 转换成 sss:ms
  const regMin = /.*:/
  const regSec = /:.*\./
  const regMs = /\./

  const min = parseInt(time.match(regMin)[0].slice(0, 2))
  let sec = parseInt(time.match(regSec)[0].slice(1, 3))
  const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3)
  if (min !== 0) {
    sec += min * 60
  }
  return Number(sec + '.' + ms)
}

export function formatPlayCount(count) {
  let num = count + ''
  let result = ''
  let length =num.length
  if(length < 5) {
    return num
  }else if(length >= 5) {
    result = num.slice(0, length - 4)
    return result + '万'
  }
}

// 获取cookie
export function getCookies(cookie_name) {
  let cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    let temp = cookieArr[i].split("=");
    if (temp[0] == cookie_name){
      return decodeURI(temp[1]);
    }
  }
}

// 移除cookie
export function removeCookie(key) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  if(getCookies(key) !== null) {
    document.cookie = key + "=" + getCookies(key) + ";expires="+ exp.toUTCString();
  }
}

export class UserInfo {
  constructor(userId, nickName, avatarUrl, level, listenSongs, authority, follows, followeds, playlistCount) {
    this.userId = userId        // 用户id
    this.nickName = nickName    // 用户名称
    this.avatarUrl = avatarUrl  // 用户头像
    this.level = level          // 用户等级
    this.listenSongs = listenSongs  // 累计听歌
    this.authority = authority  // 动态
    this.follows = follows      // 关注
    this.followeds = followeds  // 粉丝
    this.playlistCount = playlistCount  // 创建的歌单
  }
}

export function formatDates(date, fmt){
  if(/(y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getMonth(),
      'h+': date.getMonth(),
      'm+': date.getMonth(),
      's+': date.getMonth()
  }
  for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
