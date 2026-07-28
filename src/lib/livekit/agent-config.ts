/**
 * LiveKit Agent Configuration
 * Integrates OpenAI Realtime API + Simli avatar
 *
 * To be implemented: backend worker setup (Node/Python)
 * that runs the agent and bridges OpenAI Realtime → Simli rendering
 */

export const agentConfig = {
  // OpenAI Realtime settings
  openaiModel: "gpt-realtime-mini",
  openaiVoice: "alloy",

  // Simli avatar settings
  simliVideoTrackLabel: "avatar-video",

  // Session limits
  maxSessionDurationSeconds: 20 * 60, // 20 minutes
};
