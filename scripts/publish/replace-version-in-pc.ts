// 更新lordaeron-react/package.json中的版本
//@ts-nocheck
const fs = require('fs-extra');
const path = require('path');
const getVersion = require('./getVersion');
const { exec } = require('child_process');
const { green, red, cyan } = require('chalk');
const { version } = getVersion

const fileText = fs.readFileSync(
  path.join(__dirname, '../../packages/lordaeron-react/package.json'),
  'utf-8'
);
const newVersion = version.split('.');

const replacedVersion = fileText.split('\n').map((t) => {
  if (/"version":/.test(t)) {
    let [first, secord, third] = newVersion;
    if (third >= 10 || secord >= 10) {
      if (third >= 10) {
        third = 0;
        secord = Number(secord) + 1;
      }
      if (secord >= 10) {
        third = 0;
        secord = 0;
        first = Number(first) + 1;
      }
    } else {
      third = Number(third) + 1;
    }

    newVersion[newVersion.length - 1] = Number(newVersion[newVersion.length - 1]) + 1;
    console.log(cyan(`"version": "${first}.${secord}.${third}"`));
    return `  "version": "${first}.${secord}.${third}",`;
  }
  return t;
});


fs.outputFile(
  path.resolve(__dirname, '../../packages/lordaeron-react/package.json'),
  replacedVersion?.join('\n')
).then(() => {
  console.log('替换package.json 中的 version 成功！');
});

execShell();

//执行整个流程的命令
async function execShell() {
  console.log(newVersion.join('.'))
  const echo1 = `${green('[ 1 / 2 ]')} ${cyan(`Tag and push tag to main`)}`;
  const part1 = [`git tag version-${String(newVersion.join('.'))}`, `git push origin refs/tags/version-${String(newVersion.join('.'))} --verbose`];
  const echo2 = `${green('[ 2 / 2 ]')} ${cyan('Publish to npm')}`;
  await step(echo1, part1);
  await step(echo2);
}

async function step(desc, command) {
  // console.log(desc)
  return new Promise((resolve, reject) => {
    const childExec = exec(
      command,
      { maxBuffer: 10000 * 10240 },
      (err, stdout, stderr) => {
        console.log(err, stdout, stderr);
        if (err) {
          reject(err);
          throw err;
        } else {
          resolve('');
        }
      }
    );
    childExec.stdout?.pipe(process.stdout);
    childExec.stderr?.pipe(process.stderr);
  });
}
