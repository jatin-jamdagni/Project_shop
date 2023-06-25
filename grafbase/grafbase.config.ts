import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min:3, max:20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string(),
  githubUrl:g.url().optional(),
  linkedinUrl:g.url().optional(),
  projects:g.relation(() => Project).list().optional(),
})

const Project = g.model('Prject',{
  title:g.string().length({min:3}),
  description:g.string().optional(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=> User)
})

export default config({
  schema: g
})
