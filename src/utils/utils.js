
/**git-and-github-workflow  - version 5.13 - utils
 * - Features: 
 * 
 *     --> Building 'getFrequencyLabel'
 *   
 * Note: 'getFrequencyLabel' will dinamiclly calculate the 
 * frequency how a commands gets copy 
 */

export const getFrequencyLabel = (commandText) => {
    const count = Number(localStorage.getItem(commandText)) || 0;

    if (count > 10) return "Always use 🔥";
    if (count > 5) return "Often use ⚡️";
    if (count > 0) return "less use 📈"
    return "Not used yet ❄️"
}