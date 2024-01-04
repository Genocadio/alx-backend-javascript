export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.concat(mathFunction());
  } catch (err) {
    queue.concat(String(err));
  } finally {
    queue.concat('Guardrail was processed');
  }

  return queue;
}
