import React from 'react'
import { IconGithub, IconEthercore, IconTelegram, IconTwitter } from './social-icons'

export const SocialIcons = () => {
  const socialItems = [
    {
      icon: <IconEthercore />,
      link: 'https://www.ethercore.io'
    },
    {
      icon: <IconTwitter />,
      link: 'https://twitter.com/ethercore'
    },
    {
      icon: <IconTelegram />,
      link: 'https://t.me/ethercore'
    },
    {
      icon: <IconGithub />,
      link: 'https://github.com/ethercore'
    }
  ]

  return (
    <div className="social-icons">
      {socialItems.map((item, index) => {
        return (
          <a key={index} href={item.link} target="_blank" className="social-icons-item">
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}
