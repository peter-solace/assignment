import {PaginationMeta} from "@/types/PaginationMeta";

export interface PaginatedAdvocates {
  items: Advocate[];
  meta: PaginationMeta
}

export interface Advocate {
  id: number
  firstName: string
  lastName: string
  city: string
  degree: string
  specialties: string[]
  yearsOfExperience: string
  phoneNumber: number
}