export interface LoginProps {}

export interface LoginHookProps {
  onLogin: () => void;
  setUsername: (text?: string) => void;
  setPassword: (text?: string) => void;
}
