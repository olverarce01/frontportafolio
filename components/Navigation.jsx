'use client'

import { Navbar, Nav } from 'react-bootstrap';
import styles from './Navigation.module.css';
import Link from 'next/link'

const links = [{
  label: 'Inicio',
  route:'/'
},{
  label: 'Proyectos',
  route:'/proyectos'
},{
  label: 'Acerca de Mí',
  route:'/acerca'
}]

export default function Navigation() {
  
  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link href="/" className={styles.logo}>OLVER ARCE LIMACHE</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              {links.map(({label,route})=>{
                return <Link className={styles.links} key={route} href={route}>
                <p className={styles.label}>{label}</p>
                </Link>
              })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
