'use client';

import { useState } from 'react';

export function useSaveConfig<T>(scope: 'user' | 'app') {
  const [ loading, setLoading ] = useState(false);

  async function save(payload: T) {
    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 600));
    
      const key = scope === 'user' ? 'hp_user_cfg' : 'hp_app_cfg';

      localStorage.setItem(key, JSON.stringify(payload));

    } finally {
      setLoading(false);
    }
  }

  return { save, loading };
}
