import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const bus = new Subject();

export const send = (type, payload, source) =>
  bus.next({ type, payload, source, timestamp: Date.now() });

export const events$ = bus.asObservable();

export const ofType = (type) => events$.pipe(filter((e) => e.type === type));
