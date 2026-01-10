import { toast } from "sonner";

/**git-and-github-workflow  - version 8.01 - utils
 * - Features: 
 * 
 *     --> Building 'handleCopyCommand'
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

export const handleCopyCommand = (textToCopy) => {
    if (!textToCopy) return;

    // 1. Update localStorage tracking
    const currentCount = Number(localStorage.getItem(textToCopy)) || 0;
    localStorage.setItem(textToCopy, currentCount + 1);

    // 2. Clipboard Logic
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => toast.success('Git Code copied 😊'))
            .catch(() => toast.error('An error occurred 😕'));
    } else {
        // Fallback for older environments
        try {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            toast.success('Git Code copied 😊');
        } catch (err) {
            toast.error('Copy failed 🙁');
        }
    }
};
