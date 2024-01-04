export class SportheimInfo {
  /**
   * An image to display.
   */
  image: string;

  /**
   * General information.
   */
  content: string;

  /**
   * Information about the owners.
   */
  owner: string;

  /**
   * Menues.
   */
  menues: SportheimMenue[];
}

export class SportheimMenue {
  /**
   * Name of the menu.
   */
  name: string;

  /**
   * Link of the menu.
   */
  link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }
}
