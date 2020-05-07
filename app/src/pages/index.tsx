import * as React from 'react';
import { NextPageContext } from 'next';
import Header from '../components/header';

const profileJSX: JSX.Element = <div>
  <h2>Abount me</h2>
  <h3>名前: Murakami Tomoyuki</h3>
  <p>社内エンジニアとして、社内向けのWebアプリケーション開発を行っています。<br/>
  どちらかと言うとフロントエンドよりもバックエンドの方が好みではあります。
  </p>
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
  <h2>Links</h2>
  <ul>
    <li>Twitter: <a href="https://twitter.com/mura40424">@mura40424</a></li>
    <li>GitHub: <a href="https://github.com/muratomo">muratomo</a></li>
    <li>Blog: <a href="https://mura-elma.hatenablog.com">Afternoon Log</a></li>
  </ul>
</div>;

export default class TopPage extends React.Component<{}> {
  static async getInitialProps({ req }: NextPageContext): Promise<object> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render(): JSX.Element {
    return (
      <div>
        <Header />
        {profileJSX}
      </div>
    );
  }
}
