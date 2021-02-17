<small>[Return Home](../../README.md)</small>

### Propositions (p, q, r, s..)

- Declarative statement that is either TRUE (T) or FALSE (F)
  - E.g. 1 + 1 = 2
  - Tom is human

### Logical operator

- Negation operator.

  - Let `p` be a proposition. The negation of p is `-p`
  - The truth value of `-p` is the opposite of `p`

- Conjunction Operator: (and)
  - The `conjunction` of p and q is `p ^ q` (p and q). `p ^ q` is true if and only if p and q are both true.
  - Tom is humand and tom is tall => `p ^ q`
- Disjunction operator (or)
  - The `disjunction` of p and q is `p v q` (p or q). `p v q` is true if p is true or q is true
- Truth tables
  - Used to fomrally define logical operators

Negation:

| p   | -p  |
| --- | --- |
| T   | F   |
| F   | T   |

Conjunction:

| p   | q   | p ^ q |
| --- | --- | ----- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | F     |
| F   | F   | F     |

Disjunction:
| p | q | p v q |
| --- | --- | ----- |
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

### Implication Operator

- `implications` (conditional statements)
- If `tomorrow is sunny` (p) then `John will go jogging` (q)
- The proposition 'p implies q' is written `p -> q`
- If p is true then q must be true
- If p is false then q is true or false

Implication:
| p | q | p -> q |
| --- | --- | ----- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

### Complex propositions

- Can create complex propositions that involve more than one operator

<u>Sophie will pas the CS225 exam (p)</u> if <u>she studies hard (q)</u>

- p -> q
- It is necessary for Fernando to <u>obtain \$2000 (p)</u> for him to <u>buy a computer (q)</u>

  - In order to get a computer he must have \$2000 (q -> p)

- You may <u>inspect the aircraft</u> (p) only if you <u>have security clearance</u> (q)
  - p -> q
- If the patient is an infant (p) the patient has no children (q)
  - q: patient has a child
  - p -> !q
- The file is either read-only (p) or it is not readonly (!p) but is a copy (q)
  - p: file read only
  - q:
  - p v (!p ^ q)
- Bob is either rich or humble, but Bob is not humble if he is Rich
  - p: Bob is rich
  - q: Bob is humble humble
  - (p v q) ^ (p -> !q)

p: Today is Monday
q: It is raining
r: It is hot

p -> q

- If it is Monday, then it is raining

!p -> (q v r)

- If it is not raining then it is either Monday or it is hot

!(p v q) <-> r

- Bi-conditional <-> (if and only if). The truth conditions on both side are equal
- It s is not the case that it is monday or it is raining if and only if it is hot.

(p <-> q) v (!r (+) q)

- (+) exclusive or. Only true if one or the other is true (not both)

| p   | q   | r   | P <-> q | !r  | !r (+) q |
| --- | --- | --- | ------- | --- | -------- |
| T   | T   | T   | T       | F   | T        |
| T   | T   | F   | T       | T   | F        |
| T   | F   | T   | F       | F   | F        |
| T   | F   | F   | F       | T   | T        |
| F   | T   | T   | F       | F   | T        |
| F   | T   | F   | F       | T   | F        |
| F   | F   | T   | T       | F   | F        |
| F   | F   | F   | T       | T   | T        |

### Logic Part 2

p -> q and !q -> !p

| p   | q   | p -> q |
| --- | --- | ------ |
| T   | T   | T      |
| T   | F   | F      |
| F   | T   | T      |
| F   | F   | T      |

| p   | q   | !p  | !q  | !q -> !p |
| --- | --- | --- | --- | -------- |
| T   | T   | F   | F   | T        |
| T   | F   | F   | T   | F        |
| F   | T   | T   | F   | T        |
| F   | F   | T   | T   | T        |

p -> q ≡ !q -> !p are equivalent

- Logically equivalent (≡)
- !q -> !p is the contrapositive of p -> q
  - An implication is logically equivalent to its contrapositive

```
while((!endOfFile || cntrlChar) && (!endofFile || error))
```

(¬endOfFile v cntrlChar) ^ (¬endOfFile v error)

rewritten:

¬endOfFile v (cntrlChar ^ error)

### Two particularly useful equivalences

- Distributivity:

  - p v (q ^ r) ≡ (p v q) ^ (p v r)
  - p ^ (q v r) ≡ (p ^ q) v (p ^ r)

- De Morgan's Laws
  - ¬(p ^ q) ≡ ¬p v ¬q
  - ¬(p v q) ≡ ¬p ^ ¬q

### Logic Expressions Part 3

- If the patient is an infant, then the patient has no children

  - AlexIsInfant -> ¬AlexHasChild

- Want to make the assertion about all patients

  - If any patient is an infant, then that patient has no child

    - Propositional logic expressions cannot express such statements

  - A `predicate` is a 'propositional function' with one or more arguments
    - Infant(x): true if and only if x is an infant
    - HasChild(x): is true if and only if x has a child

Infant(Alex) -> ¬HasChild(Alex)

- Proposition based on predicate Infant(x) and predicate HasChild(x)
- The statement is still only about Alex

#### Universal quantifier

- If any patient is an infant, then the patient has no children

∀x Infant(x) -> ¬HasChild(x)

- ∀ - For all. Universal quantifier
- x is restricted to a **domain of discourse** (all possible patients)

```
For all x, where x is a patient, if x is an infant, then x does not have a child
```

#### Existential Quantifier

```
There exists a patient that is an infant and has the flu
```

∃x Infant(x) ^ HasFlu(x)

- ∃
  - There exists an x
  - x is restricted to a domain (here patients)

```
There exists an x, where x is a patient, such that x is an infant and x has the flu
```

#### Negating Quantifiers

- Not all patients are infants
  ¬(∀x Infant(x))
  OR
  ∃x ¬Infant(x)
- There exists a patient that is not an infant
- These statements are equivalent

`There does not exist a patient that is an infant`
¬(∃x Infant(x))
OR
∀x ¬Infant(x)

¬(∀x P(x)) ≡ ∃x ¬P(x)
¬(∃x P(x)) ≡ ∀x ¬P(x)

- Similar to De Morgan's Laws
