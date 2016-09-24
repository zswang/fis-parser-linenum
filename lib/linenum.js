/**
 * @file fis-parser-linenum
 *
 * A parser plugin for fis3 to replace line number.
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 0.0.4
 * @date 2016-09-25
 */
var linenum = require('linenum');
var url = require('url');
module.exports = function (content, file, conf) {
  if (!file.isText()) { // 非文本文件原样返回
    return content;
  }
  return linenum.replace(content, {
    prefix: url.format(file.origin) + ':',
    pattern: conf.pattern
  });
};