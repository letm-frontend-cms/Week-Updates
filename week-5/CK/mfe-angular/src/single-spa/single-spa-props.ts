import { ReplaySubject } from 'rxjs';
import type { AppProps } from 'single-spa';

export const singleSpaPropsSubject = new ReplaySubject<SingleSpaProps>(1);

export type SingleSpaProps = AppProps & Record<string, unknown>;
