import React from 'react'
import { SocialMasonry } from 'social-masonry/react'
import './SocialFeed.css'

const SocialFeed = () => {
  // Replace these URLs with your actual church social media posts
  const posts = [
    {
      id: '1',
      platform: 'instagram',
      url: 'https://www.instagram.com/p/DXl5fQTCKbK/?img_index=1',
    },
    {
      id: '2',
      platform: 'twitter',
      url: 'https://x.com/cmfirwanda/status/2050150214011412512',
    },

    {
      id: '3',
      platform: 'instagram',
      url: 'https://www.instagram.com/p/DWHntMQCC6E/?img_index=1',
    },


    // Add more posts as needed
  ]

  return (
    <section id="social-feed" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Stay Connected</span>
          <h2>Follow Us On Social Media</h2>
          <div className="divider"></div>
        </div>
        <div className="social-feed-wrapper">
          <SocialMasonry
            posts={posts}
            columns={3}
            gap={20}
            theme="light"
            animate={true}
            lazyLoad={true}
          />
        </div>
      </div>
    </section>
  )
}

export default SocialFeed