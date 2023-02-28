export const scaleFactor = 621 / 900

const baseUrl = `http://mushy-rose-pajamas.cyclic.app/`
export const collegeDetailsApi = collegeName => `${baseUrl}/collegeDetails?collegeName=${collegeName}`
export const placementInterestApi = `${baseUrl}/interns`
