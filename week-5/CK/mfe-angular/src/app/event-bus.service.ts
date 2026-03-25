import { Injectable } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { events$ } from '@mfe-demo/event-bus';

const SOURCE = 'angular';

export interface BusMessage {
  type: string;
  payload: unknown;
  source: string;
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class EventBusService {
  readonly messages$: Observable<BusMessage[]> = events$.pipe(
    scan(
      (acc: BusMessage[], msg: BusMessage) => {
        if (msg.source === SOURCE) return acc;
        return [{ ...msg }, ...acc].slice(0, 50);
      },
      [] as BusMessage[],
    ),
  );
}
