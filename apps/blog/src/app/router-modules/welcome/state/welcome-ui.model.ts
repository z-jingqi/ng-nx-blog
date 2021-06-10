export interface WelcomeUI {
  id: number | string;
  videoUrl: string;
  posterUrl: string;
}

export function createWelcomeUI(params: Partial<WelcomeUI>) {
  return {
    videoUrl: params.videoUrl
  } as WelcomeUI;
}
