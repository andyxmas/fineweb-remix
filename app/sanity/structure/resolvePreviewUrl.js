import {getSecret, SECRET_ID} from '~/sanity/structure/getSecret'

export async function resolvePreviewUrl(doc, client) {
  const remoteUrl = `https://www.example.com`
  const baseUrl = window?.location?.hostname === 'localhost' ? window.origin : remoteUrl
  const previewUrl = new URL('/resource/preview', baseUrl)

  if (!doc?.slug?.current) {
    return previewUrl.toString()
  }

  previewUrl.searchParams.set('slug', doc.slug.current)
  const secret = await getSecret(client, SECRET_ID, true)

  if (secret) {
    previewUrl.searchParams.set('secret', secret)
  }

  return previewUrl.toString()
}
