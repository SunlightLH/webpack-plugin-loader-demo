自定义loader：  
loader-utils：webpack对外提供的库，可以用于获取loader的配置项  
acorn：用于将代码解析成ast  
acorn-walk：抽象语法树遍历器，用于遍历抽象语法树  

自定义plugin：  
主要是利用了capable这个库  
步骤：创建->注册->调用