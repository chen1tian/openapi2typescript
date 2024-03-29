## 使用说明

### 示例

在test目录下增加文件`testgen.js`

内容如下：

```js
const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'http://localhost:5000/ReleaseManager/swagger/v1/swagger.json',
  serversPath: './temp/relMgr-api',  
  namespace: 'relMgr',
  wrapResult: 'Api.Response'
});
```


在 `package.json` 的 `script` 中添加 api: `"relMgr": "ts-node ./test/genSwagger.js",`

生成api

```node
npm run relMgr
```

## 参数
| 属性                   | 必填 | 备注                              | 类型                   | 默认值         |
| ---------------------- | ---- | --------------------------------- | ---------------------- | -------------- |
| requestLibPath         | 否   | 自定义请求方法路径                | string                 | -              |
| requestImportStatement | 否   | 自定义请求方法表达式              | string                 | -              |
| apiPrefix              | 否   | api 的前缀                        | string                 | -              |
| serversPath            | 否   | 生成的文件夹的路径                | string                 | -              |
| schemaPath             | 否   | Swagger 2.0 或 OpenAPI 3.0 的地址 | string                 | -              |
| projectName            | 否   | 项目名称                          | string                 | -              |
| namespace              | 否   | 命名空间名称                      | string                 | API            |
| mockFolder             | 否   | mock目录                          | string                 | -              |
| enumStyle              | 否   | 枚举样式                          | string-literal \| enum | string-literal |
| nullable               | 否   | 使用null代替可选                  | boolean                | false          |
| dataFields             | 否   | response中数据字段                | string[]               | -              |
| wrapResult             | 是   | 用来包含response结果的对象        | obj                    | -              |

> 对于`apiPrefix`属性，默认是生成插入值变量，如果需要直接生成字符串，那么需要这样用`apiPrefix:'"apiPrefix"'`