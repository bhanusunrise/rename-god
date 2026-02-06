import fs from "fs";
import path from "path";

/**
 * Get file name(s) from a path
 * @param {string} inputPath
 * @returns {string | string[]}
 */
export function getFileNames(inputPath) {
  if (!fs.existsSync(inputPath)) {
    throw new Error("Path does not exist");
  }

  const stats = fs.statSync(inputPath);

  // If it's a file → return file name
  if (stats.isFile()) {
    return path.basename(inputPath);
  }

  // If it's a directory → return all file names
  if (stats.isDirectory()) {
    return fs.readdirSync(inputPath);
  }
}
