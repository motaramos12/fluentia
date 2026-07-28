import { AccessToken } from "livekit-server-sdk";

/**
 * Generate LiveKit access token for a user to join a conversation room
 */
export function generateLiveKitToken(
  userId: string,
  roomName: string,
  userDisplayName: string
) {
  const at = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!
  );

  at.identity = userId;
  at.name = userDisplayName;
  at.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  });

  return at.toJwt();
}

/**
 * Generate unique room name for a conversation session
 */
export function generateRoomName(sessionId: string): string {
  return `fluentia-${sessionId}`;
}
