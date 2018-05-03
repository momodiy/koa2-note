const fs = require('fs')

function render(page) {

    return new Promise((resolve, reject) => {

        let viewUrl = `./view/${page}`

        //fs.readFile 读取文件
        /**
         * fs.readFile 读取文件
         * 第一个参数为文件路径
         * binary：二进制方式读取
         * 第三个参数为读取完成后的回调函数
         */
        fs.readFile(viewUrl, "binary", (err, data) => {
            console.log(err);
            console.log(data);
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

}

module.exports = render


