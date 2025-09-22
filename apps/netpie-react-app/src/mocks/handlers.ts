import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post('/api/create_link_token', () => {
        return HttpResponse.json({
            link_token: 'mock-link-token',
        })
    }),

    http.post('/api/exchange_public_token', () => {
        return HttpResponse.json({
            access_token: 'mock-access-token',
            item_id: 'mock-item-id',
        })
    }),
];
