<small>[Return Home](../../README.md)</small>

### Proofs

- A `theorem` is a mathematical statement that is true
- A `proof` is a rigorous argument that a theorem is true

Prove the statement:

- If n is a positive integer, then 2n - 1 > 1

P(x): is true if and only if n > 0
Q(x): is true if and only if 2n - 1 > 1

∀n P(n) -> Q(n)

- Many theorem are implications of this form. For some premise/hypothesis P(x) and conclusion Q(x)
  - Read as: If P(x) then Q(x)

How to prove: ∀x P(x) -> Q(x)

- Argue that the implication P(x) -> Q(x) is true for an 'arbitrary' x in the domain of discourse.

How to prove an implication P(x) -> Q(x)?

### Direct Proof (assume premise/hypothesis)

- A direct proof of P -> Q (If P then Q)

1. Assume that P is true.
2. Using this assumption (and other true facts) argue that Q must also be true
3. You can then conclude that P -> Q is true

`Prove:`
`If n is a positive integer, then 2n - 1 > 1`

(n > 0) -> (2n - 1 > 1)

1. Assume n > 0
2. n >= 1
   2n >= 2
   2n - 1 >= 1
3. (n > 0) -> 2n - 1 >= 1
   QED

### Proof via the contrapositive

Recall that an implication is equivalent to its contrapositive:
`P -> Q ≡ ¬Q -> ¬P`
Thus a proof of the contrapositive is also a proof of the implication

Proof of P -> Q by Contrapositive:

1. Assume that ¬Q is true
2. Using this assumption (and other true facts) argue that ¬P must also be true.
3. You can then conclude that ¬Q -> ¬P is true (and hence that P -> Q is true)

```
Prove the statement:
If n is an integer and 3n + 2 is odd, then n is odd 
```

(3n + 2 is odd) -> (n is odd)
OR
(n is even) -> (3n + 2 is even)

¬Q: n is even
¬P:  3n + 2 is even

1. Assume ¬Q: n is even
2. 
```
   n = 2K
   3n + 2 = 3*2K + 2
          = 2(3K + 1)   (3K + 1) => K*
          = 2K*
```
3. ¬Q -> ¬P
QED


### Proofs part 2
* What if the theorem statement is not naturally an implication?
  * e.g. There is an infinite number of prime numbers

#### Proof by contradiction
* A `contradiction` is a statement that is inconsistent with our assumptions or other facts known to be true
  * 1 > 2 contradicts facts about numbers
  * n is odd contradicts the assumption n is even


Proof by Contradiction of theorem S: (S may be an implication or not)
1. Assume ¬S is true (S is false)
2. Using this assumption (and other true facts) derive a contradiction
3. If step 2 is successful then conclude that S is true

Intuition: Shows that a 'world' where S is false is impossible (leads to contradiction)

Suppose S is an implication P -> Q
¬S ≡ ¬(P -> Q) ≡ P ^ ¬Q
1. Assume P ^ ¬Q

#### Proof of Equivalence (or Biconditional)
* An integer n is positive if and only if -n is negative
* P <-> Q where
  P ≡ n > 0
  Q ≡ -n < 0

  To prove P <-> Q you must prove 2 implications:
  1. P -> Q (P is a `sufficient` condiction for Q)
  2. Q -> P (P is a `necessary` condition for Q)

#### Proof by cases
```
If 1 <= n <= 3 then n + 100 > 3^n (power)
```
Case 1: n = 1. Then n + 100 = 101 > 3 
Case 2: n = 2. Then n + 100 = 102  > 9
Case 3: n = 3. Then n + 100 = 103 > 27

#### Existance proofs
* Prove the statement:
  * There is an n > 0 that can be written as the sum of cubes of positive integers in two different ways
  * `There exists` an n such that P(n)
  * ∃x P(x)
* Existence proofs:
1. `Constructive`: find a c in domain of discourse such that P(c) is true
2. `Non-constructive`: Prove existence without explicitly identifying such a c. 


### Proof by Induction
