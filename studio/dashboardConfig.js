export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610e7781b5d12c0c1c5f5c1d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ghxxfwz2',
                  apiId: 'ae3cfa6a-962f-4db2-8e0d-8fa6d980edf6'
                },
                {
                  buildHookId: '610e77812175632c4c6a0213',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-564m1v3p',
                  apiId: '264ecc56-c4ac-4f94-8b0e-fd1152f7cea8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kina077/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-564m1v3p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
