# 同学列表
   - 前后端分离
      前端:table
      后端？
      GET HTTP Method
      /student
      返回json 数据


- npm init -y 项目变成一个后端项目  初始化
    npm i json-server(npm install json-server)
    package.json  dev: "json-server --watch student.json"
    npm run dev
- http 请求分为  GET(获取列表)  POST(添加新数据)    FORM表单的两个动作
     fetch(url,{   //配置项
     method: 'POST'，   // 方法，表单的动作
     body: JSON.stringify(student),    //请求体
     headers:{
        'Content-type': 'application/json'
     }   //请求头，要加上请求头才能把数据上传过去
     })