import pkg from "../../package.json";
export default function({ msg, curl, origin, env, aurl, clientid }) {
  // eslint-disable-next-line no-console
  console.log(`@docimax/errorpage version: ${pkg.version}`);

  let template = `
    <h3>太糟糕了!</h3>
    <pre>
应用程序的初始化遇到了问题! 但是我们捕捉到一个错误提示: 

  <b>${msg}</b>

通常来说, 诸如 Network Error 此类问题大多是由于没有从配置服务器请求到应用初始化所必须的配置所导致的.

但是还请先确认配置信息是否正确：

<b>配置服务</b>
- url: ${curl}
- key: ${origin}
- env: ${env}

<b>认证服务</b>
- url: ${aurl ? aurl : "尚未获取"}
- clientid: ${clientid ? clientid : "尚未获取"}

另外, 你也可以按 F12 分析抛出的异常.

希望这可以帮到你 :)</pre>`;

  document.writeln(template);
}
