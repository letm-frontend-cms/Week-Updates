/**
 * Browser entry: attaches UI library to window.GRFF_UI for runtime loading.
 * Built separately; host app provides React/ReactDOM via window before loading this script.
 */
import { Alert, Button, Card, UI_LIBRARY_VERSION } from "./index";

declare global {
  interface Window {
    GRFF_UI: {
      Button: typeof Button;
      Card: typeof Card;
      Alert: typeof Alert;
      version: string;
    };
  }
}

window.GRFF_UI = {
  Button,
  Card,
  Alert,
  version: UI_LIBRARY_VERSION,
};
