# CheckHttps.js

检测浏览器是否支持HTTPS

## 原理

首先判断当前访问是否是HTTPS方式访问，如果是那自然不必做任何操作。

如果不是HTTPS访问，则向指定的HTTPS服务器请求测试图片。

之后我们会判断图片是否加载成功，如果加载成功我们将会把网页重定向到HTTPS版本。

如果图片加载失败，我们也不会做任何操作，直接退出。

## 使用

在您网页的模板中加入对CheckHttps.js的引用即可。

## License

Copyright &copy; 2018 老周部落.

This application using Apache License 2.0.
