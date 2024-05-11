import { Head, router } from '@inertiajs/react'
import { Trans, useTranslation } from 'react-i18next'
import { Chat } from '~/features/chat/chat'
import React from 'react'

export default function Game() {
  const [openChat, setOpenChat] = React.useState(false)
  const { t } = useTranslation()
  return (
    <div className={'relative flex justify-center items-center h-screen w-screen'}>
      <Head title="Game" />

      <div>
        <div className={'absolute bottom-0 right-0 m-3'}>
          {!openChat && (
            <button
              className={'border-2 border-gray-500 bg-gray-500 hover:text-white p-2 rounded-md'}
              onClick={() => setOpenChat(true)}
            >
              💬
            </button>
          )}
          {openChat && <Chat isOpen={openChat} setOpenChat={setOpenChat} />}
        </div>
        <h1 className={'text-4xl font-bold'}>{t('game.title')}</h1>
        <p className={'text-lg'}>
          <Trans
            i18nKey="game.description"
            components={{ span: <span className={'font-bold block'}></span> }}
          >
            {t('game.description')}
          </Trans>
        </p>
        <button
          className={'border-2 border-gray-500 hover:bg-gray-500 hover:text-white p-2 rounded-md'}
          onClick={() => router.visit('/')}
        >
          {t('game.buttons.start')}
        </button>
      </div>
    </div>
  )
}
