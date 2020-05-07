import * as React from 'react';

export default class Header extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <header className="mu-header">
        <h1 className="mu-header__title">Mu Web</h1>
      </header>
    );
  }
}
