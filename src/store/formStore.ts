import { SignupService } from '@/services/signup.service'
import { create } from 'zustand'

type Tabs = 'form' | 'finish'
type Forms = 'email' | 'share'
export type Socials = 'instagram' | 'vkontakte' | 'twitter' | 'facebook'

interface FormState {
  email: string
  currentTab: Tabs
  currentForm: Forms
  isShared: boolean
  apiError: string
  sharedSocials: Socials[]

  setEmail: (email: string) => void
  setForm: (form: Forms) => void
  setTab: (tab: Tabs) => void
  setIsShared: (value: Socials) => void
  setApiError: (message: string) => void
  reset: () => void
  handleSubmit: () => Promise<void>
}

export const useFormStore = create<FormState>((set, get) => ({
  currentTab: 'form',
  isShared: false,
  currentForm: 'email',
  email: '',
  apiError: '',
  sharedSocials: [],

  setApiError: (message) => set({ apiError: message }),
  setEmail: (email) => set({ email }),
  setForm: (form) => set({ currentForm: form }),
  setTab: (tab) => set({ currentTab: tab }),
  setIsShared: (value) => set((state) => ({ isShared: true, sharedSocials: [...state.sharedSocials, value] })),
  reset: () =>
    set({
      currentTab: 'form',
      email: '',
      currentForm: 'email',
      isShared: false,
      sharedSocials: [],
    }),
  async handleSubmit() {
    try {
      const email = get().email
      const data = await SignupService.signup(email)
      get().setTab('finish')

      window.localStorage.setItem('aviasales-id', data.id.toString())
    } catch (error: any) {
      get().setForm('email')
      get().setApiError(error.message)
    }
  },
}))
