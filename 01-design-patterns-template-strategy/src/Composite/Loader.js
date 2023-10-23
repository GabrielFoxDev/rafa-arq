/**
 * Represents a loader for a specific file type.
 */
export default class Loader {
  /**
   * Creates a new instance of Loader.
   *
   * @param {string} fileType - The type of file supported by this loader.
   */
  constructor(fileType) {
    this.fileType = fileType;
  }

  /**
   * Loads a file.
   *
   * @param {string} filePath - The path of the file to be loaded.
   * @returns {Promise} - A promise that resolves with the loaded file data.
   */
  load(filePath) {
    throw new Error('Method not implemented.');
  }

  /**
   * Checks if this loader supports a given file type.
   *
   * @param {string} fileType - The file type to check.
   * @returns {boolean} - True if the loader supports the file type, false otherwise.
   */
  supportsFile(fileType) {
    return fileType === this.fileType;
  }
}