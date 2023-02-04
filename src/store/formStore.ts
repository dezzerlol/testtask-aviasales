import { create } from 'zustand'

type Tabs = 'form' | 'finish'
type Forms = 'email' | 'share'

interface FormState {
  email: string
  currentTab: Tabs
  currentForm: Forms
  isShared: boolean

  setEmail: (email: string) => void
  setForm: (form: Forms) => void
  setTab: (tab: Tabs) => void
  setIsShared: () => void
  reset: () => void
}

export const useFormStore = create<FormState>((set) => ({
  currentTab: 'form',
  isShared: false,
  currentForm: 'email',
  email: '',

  setEmail: (email) => set({ email }),
  setForm: (form) => set({ currentForm: form }),
  setTab: (tab) => set({ currentTab: tab }),
  setIsShared: () => set({ isShared: true }),
  reset: () =>
    set({
      currentTab: 'form',
      email: '',
      currentForm: 'email',
      isShared: false,
    }),
}))
