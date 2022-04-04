import * as React from 'react'

class Footer extends React.Component<unknown> {
  private fullYear: number = new Date().getFullYear()

  render(): JSX.Element {
    return (
      <footer className='mu-footer'>
        <span className='mu-footer__copyright'>
          &copy; {this.fullYear} muratomo
        </span>
      </footer>
    )
  }
}

export default Footer
