import Iframe from 'sanity-plugin-iframe-pane'
import {Disc, Users, Tags, Home} from 'lucide-react'

import {projectDetails} from '~/sanity/projectDetails'

import {resolvePreviewUrl} from '~/sanity/structure/resolvePreviewUrl'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Singleton, home page curation
      S.documentListItem().schemaType('home').icon(Home).id('home').title('Home'),
      S.divider(),
      // Document lists
      S.documentTypeListItem('record').title('Records').icon(Disc),
      S.documentTypeListItem('artist').title('Artists').icon(Users),
      S.divider(),
      S.documentTypeListItem('genre').title('Genres').icon(Tags),
    ])

export const defaultDocumentNode = (S, {schemaType, getClient}) => {
  const {apiVersion} = projectDetails()
  const client = getClient({apiVersion})

  switch (schemaType) {
    case `record`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => resolvePreviewUrl(doc, client),
            reload: {button: true},
          })
          .title('Preview'),
      ])

    default:
      return S.document().views([S.view.form()])
  }
}
