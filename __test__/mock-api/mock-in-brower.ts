import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
 
export const mockInBrowser = setupWorker(
  http.get('/', () => HttpResponse.json({ id: 'abc-123' }))
)