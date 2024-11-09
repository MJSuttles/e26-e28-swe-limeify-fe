/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/../images/limeify-icon.png" alt="Limeify Logo" width={60} height={50} style={{ marginLeft: '10px' }} />
            <img src="/../images/limeify-name-only-logo.png" alt="Limeify Name" width={100} height={38.44} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/" style={{ color: '#FFFFFF' }}>
              Songs
            </Link>
            <Link className="nav-link" href="/playlists" style={{ color: '#FFFFFF' }}>
              My Playlists
            </Link>
            <Link className="nav-link" href="/playlists/public" passHref style={{ color: '#FFFFFF' }}>
              Public Playlists
            </Link>
          </Nav>
          <Button variant="danger" style={{ backgroundColor: '#E87373' }} onClick={signOut}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
