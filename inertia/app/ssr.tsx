import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import '~/services/i18n'
import { Layout } from '~/components/layout'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const page = pages[`../pages/${name}.tsx`]
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-shadow
      page.default.layout = (page) => <Layout>{page}</Layout>
      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
