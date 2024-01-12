/**
 * Defines a fact about a person.
 */
export class PersonFact {
  /**
   * The label of the fact
   */
  label: string;

  /**
   * The value of the fact
   */
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}
