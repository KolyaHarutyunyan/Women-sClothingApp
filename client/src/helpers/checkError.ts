export type TError = {
	path: [string];
	message: string;
} | null;

export const checkError = (error: TError, path: string): boolean =>
	!!error && error.path[0] === path;
