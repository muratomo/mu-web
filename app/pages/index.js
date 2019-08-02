'use strict';

import '../style/index.scss'

const title = <div><h1 id='title'>Mu Web</h1><p style={{ 'text-align': 'center' }}>サイト構築中。。。</p></div>;
const profile = <div>
  <h2>About</h2>
    <h3 id='name'>名前: Murakami Tomoyuki</h3>
    <h3>お仕事: ITエンジニア(主にWebアプリケーション)</h3>
    <p>社内エンジニアとして、社員が利用するWebアプリケーション開発を行っています。</p>
    <p>どちらかと言うとフロントエンドよりもバックエンドの方が好みです。</p>
    <div>
      <h3>エンジニアスキル</h3>
      <ul>
        <li>Language</li>
          <ul><li>Java, Kotlin, JavaScript, TypeScript, PHP, ShellScript, C</li></ul>
        <li>FrameWork</li>
          <ul><li>SpringBoot, Angular, ...Next.jsは勉強中</li></ul>
        <li>CI/CD</li>
          <ul><li>CircleCI, Chef, Fabric</li></ul>
        <li>Platform</li>
          <ul><li>Node.js, Android, CentOS, Nginx, Cloud Foundry, Docker</li></ul>
        <li>DataStore</li>
          <ul><li>MySQL, Redis</li></ul>
      </ul>
    </div>
  <h2>Link</h2>
    <ul>
      <li>Twitter: <a href="https://twitter.com/mura40424">@mura40424</a></li>
      <li>GitHub: <a href="https://github.com/muratomo">muratomo</a></li>
      <li>Blog: <a href="https://mura-elma.hatenablog.com">Afternoon Log</a></li>
    </ul>
  </div>;

const Index = () => {
  return <div>
    {title}
    <hr></hr>
    {profile}
  </div>
};

export default Index
