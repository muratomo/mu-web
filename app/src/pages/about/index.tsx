import * as React from 'react';
import { NextPageContext } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';

const profile: JSX.Element = <div className="main-content">
  <div className="mu-card mu-card--1of1">
    <div className="mu-card__headline"><h5>About me</h5></div>
    <div className="mu-card__content">
      <h6>Profile</h6>
      <p>Name: muratomo</p>
      <p>社内のWebエンジニアとして、Webアプリケーション開発に従事</p>
      <br />
      <h6>Skill set</h6>
      <ul className="mu-list">
        <li>Language
          <ul className="mu-list">
            <li>Java, Kotlin, JavaScript, TypeScript, PHP, ShellScript, C</li>
          </ul>
        </li>
        <li>FrameWork
          <ul className="mu-list">
            <li>SpringBoot, Angular, Next.jsは勉強中</li>
          </ul>
        </li>
        <li>CI/CD
          <ul className="mu-list">
            <li>CircleCI, Chef, Fabric</li>
          </ul>
        </li>
        <li>Platform
          <ul className="mu-list">
            <li>Node.js, Android, CentOS, Nginx, Cloud Foundry, Docker</li>
          </ul>
        </li>
        <li>DataStore
          <ul className="mu-list">
            <li>MySQL, Redis</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className="mu-card mu-card--1of1">
    <div className="mu-card__headline"><h5>Accounts</h5></div>
    <div className="mu-card__content">
      <p>Twitter: <a href="https://twitter.com/mura40424">@mura40424</a></p>
      <p>GitHub: <a href="https://github.com/muratomo">muratomo</a></p>
    </div>
  </div>
</div>;

export default class AboutPage extends React.Component<{}> {
  static async getInitialProps({ req }: NextPageContext): Promise<object> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render(): JSX.Element {
    return (
      <div>
        <Header />
        <section>
          {profile}
        </section>
        <Footer />
      </div>
    );
  }
}
