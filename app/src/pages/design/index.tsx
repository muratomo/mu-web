import * as React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';

const content: JSX.Element = <div className="main-content">
  このサイトのデザインに関するページ
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
