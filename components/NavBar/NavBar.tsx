import React from "react";
import Link from "next/link";
import { Container, Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
import Avocado from "@components/SVGIcons/Avocado";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useCart } from "@store/Cart";

const NavBar = () => {
  const { pathname } = useRouter();
  const { count: cartCount } = useCart();

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item active={pathname === "/"} title="Home | All Products">
            <Avocado />
            AvoStore
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === "/cart"}>
              <ShoppingCartIcon cartCount={cartCount} name="Basket" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  );
};

export default NavBar;
