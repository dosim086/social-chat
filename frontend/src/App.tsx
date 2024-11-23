import { ChatContent, ChatItem, ChatList } from './components/chat';
import {
  CalendarIcon,
  ChatIcon,
  FilesIcon,
  GearIcon,
  HomeIcon,
} from './components/icons';
import { Content, Header, Layout, Main, Sidebar } from './components/layouts';
import { MenuItem, MenuList } from './components/menu';
import { Profile } from './components/profile/profile';

function App() {
  return (
    <Layout>
      <Sidebar>
        <Profile />
        <MenuList>
          <MenuItem active icon={<HomeIcon />}>
            Home
          </MenuItem>
          <MenuItem icon={<ChatIcon />}>Chat</MenuItem>
          <MenuItem icon={<CalendarIcon />}>Calendar</MenuItem>
          <MenuItem icon={<FilesIcon />}>Files</MenuItem>
          <MenuItem icon={<GearIcon />}>Settings</MenuItem>
        </MenuList>
      </Sidebar>
      <Main>
        <Header />
        <Content>
          <ChatList>
            <ChatItem active />
            <ChatItem />
            <ChatItem />
          </ChatList>
          <ChatContent />
        </Content>
      </Main>
    </Layout>
  );
}

export default App;
