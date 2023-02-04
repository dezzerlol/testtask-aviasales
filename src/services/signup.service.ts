type User = {
  id: number
  email: string
}

export class SignupService {
  constructor() {}

  static users: User[] = []

  static async signup(email: string): Promise<User> {
    const isEmailValid = await this.validateEmail(email)

    if (!isEmailValid) {
      throw new Error('Введите валидный email.')
    }

    const isExist = this.checkIsExist(email)

    if (isExist) {
      throw new Error('Пользователь с таким email уже существует.')
    }

    const newUser = (await this.setTimeoutAsync(() => {
      const user = { email, id: Date.now() }
      this.users.push(user)
      return user
    }, 650)) as User

    return newUser
  }

  static async validateEmail(email: string) {
    const emailRegex =
      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

    const test = await this.setTimeoutAsync(() => emailRegex.test(email), 2000)
    return test
  }

  static checkIsExist(email: string) {
    return this.users.find((user) => user.email === email)
  }

  static setTimeoutAsync(cb: any, delay: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cb())
      }, delay)
    })
  }
}
