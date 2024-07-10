class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const cleanedS1 = s.replace(/\s/g, '').toLowerCase();
    const cleanedS2 = t.replace(/\s/g, '').toLowerCase();

    const sortedS1 = cleanedS1.split('').sort().join('');
    const sortedS2 = cleanedS2.split('').sort().join('');

    if (sortedS1 === sortedS2) {
        return true;
    } else {
        return false;
    }
    }
}
