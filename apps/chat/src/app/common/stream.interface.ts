export enum StreamEvent {
  Message = 'message',
  Join = 'join',
}

interface _StreamEvent {
  type: StreamEvent;
  channel: string;
}

export interface StreamChat extends _StreamEvent {
  timestamp?: string;
  from?: string;
  color?: string;
}

export interface StreamMessage extends _StreamEvent {
  timestamp?: string;
  from?: string;
  color?: string;
  message: string;
}

export type StreamEvents = StreamChat | StreamMessage;
