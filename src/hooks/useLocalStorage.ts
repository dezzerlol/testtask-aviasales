import { useState } from 'react'

export function useLocalStorage(keyName: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(keyName)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      setStoredValue(initialValue)
    }
  })

  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (err) {}
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
