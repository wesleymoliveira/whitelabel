export function ComponentNoSsr({ children }) {
  return (
    <div data-testid="component-no-ssr">
      {typeof window === undefined ? null : children}
    </div>
  );
}
