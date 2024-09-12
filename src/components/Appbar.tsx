'use client'

import { AppThemeContext } from '@/context/AppThemeContext';
import { RouteItem } from '@/routes/routes';
import Link from 'next/link';
import React, { useContext } from 'react';

type AppBarProps = {
  routes: RouteItem[],
  mode?: string,
  title?: string
}

const AppBar: React.FC<AppBarProps> =({mode, routes, title}) => {

    
    const theme = useContext(AppThemeContext);
    let barMode = mode ? mode : theme.mode;
    
    console.log("AppBar");
    return (
        <nav className={`navbar navbar-${barMode} bg-${barMode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{title? title: "Next"}</a>
          <ul className="nav">
            
            {routes.map(item => {
              return (
                <li className="nav-item" key={item.path}>
                  <Link className="nav-link" href={item.path} prefetch={false}>{item.title}</Link>
              </li>
              )
            })}
            <li>
              <a href="/app2">App2</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default AppBar;