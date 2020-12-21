const pluginName = "LogPlugin";

class LogPlugin{
  apply(compiler){
    compiler.hooks.run.tap(pluginName,compilation=>{
      console.log("🌺🌺🌺🌺自定义插件")
    })
  }
}

module.exports = LogPlugin;