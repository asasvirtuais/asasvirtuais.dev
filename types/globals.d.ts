import type { NextRequest, NextResponse } from 'next/server'

declare global {
    type GenericFn<P = any[], R = any> = (...p: P) => R
    type AsyncFn<P = any[], R = any> = GenericFn<P, Promise<R>>

    type FnPR<
        F extends Fn,
        P extends Parameters<F> = Parameters<F>,
        R extends ReturnType<F> = ReturnType<F>,
    > = { fn: Fn, params: P, returns: R }

    type AsyncPR = FunPR
    type ErrorHandler<E = unknown, R = any> = GenericFn<E, R>

    // Returns NextResponse
    type NextRouteHandler<
        P = {},
        B = any,
    > = (request: NextRequest, params: { params: P }) => Promise<NextResponse<B>>
    // Doesn't need to
    type NextRequestHandler<
        P = {},
        R extends any = void
    > = (request: NextRequest, params?: { params: P }) => R
}
