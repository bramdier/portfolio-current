import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="mahasiswa">
    <Container>
      <Title>
        Web Assesment Lepkom <Badge>2021-</Badge>
      </Title>
      <P>
      The Web-Based Assessment System at LEPKOM Institution is designed to evaluate and track all student activities comprehensively. This system provides an efficient and transparent method for assessing students' academic progress, practical skills, and participation in institutional activities.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, Jquery, MySql</span>
        </ListItem>
      </List>

        <WorkImage src="/images/works/assesment01.png" alt="mahasiswa" /> 

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
