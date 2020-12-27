import * as React from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";

const PATH_MAP = new Map([['Home', '/'], ['About', '/about'], ['Development', '/development']]);

function Header() {
  const router = useRouter()
  const path = router.pathname.slice(1);
  // ヘッダーテキストの設定
  const pageName = path.slice(0, 1 - path.length).toUpperCase() + path.slice(1).toLowerCase();
  const linkPages = Array.from(PATH_MAP.keys()).filter((path) => path !== pageName);
  // アイコンの設定
  let icon = '';
  if (pageName === 'About') {
    icon = '/profile.svg';
  }
  return (
    <header className="mu-header main-content">
      <h2 className="mu-header__primary">{pageName}</h2>
      <div className="mu-flex mu-flex__horizon mu-flex__center mu-header__secondary">
        <div className="mu-header__secondary-text">
          <Link href={ PATH_MAP.get(linkPages[0]) || 'NotFound' }><a>{linkPages[0]}</a></Link>
        </div>
        <div className="mu-header__secondary-text">
          <Link href={ PATH_MAP.get(linkPages[1]) || 'NotFound' }><a>{linkPages[1]}</a></Link>
        </div>
      </div>
      <div className="mu-flex mu-flex__horizon mu-header__secondary mu-flex__center">
        <div className="mu-header__line"/>
        <img className="mu-header__icon" src={icon}/>
        <div className="mu-header__line"/>
      </div>
    </header>
  );
}

export default Header;
