import {json, redirect} from '@remix-run/node'

import {themePreferenceCookie} from '~/cookies'

export const action = async ({request}) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themePreferenceCookie.parse(cookieHeader)) || {}
  const themePreference = cookie.themePreference === `dark` ? `light` : `dark`

  return json(
    {themePreference},
    {
      headers: {
        'Set-Cookie': await themePreferenceCookie.serialize({
          themePreference,
        }),
      },
    }
  )
}

export const loader = () => redirect('/', {status: 404})
