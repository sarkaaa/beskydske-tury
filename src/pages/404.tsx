export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }

  return null;
}
