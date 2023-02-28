export const scaleFactor = 621 / 900

const baseUrl = 'https://mushy-rose-pajamas.cyclic.app/functionup'
export const collegeDetailsApi = collegeName => `${baseUrl}/collegeDetails?collegeName=${collegeName}`
export const placementInterestApi = `${baseUrl}/interns`
