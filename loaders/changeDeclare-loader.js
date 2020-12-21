const loaderUtils = require("loader-utils");
const acorn = require("acorn");
const walk = require("acorn-walk");
const MagicString = require("magic-string");

module.exports = function(content){
  const options = loaderUtils.getOptions(this);
  console.log("🌻loader配置选项",options);
  console.log("🌻前置钩子数据",this.data.value);
  const ast = acorn.parse(content);
  let code = new MagicString(content);
  walk.simple(ast,{
    VariableDeclaration(node){
      const {start} = node;
      code.overwrite(start,start+5,"var");
    }
  })
  return code.toString();
}

module.exports.pitch = function(r,prerequest,data){
  data.value = "🐍🐍🐍🐍🐍🐍🐍🐍🐍";
}