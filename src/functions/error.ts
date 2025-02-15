export function errorToString(error: unknown): string {
  if (error instanceof Error) {
    return error.toString();
  } else {
    return String(error);
  }
}
