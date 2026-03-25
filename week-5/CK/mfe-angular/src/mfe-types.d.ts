declare module '@mfe-demo/event-bus' {
  import type { Observable } from 'rxjs';

  export function send(type: string, payload: unknown, source: string): void;

  export const events$: Observable<{
    type: string;
    payload: unknown;
    source: string;
    timestamp: number;
  }>;
}
