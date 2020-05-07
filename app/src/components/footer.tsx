import * as React from 'react';

export default class Footer extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <footer className="mu-footer">
        <div className="mu-footer__copyright">&copy; 2020 Mu Web</div>
      </footer>
    );
  }
}
