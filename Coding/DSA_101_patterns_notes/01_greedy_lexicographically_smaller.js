//Pattern 1. Whenever you read

// "smallest"
// or
// "largest"

// your brain should immediately ask

// Can I make a greedy decision?

//IMPORTANT: Because these words almost always indicate Greedy Algorithms.
// Examples

// Smallest number
// Largest number
// Minimum cost
// Maximum profit
// Lexicographically smallest

// Almost always think "Greedy"

// Question. Remove duplicate letters so every character appears once and the
// result is lexicographically smallest.
// Input: "cbacdcbc"
// Output: "acdb"
// Explain "lexicographically smallest" means.

//Pattern 2. Second thinking pattern

// Whenever removing something, ask

// Can I get it back later?

// This is THE key question.

// This question becomes

// Is this the last occurrence?

// If YES

// Don't remove.

// If NO

// Safe to remove.

// This idea appears in many interview problems.

// Always ask

// "Will this element come again?"

//Pattern 3: Why Stack?
// The last inserted one.

// We need to undo the latest decision.

// Undo latest...

// Which data structure? "Stack"

// Finally:
// Words in question

// Lexicographically smallest

// ↓

// Think

// Greedy

// ↓

// Need to undo previous choices?

// ↓

// Stack

// ↓

// Can remove only if character appears later

// ↓

// Need last occurrence

function findLexcioSmallest(str) {
  const lastPositionOfChar = {};
  for (let i = 0; i < str.length; i++) {
    lastPositionOfChar[str[i]] = i;
  }

  const stack = [];
  const uniques = new Set();

  for (let i = 0; i < str.length; i++) {
    if (uniques.has(str[i])) continue;

    while (
      stack.length > 0 &&
      lastPositionOfChar[stack[stack.length - 1]] > i &&
      stack[stack.length - 1] > str[i]
    ) {
      uniques.delete(stack.pop());
    }
    stack.push(str[i]);
    uniques.add(str[i]);
  }
  console.log("stack --->", stack);

  return stack.join("");
}

const str = "cbacdcbc";

findLexcioSmallest(str);

//Learning After:
// When think of a "stack" and comparison "till", think "while" loop.
