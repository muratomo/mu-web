import * as React from 'react';
import { NextPageContext } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';

const profile: JSX.Element =
  <div className="main-content">
    <div className="mu-flex mu-flex__horizon">
      <img className="mu-profile-icon" src="/profile-icon.png"/>
      <div className="mu-profile">
        <div className="mu-profile__name">むらとも</div>
        <p className="mu-profile__text">
          ITエンジニアとして主に社内のWebアプリケーション開発・運用・保守に従事.<br/>
          安全という言葉が好き.<br/>
          趣味でデザインやイラストなど頑張り始めました.
        </p>
        <div className="mu-profile__section-name">スキルセット</div>
        <p className="mu-profile__text">
          最近はTypeScript/JavaScriptばかりです.<br/>
          要キャッチアップなのがJava/Kotlinあたり.
        </p>
        <div className="mu-profile__section-name">アカウント</div>
        <div className="mu-flex mu-flex__horizon">
          <a href="https://github.com/muratomo" target="_blank" rel="noopener noreferrer">
            <img className="mu-profile__account" src="/github.png"/>
          </a>
          <a href="https://twitter.com/mura40424" target="_blank" rel="noopener noreferrer">
            <img className="mu-profile__account" src="/twitter.png"/>
          </a>
          <a href="https://www.pixiv.net/users/1862637" target="_blank" rel="noopener noreferrer">
            <img className="mu-profile__account" src="/pixiv.png"/>
          </a>
        </div>
      </div>
    </div>
  </div>;

class AboutPage extends React.Component<{}> {
  static async getInitialProps({ req }: NextPageContext): Promise<object> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render(): JSX.Element {
    return (
      <div className="mu-page mu-flex mu-flex__vertical">
        <Header />
        <section className="mu-flex__main">
          {profile}
        </section>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
