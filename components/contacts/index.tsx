import React from 'react';
import Github from '@/components/icons/github';
import Twitter from '@/components/icons/twitter';
import Telegram from '@/components/icons/telegram';
import Email from '@/components/icons/email';

const contacts = [
  {
    title: 'GitHub',
    icon: <Github />,
    link: 'https://github.com/wangyi12358',
  },
  {
    title: 'Twitter',
    icon: <Twitter />,
    link: 'https://twitter.com/Mika00276121'
  },
  {
    title: 'Telegram',
    icon: <Telegram />,
    link: 'https://t.me/mika_wang'
  },
  {
    title: 'Email',
    icon: <Email />,
    link: 'mailto:wangmikayi@gmail.com'
  }
]

/**
 * @Author: wangyi
 * @Date: 2023-07-13
 */
const Contacts: React.FC = () => {
  return (
  <>
    <div className="title mt-12">
      联系我
    </div>
    <div className="grid-container">
      {contacts.map((contact, index) => (
        <a
          target="_blank"
          href={contact.link}
          className="h-16 grid-item hover:grid-item"
          key={`contact_${index}`}
        >
          <span className="text-xl">{contact.icon}</span>
          <span className="ml-4">{contact.title}</span>
        </a>
      ))}
    </div>
  </>
  );
}

export default Contacts;
