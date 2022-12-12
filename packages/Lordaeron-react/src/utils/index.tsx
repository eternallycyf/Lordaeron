import Color from 'color';

/**
  * 数字千分位展示并显示n位小数
  * @param {(number | string)} 需要格式化的值
  * @param {number} [precision] 保留几位小数，不传小数不处理，不够会填充0
  * @param {string} [separator=','] 分隔符
  * @return {(number | string)} 返回0或者格式化的值
  */
export const formatNumber = (
  num: number | string,
  precision = 2,
  separator = ','
): number | string => {
  if (num == 0) return 0
  if (!num) return '--'
  let parts;
  const textStr = num.toString()
  const decStr = textStr.split('.')[1]
  // 判断是否为数字
  if (!isNaN(parseFloat(num as string)) && isFinite(num as number)) {
    num = Number(num);
    // 处理小数点位数
    num = (
      typeof precision !== 'undefined' ? num.toFixed(precision) : num
    ).toString();
    // 分离数字的小数部分和整数部分
    parts = num.split('.');
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
    if (!decStr) {
      parts.pop()
      return parts
    }
    return parts.join('.');
  }
  return 0;
};

export const getNowTime = (format: boolean = true) => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    format && String(date.getMonth() + 1).length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const day = format && String(date.getDate()).length < 2 ? `0${date.getDate()}` : date.getDate();
  const hours =
    format && String(date.getHours()).length < 2 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    format && String(date.getMinutes()).length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    format && String(date.getSeconds()).length < 2 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};


