"use client";

import { useState, useEffect } from 'react';

interface DiscordActivity {
  name: string;
  type: number;
  state?: string;
  details?: string;
}

interface DiscordPresence {
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name?: string;
  };
  activities: DiscordActivity[];
  listening_to_spotify: boolean;
  spotify?: {
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
  };
}

interface UseLanyardReturn {
  status: DiscordPresence | null;
  loading: boolean;
  error: string | null;
}

const DISCORD_USER_ID = '267373400022843393';

export function useDiscordPresence(): UseLanyardReturn {
  const [status, setStatus] = useState<DiscordPresence | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let heartbeatInterval: NodeJS.Timeout | null = null;

    const connect = () => {
      ws = new WebSocket('wss://api.lanyard.rest/socket');

      ws.onopen = () => {
        console.log('Lanyard WebSocket connected');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        switch (data.op) {
          case 1: // Hello - send init
            // Start heartbeat
            heartbeatInterval = setInterval(() => {
              if (ws?.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ op: 3 }));
              }
            }, data.d.heartbeat_interval);

            // Subscribe to user
            ws?.send(JSON.stringify({
              op: 2,
              d: {
                subscribe_to_id: DISCORD_USER_ID
              }
            }));
            break;

          case 0: // Event
            if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
              setStatus(data.d);
              setLoading(false);
              setError(null);
            }
            break;
        }
      };

      ws.onerror = () => {
        setError('WebSocket connection failed');
        setLoading(false);
      };

      ws.onclose = () => {
        if (heartbeatInterval) {
          clearInterval(heartbeatInterval);
        }
        // Reconnect after 5 seconds
        setTimeout(connect, 5000);
      };
    };

    connect();

    return () => {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return { status, loading, error };
}

// Helper function to get status color
export function getStatusColor(status: string): string {
  switch (status) {
    case 'online': return 'bg-emerald-500';
    case 'idle': return 'bg-yellow-500';
    case 'dnd': return 'bg-red-500';
    default: return 'bg-slate-500';
  }
}

// Helper function to get status text
export function getStatusText(status: string, t: (key: string) => string): string {
  switch (status) {
    case 'online': return t('about.developer.status.available');
    case 'idle': return t('about.developer.status.idle');
    case 'dnd': return t('about.developer.status.dnd');
    default: return t('about.developer.status.offline');
  }
}

// Helper function to get activity text
export function getActivityText(activityType: number, activityName: string, t: (key: string) => string): string {
  switch (activityType) {
    case 0: return `${t('about.developer.status.playing')} ${activityName}`;
    case 2: return `${t('about.developer.status.listening')} ${activityName}`;
    default: return activityName;
  }
}
