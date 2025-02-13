export interface ApiResponse<T> {
    data?: T
    error?: string
    status: number
  }
  
  export interface ContactFormData {
    name: string
    email: string
    phone?: string
    subject: string
    message: string
  }
  
  export interface NewsletterData {
    email: string
    name: string
    agro: boolean
    general: boolean
  }