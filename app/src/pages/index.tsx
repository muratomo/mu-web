import * as React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Footer from '../components/footer';

const content: JSX.Element =
  <div>
    <ul className="mu-top-menu">
      <li className="mu-list__link">
        <Link href="/about"><a>About</a></Link>
      </li>
      <li className="mu-list__image"><img src={'/rhombus.svg'}/></li>
      <li className="mu-list__link">
        <Link href="/development"><a>Development</a></Link>
      </li>
      <li className="mu-list__image"><img src={'/rhombus.svg'}/></li>
      <li className="mu-list__link">
        <a href="https://mura-elma.hatenablog.com" target="_blank" rel="noopener noreferrer">Blog</a>
      </li>
    </ul>
  </div>;

class TopPage extends React.Component<unknown> {
  static async getInitialProps({ req }: NextPageContext): Promise<Record<string, unknown>> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render(): JSX.Element {
    return (
      <div className="mu-page mu-flex mu-flex__vertical">
        <h1 className="mu-title">Mu Web</h1>
        <img className="mu-top-icon" src="/icon.png"/>
        <section className="mu-flex__main">
          {content}
        </section>
        <Footer />
      </div>
    );
  }
}

export default TopPage;
