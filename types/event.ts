export interface EventTickets {
  link: string
  startDate: string
  endDate: string
  price: number
  available: boolean
  couponCodes?: string[]
}

export interface EventC4P {
  link: string
  description: string
  requirements: string[]
  suggestions?: string[]
  startDate: string
  endDate: string
}

export interface TechEvent {
  links: any
  _path: any
  name: string
  startDate: string
  endDate: string
  city: string
  location: string
  isFree: boolean
  submitter?: string
  image: string
  category: string[]
  tickets?: EventTickets
  c4p?: EventC4P
}
