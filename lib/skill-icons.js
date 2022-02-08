const skills = [
  { name: "react", hex: "61DAFB" },
  { name: "angular", hex: "DD0031" },
  { name: "firebase", hex: "FFCA28" },
  { name: "html5", hex: "E34F26" },
  { name: "css3", hex: "1572B6" },
  { name: "javascript", hex: "F7DF1E" },
  { name: "express", hex: "000000" },
  { name: "mongodb", hex: "47A248" },
  { name: "jquery", hex: "0769AD" },
];

export default function getSkillIconColor(skillName) {
  const foundSkill = skills.find((skill) => skill.name === skillName);

  if (!foundSkill) {
    return "white";
  }

  return foundSkill.hex;
}
