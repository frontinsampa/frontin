import * as React from 'react';

export const INITIAL_CONTEXT = {
  settings: {},
};

const SettingsContext = React.createContext(INITIAL_CONTEXT);
const { Provider: SettingsProvider } = SettingsContext;

export function useSettings() {
  return React.useContext(SettingsContext);
}

export default function Settings({ children, ...props }) {
  const [settings] = React.useState(props.settings);

  const value = React.useMemo(
    () => ({ settings }),
    [settings],
  );

  return (
    <SettingsProvider value={value}>
      {children}
    </SettingsProvider>
  );
}
