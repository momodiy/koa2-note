const fs = require('fs')

/**
 * 读取文件方法
 * @param  {string} 文件本地的绝对路径
 * @return {string|binary}
 */
const file = filePath => {
    return fs.readFileSync(filePath, 'binary')
}

module.exports = file
