import '../style/index.scss';
import * as React from 'react';

export default class Header extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <div>
        <h1 id="title">Mu Web</h1>
        <p style={{ 'textAlign': 'center' }}>サイト構築中。。。</p>
      </div>
    );
  }
}
