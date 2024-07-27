export const groupByDiagnosis = (patients) => {
  return patients.reduce((groups, patient) => {
    const condition = patient.condition;
    if (!groups[condition]) {
      groups[condition] = [];
    }
    groups[condition].push(patient);
    return groups;
  }, {});
};
