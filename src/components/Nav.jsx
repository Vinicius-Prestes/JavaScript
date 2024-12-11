import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;

  &:hover {
    color: #ef0c0c;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ef0c0c;
    text-decoration: underline;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <Container>
        <Logo to="/">Tudo sobre JS</Logo>
        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/math">Math</MenuItem>
          <MenuItem to="/dates">Date</MenuItem>
          <MenuItem to="/arrays">Array</MenuItem>
          <MenuItem to="/objects">Object</MenuItem>
          <MenuItem to="/localstorage">LocalStorage</MenuItem>
          <MenuItem to="/api">API Fetch</MenuItem>
        </Menu>
      </Container>
    </NavBar>
  );
};

export default Nav;