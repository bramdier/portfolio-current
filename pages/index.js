import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoBehance } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube2.jpg'
import thumbChannel from '../public/images/works/age.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Enginner based in Jakarta!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abraham Dier Spiez
          </Heading>
          <p>Software Enginner at KB Insurance Indonesia</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/picture.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Summary
        </Heading>
        <Paragraph>
          I am a Web Developer with over four years of experience in software development,
          specializing in backend web development and build scalable, efficient systems.
          Currently, I work in the insurance industry, developing high-performance solutions
          that drive business success.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2023</BioYear>
          Senior Software Enginner at KB Insurance Indonesia
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Computer Science Teacher at Penabur International Kelapa Gading
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          IT Staff at Lepkom University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Stack
        </Heading>
        <BioSection>
          <BioYear>Framework</BioYear>
          Laravel, Next, Codeigniter
        </BioSection>
        <BioSection>
          <BioYear>Language</BioYear>
          PHP, Javascript, Python, Golang
        </BioSection>
        <BioSection>
          <BioYear>Software</BioYear>
          Git, MSSQL, Postman, Microsoft Office, Odoo, Jira
        </BioSection>
        <BioSection>
          <BioYear>Database</BioYear>
          SQL, NoSQL
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/abrahamspr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @abrahamspr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/abraham_spr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @abraham_spr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/abrahamspiez" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @abrahamspiez
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.behance.net/abrahamsiregar1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoBehance />}
              >
                @abrahamsiregar1
              </Button>
            </Link>
          </ListItem>
        </List>


      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Post
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCSrw9WsLvengGp3v35-lUXQ"
            title="Loja Code"
            thumbnail={thumbChannel}
          >
            My Youtube Channel
          </GridItem>
          <GridItem
            href="https://www.youtube.com/watch?v=ytKb4UIfk5E"
            title="Video Musik Cover"
            thumbnail={thumbYouTube}
          >
            Binsar Napitu Channel
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              More
            </Button>
          </NextLink>
        </Box>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
