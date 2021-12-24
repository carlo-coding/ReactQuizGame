
export const shuffleArray = <T>(array: T[]): T[] => [...array].sort(_=>Math.random()-0.5);
