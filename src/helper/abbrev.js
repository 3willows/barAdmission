export default function abbrev(applicant) {
  return applicant
    .split(" ")
    .map((word) => word[0])
    .join("")
}
