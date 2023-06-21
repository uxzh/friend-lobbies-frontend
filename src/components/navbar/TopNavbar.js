import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Logo } from "../../lib/Logo.js";
import { Layout } from "./Layout.js";
import { AppName } from "../../data/Variables.js";
import { Home } from "react-iconly";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal.js";
import { useContext } from "react";
import UserContext from "../../context/UserContext.jsx";

export default function TopNavbar() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

  const logoutHandler = () => {
    setUser('')
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }

  const handleDropdownAction = (actionKey) => {
    switch (actionKey) {
      case "my_profile":
        navigate("/profile-page");
        break;
      case "my_interests":
        navigate("/interest-selection");
        break;
      case "logout":
        logoutHandler();
        break;
      // ... handle other action keys ...
    }
  };

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Navbar.Content>
            <Navbar.Link href="/">
            <Logo />
            <Text b color="inherit" hideIn="xs">
              {AppName}
            </Text>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-solid"
        >
          <Navbar.Link href="/" isActive={isActive("/")}>
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/create-lobby"
            isActive={isActive("/create-lobby")}
          >
            Create Lobby
          </Navbar.Link>
          <Navbar.Link href="/rules" isActive={isActive("/rules")}>
            Rules
          </Navbar.Link>
          <Navbar.Link href="/faq" isActive={isActive("/faq")}>
            FAQ
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              {user ? <Dropdown.Trigger>
                <Avatar
                  bordered
                  squared
                  as="button"
                  color="secondary"
                  size="md"
                  src={user.picture}
                />
              </Dropdown.Trigger> :
              <LoginModal />}
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={handleDropdownAction}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {`@${user.username}`}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="my_profile" withDivider>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item key="my_interests">My Interests</Dropdown.Item>
              <Dropdown.Item key="joined_lobbies" withDivider>
                Joined Lobbies
              </Dropdown.Item>
              <Dropdown.Item key="created_lobbies">
                Created Lobbies
              </Dropdown.Item>
              <Dropdown.Item key="friends">Friends</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>

        <Navbar.Collapse>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link href="/profile-page">
                  My Profile
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link href="/joined-lobbies">
                  Joined Lobbies
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link href="/my-lobbies">
                  My Lobbies
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link href="/create-lobby">
                  Create Lobby
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link href="/help-and-feedback">
                  Help and Feedback
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='secondary'>
                <Link /* onClick={logOut} */ color='error'>
                  Log Out
                </Link>
              </Navbar.CollapseItem>


          {/* {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={location.pathname.includes(
                item.toLowerCase().replace(" ", "-")
              )}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))} */}

        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
