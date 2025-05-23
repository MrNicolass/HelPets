import { useState } from 'react';

export function useSaveConfig(scope: 'user' | 'app') {
  const [ loading, setLoading ] = useState(false);

  async function save(payload: unknown) {
    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 600));

      localStorage.setItem(
        scope === 'user' ? 'hp_user_cfg' : 'hp_app_cfg',
        JSON.stringify(payload)
      );

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  }

  return { save, loading };
}
