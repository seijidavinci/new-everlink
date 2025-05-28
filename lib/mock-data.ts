import type {
  Application,
  CharacterReference,
  Education,
  Employment,
  PersonalProfile
} from "./types"
import { generateSequentialID } from "./supabase"

// Replace hardcoded mock data with this async factory:
export const createMockData = async (): Promise<{
  application: Application
  personalProfile: PersonalProfile
  education: Education
  employment: Employment
  characterReference: CharacterReference
}> => {
  const appID = await generateSequentialID("APP")
  const personID = await generateSequentialID("PER")
  const educID = await generateSequentialID("EDU")
  const employmentID = await generateSequentialID("EMP")
  const characterReferenceID = await generateSequentialID("REF")

  return {
    application: {
      appID,
      personID,
      educID,
      employmentID,
      submissionDate: "2025-04-01",
      status: "Under Review"
    },
    personalProfile: {
      personID,
      applicantID: appID,
      name: "John Doe",
      sex: "Male",
      cityAddress: "123 City St, Manila",
      residentialAddress: "123 City St, Manila",
      birthDate: "1990-01-01",
      birthPlace: "Manila",
      civilStatus: "Single",
      citizenship: "Filipino",
      height: 175,
      weight: 70,
      religion: "Catholic",
      cellphoneNumber: "+639123456789",
      fatherName: "John Doe Sr.",
      motherName: "Jane Doe",
      emergencyContactName: "Jane Doe",
      emergencyContactNumber: "+639123456789",
      languages: ["English", "Filipino"],
      skills: ["Communication", "Customer Service"]
    },
    education: {
      educID,
      personID,
      educationLevel: "College",
      school: "PUP",
      yearGraduated: "2020"
    },
    employment: {
      employmentID,
      personID,
      characterReferenceID,
      position: "CSR",
      company: "ABC Telecom",
      occupationStart: "2020-01-01",
      occupationEnd: "2022-12-31"
    },
    characterReference: {
      characterReferenceID,
      referenceName: "Maria Santos",
      referenceOccupation: "Manager",
      referenceCompany: "ABC Telecom"
    }
  }
}
