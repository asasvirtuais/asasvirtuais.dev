'use server'

import { getSession } from '@auth0/nextjs-auth0'
import { RedirectType, redirect } from 'next/navigation'

type Claims = {
    nickname: string
    name: string
    email: string
    picture: string
    email_verified: boolean
}

export const userOrLogin = async (returnTo: string) => {

    console.log('run me once')
    const session = await getSession()
    const user = session?.user
    if (!user)
        redirect(`/api/auth/login?returnTo=${returnTo}`, RedirectType.push)
    console.log(user)
    return user as Claims
}