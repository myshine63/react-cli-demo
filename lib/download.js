const download = require('download-git-repo');
const ora = require('ora');

function clone(url, dirName) {
    const process = ora('下载模板');
    process.start('开始下载........');
    download(url, dirName, err => {
        if (err) throw err;
        process.succeed('下载完成');
    });
}

module.exports = clone;