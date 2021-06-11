export interface WelcomeUI {
  id: number | string;
  videoUrl: string;
  posterUrl: string;
  quote?: string;
}

export function createWelcomeUI(params: Partial<WelcomeUI>) {
  return {
    videoUrl: params.videoUrl ?? '',
    posterUrl: params.posterUrl ?? '',
    quote: params.quote ?? '电影改变了生活，但生活还是生活'
  } as WelcomeUI;
}
