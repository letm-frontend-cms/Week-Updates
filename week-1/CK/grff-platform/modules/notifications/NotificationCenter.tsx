"use client";

import { Alert, Button, Card } from "@grff/ui-library";
import { useState } from "react";

interface Notification {
  id: number;
  type: "info" | "success" | "warning" | "error";
  message: string;
}

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: "info", message: "Welcome to the notification center!" },
    { id: 2, type: "success", message: "Module loaded successfully" },
  ]);

  const addNotification = (type: Notification["type"]) => {
    const messages = {
      info: "New information available",
      success: "Operation completed successfully",
      warning: "Please review your settings",
      error: "An error occurred",
    };

    const newNotif: Notification = {
      id: Date.now(),
      type,
      message: messages[type],
    };

    setNotifications((prev) => [newNotif, ...prev]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <Card title="🔔 Notification Center (Runtime Loaded)">
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" onClick={() => addNotification("info")}>
            Add Info
          </Button>
          <Button size="sm" onClick={() => addNotification("success")}>
            Add Success
          </Button>
          <Button size="sm" onClick={() => addNotification("warning")}>
            Add Warning
          </Button>
          <Button size="sm" onClick={() => addNotification("error")}>
            Add Error
          </Button>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No notifications</p>
          ) : (
            notifications.map((notif) => (
              <Alert
                key={notif.id}
                type={notif.type}
                onClose={() => removeNotification(notif.id)}
              >
                {notif.message}
              </Alert>
            ))
          )}
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500">
            ⚡ This module was loaded dynamically when you clicked the button
          </p>
        </div>
      </div>
    </Card>
  );
}
