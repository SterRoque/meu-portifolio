export function truncateText(text: string, limit?: number): string {
   return `${text.substring(0, limit ?? 200)}...`;
}
