export interface SportheimInfoJson {
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
   * The menues.
   */
  menues: SportheimMenuJson[];
}

export interface SportheimMenuJson {
  /**
   * Name of the menu.
   */
  name: string;

  /**
   * Link of the menu.
   */
  link: string;
}
