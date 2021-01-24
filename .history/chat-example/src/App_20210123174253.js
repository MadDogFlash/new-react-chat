import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGF3bi1tb3VudGFpbi0xIn0.Q4jtolFJkStIc1-A_evQPfEmTIdW_d4W9AbLjVe6H6Q';

chatClient.setUser(
  {
    id: 'dawn-mountain-1',
    name: 'Dawn mountain',
    image: 'https://getstream.io/random_png/?id=dawn-mountain-1&name=Dawn+mountain'  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['dawn-mountain-1'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 