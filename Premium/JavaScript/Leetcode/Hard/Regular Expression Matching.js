/**10. Regular Expression Matching
Hard

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Note:

    s could be empty and contains only lowercase letters a-z.
    p could be empty and contains only lowercase letters a-z, and characters like . or *.

Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

 */

 const isMatch = (s,p) => {
     if(p.length === 0) return s.length === 0;

     //p's length is 1 special case
     if(p.length === 1 || p.charAt(1) !== '*'){
         if(s.length < 1 || (p.charAt(0) !== '.' && s.charAt(0) !== p.charAt(0))) {
             return false;
         }
         return isMatch(s.substring(1), p.substring(1));
     } else {
         const len = s.length;

         let i = -1;

         while(i < len && (i < 0 || p.charAt(0) === '.' || p.charAt(0) === s.charAt(i))){
             if(isMatch(s.substring(i+1),p.substring(2))){
                 return true;

                 
             }
             i++;
             
         }
         return false;
     }
 }