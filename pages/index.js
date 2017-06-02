import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { FrontPage, TitleBox, Title, Subtitle, Text, Buttons, Button, IconLink } from '../utils/components'
import { Community, Console, Facebook, GraphQL, ReactNative, ReactLogo, Redux, Relay } from '../assets/logos'

export default class Index extends React.Component {
  render () {
    return (
      <FrontPage>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Laravel Cebu webpage"}
          ]}
        />
        <TitleBox>
          <Title>LaravelCebu</Title>
          <Subtitle>Welcome to</Subtitle>
        </TitleBox>
        <Text>
          We&rsquo;re a community of artisans who loves Laravel. 
          We hold regular meetups around the city with the help of our awesome hosts, sponsors, organizers, volunteers & individuals in the community.
          Come let's talk about tech related to Laravel & PHP, ask for help or anything under the sun! 
        </Text>
        <Buttons>
          <Button primary href="https://goo.gl/GSc8Qg" target="_blank" title="Reactiflux Discord">Join Us</Button>
          <Button to={prefixLink('/schedule/')} title="Q&A Schedule">Meetup Schedule</Button>
        </Buttons>
      </FrontPage>
    )
  }
}
