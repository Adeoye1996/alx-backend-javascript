export default function guardrail(mathFunction) {
  const results = [];

  try {
    const result = mathFunction();
    results.push(result);
  } catch (error) {
    results.push(error.toString());
  } finally {
    results.push('Guardrail was processed');
  }

  return results;
}
