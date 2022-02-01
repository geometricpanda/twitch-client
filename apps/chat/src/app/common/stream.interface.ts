export enum StreamEvent {
  Message = 'message'
}

interface _StreamEvent {
  type: StreamEvent;
  channel: string;
  timestamp?: string;
}

export interface StreamMessage extends _StreamEvent {
  from?: string;
  color?: string;
  message: string;
}

export type StreamEvents = StreamMessage;
