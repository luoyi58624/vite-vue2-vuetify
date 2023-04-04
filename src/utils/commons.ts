/**
 * 判断一个对象 || 数组 || 字符串(包括空格) 是否为空
 * @example null、undefined、'undefined'、[]、''、' '
 * @param value
 * @return {boolean}
 */
export function isEmpty(value) {
  if (value === null || value === undefined || value === 'undefined' || value === false) {
    return true
  } else if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'string') {
    return value.trim().length === 0
  } else {
    return false
  }
}

/**
 * 验证邮箱格式是否正确
 * */
export function verifyEmail(email: string) {
  const emailReg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.com)$/)
  return emailReg.test(email)
}

// 格式化文件大小
export function formatFileSize(filesize): string {
  if (filesize == null || filesize == '') {
    return '0 Bytes'
  }
  const unitArr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  const srcsize = parseFloat(filesize)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  let size: any = srcsize / Math.pow(1024, index)
  size = size.toFixed(2) // 保留的小数位数
  return size + unitArr[index]
}
