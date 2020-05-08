import * as React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';

const content: JSX.Element = <div className="main-content">
  <Link href="/about">
    <a className="mu-card mu-card__link">
      <div className="mu-card__headline"><h5>About</h5></div>
      <div className="mu-card__content">当サイトや私につきまして</div>
    </a>
  </Link>
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
        <section>
          {content}
        </section>
        <Footer />
      </div>
    );
  }
}
