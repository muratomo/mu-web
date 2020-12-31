import * as React from 'react';
import { NextPageContext } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';

class DevPage extends React.Component<{}> {
  static async getInitialProps({ req }: NextPageContext): Promise<object> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render(): JSX.Element {
    return (
      <div className="mu-page mu-flex mu-flex__vertical">
        <Header />
        <section className="mu-flex__main">
          <p style={{textAlign: "center"}}>Sorry...<br/>
            204 No Content.</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default DevPage;
